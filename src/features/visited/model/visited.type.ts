export type VisitedTimeType = "MORNING" | "LUNCH" | "NIGHT";

export interface VisitedReviewPayload {
  visitedTime: VisitedTimeType;
  socket: number;
  seat: number;
  quiet: number;
  content?: string;
}
