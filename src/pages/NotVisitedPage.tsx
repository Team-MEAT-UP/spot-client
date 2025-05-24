import { NonVisitedReasonCategory, VisitedPlaceProps } from "@/features/notVisited/model";
import { OtherPlaceForm, PlaceSearch } from "@/features/notVisited/ui";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePostNonVisitedReview } from "@/features/notVisited/hooks";

const NotVisitedPage = () => {
  const navigate = useNavigate();
  const { id: placeId } = useParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedReasons, setSelectedReasons] = useState<NonVisitedReasonCategory[]>([]);
  const [etcReason, setEtcReason] = useState("");
  const [directInput, setDirectInput] = useState("");
  const [visitedPlace, setVisitedPlace] = useState<VisitedPlaceProps | null>(null);

  const { mutate: postReview, isPending } = usePostNonVisitedReview();

  const handleLocationStep = () => {
    setCurrentStep(2);
  };

  const handleSubmit = (directReason?: string) => {
    if (!placeId || !visitedPlace) return;

    const reviewData = {
      categories: selectedReasons,
      etcReason: directReason || etcReason,
      placeName: visitedPlace.name,
      address: visitedPlace.regionName,
      roadAddress: visitedPlace.roadAddress,
      longitude: visitedPlace.longitude,
      latitude: visitedPlace.latitude,
    };

    postReview(
      { placeId, data: reviewData },
      {
        onSuccess: () => {
          navigate("/history");
        },
        onError: error => {
          console.error("리뷰 작성 실패:", error);
        },
      }
    );
  };

  return (
    <div className="flex flex-col h-screen-dvh">
      {currentStep === 1 && (
        <OtherPlaceForm
          selectedReasons={selectedReasons}
          setSelectedReasons={setSelectedReasons}
          handleLocationStep={handleLocationStep}
          selectedPlace={visitedPlace}
          setEtcReason={setEtcReason}
          onSubmit={handleSubmit}
          isSubmitting={isPending}
          directInput={directInput}
          setDirectInput={setDirectInput}
        />
      )}
      {currentStep === 2 && (
        <PlaceSearch
          setCurrentStep={() => setCurrentStep(1)}
          visitedPlace={visitedPlace || { name: "", latitude: 0, longitude: 0, roadAddress: "", regionName: "" }}
          setVisitedPlace={setVisitedPlace}
        />
      )}
    </div>
  );
};

export default NotVisitedPage;
