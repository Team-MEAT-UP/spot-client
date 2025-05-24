export const formatDaysAgo = (day: number) => {
  if (day < 7) {
    return `${day}일 전`;
  } else if (day < 14) {
    return "1주일 전";
  } else if (day < 28) {
    return "2주 전";
  } else if (day < 60) {
    return "한 달 전";
  } else if (day < 90) {
    return "두 달 전";
  } else if (day < 365) {
    const months = Math.floor(day / 30);
    return `${months}개월 전`;
  } else {
    const years = Math.floor(day / 365);
    return `${years}년 전`;
  }
};
