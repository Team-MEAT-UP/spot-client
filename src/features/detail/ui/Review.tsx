import { toValidScore } from "@/shared/utils";
import { PlaceQuietness, ReviewType } from "../model";
import { ProgressBar } from "./ProgressBar";
import { ReviewItem } from "./ReviewItem";
import { Tag } from "./Tag";
import { PlaceScore } from "@/shared/model";

interface ReviewProps {
  placeQuietnessResponse: PlaceQuietness;
  placeScore: PlaceScore;
  reviews: ReviewType[];
  googleReviews: ReviewType[];
}

export const Review = ({ placeQuietnessResponse, placeScore, reviews, googleReviews }: ReviewProps) => {
  return (
    <>
      <div className="p-5 flex flex-col gap-4">
        <span className="text-lg font-semibold text-gray-90">방문자 리뷰</span>
        <div className="px-5 py-[22px] flex flex-col gap-[14px] rounded-2xl border border-gray-10">
          <ProgressBar type="morning" congestion={toValidScore(placeQuietnessResponse.morning)} />
          <ProgressBar type="afternoon" congestion={toValidScore(placeQuietnessResponse.lunch)} />
          <ProgressBar type="evening" congestion={toValidScore(placeQuietnessResponse.night)} />
        </div>
        {placeScore && (
          <div className="flex gap-[6px] w-full">
            <Tag type="plug" score={placeScore.socket as 1 | 2 | 3 | 4 | 5} />
            <Tag type="seat" score={placeScore.seat as 1 | 2 | 3 | 4 | 5} />
          </div>
        )}
      </div>
      {reviews.length > 0 && reviews.map(item => <ReviewItem key={item.content} {...item} />)}
      {googleReviews.length > 0 &&
        googleReviews.map(item => <ReviewItem key={item.content} isGoogle={true} {...item} />)}
    </>
  );
};
