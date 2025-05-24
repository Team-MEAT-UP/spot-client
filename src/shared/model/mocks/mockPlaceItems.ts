import { PlaceList } from "@/features/place/model";

export const mockPlaceItems: PlaceList = {
  result: "SUCCESS",
  data: {
    middlePointName: "동묘",
    subwayId: 1,
    confirmedPlaceResponse: {
      id: "0196e4a6-f4f9-7c1c-a7c7-04016a976efe",
      category: "CAFE",
      name: "올덴브라운 동묘점",
      image:
        "https://lh3.googleusercontent.com/place-photos/AJnk2cwMTH69-XV0_jY3sTKsHhm7sZddxzH5ThODATzU4cXAXQ06NCZxzdL136wIVoi9Sb6vqzlc2vf19KqPjucV9WFiI2Mm8rcZ2DQtBsLSFkERNQswwnnmff3uYMw5h9vzMkwdheq-OecUBbfT_Q=s4800-w1200-h1200",
      openTime: "10:00",
      closeTime: "00:00",
      distance: 215,
      averageRating: 4.5,
      placeScore: {
        socket: 5,
        seat: 3,
        quiet: 2,
      },
    },
    placeResponses: [
      {
        id: "0196e4a6-f4f9-7c1c-a7c7-04016a976efe",
        category: "CAFE",
        name: "올덴브라운 동묘점",
        image:
          "https://lh3.googleusercontent.com/place-photos/AJnk2cwMTH69-XV0_jY3sTKsHhm7sZddxzH5ThODATzU4cXAXQ06NCZxzdL136wIVoi9Sb6vqzlc2vf19KqPjucV9WFiI2Mm8rcZ2DQtBsLSFkERNQswwnnmff3uYMw5h9vzMkwdheq-OecUBbfT_Q=s4800-w1200-h1200",
        openTime: "10:00",
        closeTime: "00:00",
        distance: 215,
        averageRating: 4.5,
        placeScore: {
          socket: 5,
          seat: 3,
          quiet: 2,
        },
      },
      {
        id: "cafeb-abc123",
        category: "CAFE",
        name: "카페 사색",
        image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80",
        openTime: "08:00",
        closeTime: "22:00",
        distance: 320,
        averageRating: 4.2,
        placeScore: {
          socket: 3,
          seat: 4,
          quiet: 5,
        },
      },
    ],
  },
  error: {
    code: "",
    message: "",
  },
};
