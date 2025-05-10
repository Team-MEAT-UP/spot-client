export const KakaoLogin = () => {
  const handleKakaoLogin = () => {
    const kakaoAuthUrl = "https://api.pickspot.co.kr/oauth2/authorization/kakao";
    window.location.href = kakaoAuthUrl;
  };

  return (
    <button
      className="flex gap-2 w-full h-14 justify-center items-center bg-kakao-yellow text-kakao-black text-md font-semibold rounded-2xl"
      onClick={handleKakaoLogin}>
      <img src="/icon/kakao.svg" alt="카카오 로그인" className="w-5 h-5" />
      카카오 로그인
    </button>
  );
};
