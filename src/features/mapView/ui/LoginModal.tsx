import { Modal } from "@/shared/ui";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useFindStore } from "@/shared/stores";

export const LoginModal = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const eventIdParam = searchParams.get("eventId"); // eventId 쿼리 파라미터 추출
  const { resetFindStore } = useFindStore(); // store 초기화 함수 추가

  const handleNextTime = () => {
    resetFindStore(); // store 초기화
    navigate(`/find?eventId=${eventIdParam}`);
  };

  return (
    <Modal>
      <div>
        <div className="flex flex-col items-center gap-1 py-7 px-5 text-center">
          <h1 className="text-md font-semibold text-gray-90">로그인 하시겠어요?</h1>
          <p className="text-xs text-gray-50 font-semibold">
            로그인하지 않으면 <br />
            모임을 저장할 수 없어요
          </p>
        </div>
        <div className="flex flex-row w-full text-sm font-semibold">
          <button className="w-1/2 border-t border-gray-5 py-3 text-gray-40" onClick={handleNextTime}>
            다음에 하기
          </button>
          <button className="w-1/2 bg-gray-90 text-white rounded-br-2xl" onClick={() => navigate("/")}>
            로그인
          </button>
        </div>
      </div>
    </Modal>
  );
};
