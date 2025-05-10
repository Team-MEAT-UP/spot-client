import { FormattedData, useFindStore } from "@/shared/stores";
import Button from "@/shared/ui/Button";
import { GetLocationButton } from ".";
import { useState, useEffect } from "react";
import PlainHeader from "@/shared/ui/PlainHeader";
import { InputField, LocationCard } from "@/shared/ui";
import { useDebounce } from "@/shared/hooks";
import { addMember, createEvent, searchStartPoints } from "../service";
import { useMutation, useQuery } from "@tanstack/react-query";
import { StartPointResponse } from "../model";
import { highlightMatchingText, setCookie } from "@/shared/utils";
import { useNavigate, useSearchParams } from "react-router-dom";

interface StartPoint {
  id: string;
  name: string;
  address: string;
  roadAddress: string;
  latitude: number;
  longitude: number;
}

export const LocationStep = () => {
  const { startPointInfo, setStartPointInfo, prevStep, name, getFormattedData } = useFindStore();
  const [value, setValue] = useState(startPointInfo?.name ?? "");
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const debouncedValue = useDebounce(value, 300);
  const [isSearching, setIsSearching] = useState(false);
  const [searchParams] = useSearchParams();
  const eventIdParam = searchParams.get("eventId"); // eventId 쿼리 파라미터 추출
  const eventIdExists = !!eventIdParam;
  const navigate = useNavigate();

  const { data: searchResults = [], isError } = useQuery<StartPointResponse, Error, StartPoint[]>({
    queryKey: ["searchStartPoints", debouncedValue],
    queryFn: () => searchStartPoints({ textQuery: debouncedValue.trim() }),
    select: response =>
      response.data.documents.map(doc => ({
        id: doc.id,
        name: doc.place_name,
        address: doc.address_name,
        roadAddress: doc.road_address_name,
        latitude: parseFloat(doc.y),
        longitude: parseFloat(doc.x),
      })),
    enabled: isSearching && debouncedValue.trim().length > 0,
    staleTime: 0,
    refetchOnWindowFocus: false,
  });

  const { mutate: createEventMutate } = useMutation({
    mutationFn: createEvent,
    onSuccess: response => {
      const { eventId, startPointId } = response.data;

      // 쿠키 저장
      setCookie("eventId", eventId, { path: "/", maxAge: 86400 });
      setCookie("startPointId", startPointId, { path: "/", maxAge: 86400 });

      // 페이지 이동
      navigate(`/mapview?eventId=${eventId}`);
    },
    onError: error => {
      console.error("모임 생성 실패", error);
    },
  });
  const { mutate: addMemberMutate } = useMutation({
    mutationFn: ({ payload, eventId }: { payload: FormattedData; eventId: string }) => addMember(payload, eventId),
    onSuccess: response => {
      setCookie("startPointId", response.data.startPointId, { path: "/", maxAge: 86400 });
      navigate(`/mapview?eventId=${eventIdParam}`);
    },
    onError: error => {
      console.error("멤버 추가 실패", error);
    },
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setIsSearching(true);
  };

  const validateValue = () => value.trim().length > 0;

  const handleSelectLocation = (location: StartPoint) => {
    setValue(location.name);
    setStartPointInfo({
      name: name,
      startPoint: location.name,
      address: location.address,
      roadAddress: location.roadAddress,
      latitude: location.latitude,
      longitude: location.longitude,
    });
    setIsSearching(false);
  };

  const handleComplete = () => {
    if (!validateValue() || !startPointInfo) return;
    const data = getFormattedData();
    if (!data) return;

    if (eventIdExists && eventIdParam) {
      // eventId가 있으면 addMember 호출
      addMemberMutate({ payload: data, eventId: eventIdParam });
    } else {
      // eventId 없으면 createEvent 호출
      createEventMutate(data);
    }
  };

  const isTyping = isSearching && debouncedValue.trim().length > 0;

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 px-4">
        <div className="flex flex-col gap-4">
          <PlainHeader title="멤버 추가" onBack={prevStep} />
          <p className="text-gray-90 text-lg font-semibold">
            멤버 추가를 위해
            <br />
            이름과 출발지를 입력해주세요.
          </p>
          <InputField value={value} placeholder="출발지를 입력해주세요" onChange={handleChange} type="startPoint" />
          {isTyping ? (
            <div className="flex flex-col gap-2 overflow-y-auto max-h-[calc(100vh-216px)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {isError ? (
                <p className="text-red-500 text-sm">검색 중 오류가 발생했어요.</p>
              ) : (
                searchResults.map((location, index) => (
                  <LocationCard
                    key={index}
                    name={highlightMatchingText(location.name, debouncedValue)}
                    address={location.address}
                    onClick={() => handleSelectLocation(location)}
                  />
                ))
              )}
            </div>
          ) : (
            <GetLocationButton setValue={setValue} />
          )}
        </div>
      </div>
      {!isTyping && (
        <div
          className="px-4 mb-5 transition-all duration-300"
          style={{
            marginBottom: keyboardHeight > 0 ? `${keyboardHeight + 20}px` : "20px",
          }}>
          <Button onClick={handleComplete} disabled={!validateValue()}>
            추가하기
          </Button>
        </div>
      )}
    </div>
  );
};
