import { useFindStore } from "@/shared/stores";
import Button from "@/shared/ui/Button";
import { GetLocaitonButton } from ".";
import { useState, useEffect } from "react";
import PlainHeader from "@/shared/ui/PlainHeader";
import { mockSearchData } from "@/shared/model";
import { InputField, LocationCard } from "@/shared/ui";

interface Location {
  name: string;
  address: string;
}

export const LocationStep = () => {
  const { startPoint, setStartPoint, prevStep } = useFindStore();
  const [value, setValue] = useState(startPoint || "");
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [searchResults, setSearchResults] = useState<Location[]>([]);

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
    const inputValue = e.target.value;
    setValue(e.target.value);
    if (inputValue.trim().length > 0) {
      setIsTyping(true);
      // mock 데이터 필터링해서 리스트 보여주기 (임시)
      setSearchResults(
        mockSearchData.filter(item => item.name.includes(inputValue) || item.address.includes(inputValue))
      );
    } else {
      setIsTyping(false);
      setSearchResults([]);
    }
  };

  const validateValue = () => {
    return value.trim().length > 0;
  };

  const handleSelectLocation = (location: Location) => {
    setValue(location.name);
    setIsTyping(false);
    setSearchResults([]);
  };

  const handleComplete = () => {
    if (!validateValue()) return;
    setStartPoint(value);
    // TODO: 완료 처리
  };

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
              {searchResults.map((location, index) => (
                <LocationCard
                  key={index}
                  name={location.name}
                  address={location.address}
                  onClick={() => handleSelectLocation(location)}
                />
              ))}
            </div>
          ) : (
            <GetLocaitonButton />
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
            완료
          </Button>
        </div>
      )}
    </div>
  );
};
