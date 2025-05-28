import Button from "@/shared/ui/Button";
import { GetLocationButton } from ".";
import { useState, useEffect } from "react";
import { InputField, LocationCard, PolicyBottomSheet } from "@/shared/ui";
import { FormattedData, StartPointInfo } from "../model";
import { highlightMatchingText } from "@/shared/utils";
import { useSearchParams } from "react-router-dom";
import { useCreateStartPoint } from "../hooks";
import { PlainHeader } from "@/widgets/headers";
import NoResult from "@/assets/icon/noresult.svg";
import { useSearch } from "@/entities/place/hooks";
import { StartPoint } from "@/entities/place/model";
import { useUserStore } from "@/shared/stores";

interface LocationStepProps {
  setCurrentStep: (step: number) => void;
  startPointInfo: StartPointInfo | null;
  setStartPointInfo: (info: StartPointInfo) => void;
  name: string;
}

export const LocationStep = ({ setCurrentStep, startPointInfo, setStartPointInfo, name }: LocationStepProps) => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [searchParams] = useSearchParams();
  const eventIdParam = searchParams.get("eventId");
  const [locationError, setLocationError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const email = useUserStore(state => state.email);
  const personalInfoAgreement = useUserStore(state => state.personalInfoAgreement);
  const setPersonalInfoAgreement = useUserStore(state => state.setPersonalInfoAgreement);

  const { value, setValue, searchResults, isError, handleChange, isTyping, setIsSearching, isFetching } = useSearch();

  const { handleSubmit } = useCreateStartPoint(eventIdParam);

  const onClose = () => {
    setIsPolicyOpen(false);
    setPersonalInfoAgreement(true);
  };

  useEffect(() => {
    if (email && personalInfoAgreement === false) {
      setIsPolicyOpen(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.visualViewport) {
        const viewportHeight = window.visualViewport.height;
        const windowHeight = window.innerHeight;
        const keyboardHeight = windowHeight - viewportHeight;
        setKeyboardHeight(keyboardHeight > 0 ? keyboardHeight : 0);
      }
    };

    window.visualViewport?.addEventListener("resize", handleResize);
    return () => {
      window.visualViewport?.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSelectLocation = (location: StartPoint) => {
    setValue(location.name);
    setIsSearching(false);
    setLocationError(false);
    setStartPointInfo({
      name: name,
      startPoint: location.name,
      address: location.address,
      roadAddress: location.roadAddress,
      latitude: location.latitude,
      longitude: location.longitude,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    if ((startPointInfo && newValue === startPointInfo.startPoint) || (startPointInfo && newValue === "")) {
      setIsSearching(false);
      return;
    }

    handleChange(e);
  };

  const getFormattedData = (): FormattedData | null => {
    if (!startPointInfo) return null;

    return {
      username: name,
      startPoint: startPointInfo.startPoint,
      address: startPointInfo.address,
      roadAddress: startPointInfo.roadAddress,
      longitude: startPointInfo.longitude,
      latitude: startPointInfo.latitude,
    };
  };

  const handleComplete = () => {
    if (isSubmitting) return; // 중복 방지
    if (value.trim().length === 0 || !startPointInfo) return;
    const data = getFormattedData();
    if (!data) return;

    try {
      setIsSubmitting(true);
      handleSubmit(data);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 px-4">
        <div className="flex flex-col gap-6">
          <PlainHeader title="출발지 추가" onBack={() => setCurrentStep(0)} />
          <p className="text-gray-90 text-xxl font-bold">
            <span className="text-sub-sub">{name}</span>님의
            <br />
            출발지를 알려주세요
          </p>
          <InputField
            value={value}
            placeholder="출발지를 입력해주세요"
            onChange={handleInputChange}
            type="startPoint"
          />
        </div>
        {isTyping ? (
          <div className="flex flex-col gap-2 overflow-y-auto max-h-[calc(100vh-216px)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] mt-4">
            {isError ? (
              <p className="text-red-500 text-sm">검색 중 오류가 발생했어요.</p>
            ) : searchResults.length === 0 && !isFetching ? (
              <div className="flex flex-col items-center justify-center py-10">
                <img src={NoResult} alt="검색 결과 없음" className="w-32 h-32" />
                <p className="text-center text-gray-40 text-sm">
                  일치하는 주소가 없어요
                  <br />
                  서울 내 지역인지 다시 확인해보세요
                </p>
              </div>
            ) : (
              searchResults.map((location, index) => (
                <LocationCard
                  key={index}
                  name={highlightMatchingText(location.name, value)}
                  address={location.address}
                  onClick={() => handleSelectLocation(location)}
                />
              ))
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <GetLocationButton
              setValue={setValue}
              setStartPointInfo={setStartPointInfo}
              name={name}
              onError={() => setLocationError(true)}
            />
            {locationError && (
              <div className="flex flex-col items-center justify-center py-4">
                <img src={NoResult} alt="위치 에러" className="w-32 h-32" />
                <p className="text-center text-gray-40 text-sm">현재 서울 내 지역인지 다시 확인해보세요</p>
              </div>
            )}
          </div>
        )}
      </div>
      {!isTyping && (
        <div
          className="px-4 mb-5 transition-all duration-300"
          style={{
            marginBottom: keyboardHeight > 0 ? `${keyboardHeight + 20}px` : "20px",
          }}>
          <Button onClick={handleComplete} disabled={value.trim().length === 0 || isSubmitting}>
            추가하기
          </Button>
        </div>
      )}
      {isPolicyOpen && <PolicyBottomSheet onClose={onClose} />}
    </div>
  );
};
