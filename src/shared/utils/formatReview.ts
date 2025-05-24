import { getScoreText } from "../model";

export function formatReview(placeScore: { socket: number; seat: number; quiet: number }): string[] {
  return [
    `콘센트 ${getScoreText("plug", placeScore.socket as 1 | 2 | 3 | 4 | 5)}`,
    `좌석 ${getScoreText("seat", placeScore.seat as 1 | 2 | 3 | 4 | 5)}`,
  ];
}
