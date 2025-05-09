import { useValidation } from "@/shared/hooks";
import { useFindStore } from "@/shared/stores";
import { validateName } from "@/shared/utils";
import Button from "@/shared/ui/Button";
import PlainHeader from "@/shared/ui/PlainHeader";
import { useEffect, useState } from "react";
import { InputField } from "@/shared/ui";

export const NameStep = () => {
  const { name, setName, nextStep } = useFindStore();
  const { value, error, handleChange, validateValue, isValid } = useValidation(name, validateName);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

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

  const handleNext = () => {
    if (!validateValue()) return;
    setName(value);
    nextStep();
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 px-4">
        <div className="flex flex-col gap-4">
          <PlainHeader title="멤버 추가" url="/" />
          <p className="text-gray-90 text-lg font-semibold">
            멤버 추가를 위해
            <br />
            이름과 출발지를 입력해주세요.
          </p>
          <InputField
            value={value}
            placeholder="5글자 내로 입력해주세요"
            onChange={handleChange}
            error={error}
            type="name"
          />
        </div>
      </div>
      <div
        className="px-4 mb-5 transition-all duration-300"
        style={{
          marginBottom: keyboardHeight > 0 ? `${keyboardHeight + 20}px` : "20px",
        }}>
        <Button onClick={handleNext} disabled={!isValid}>
          다음
        </Button>
      </div>
    </div>
  );
};
