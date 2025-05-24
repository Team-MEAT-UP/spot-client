interface GroupCardProps {
  id: number;
  midPoint: string;
  isSelect?: boolean;
  place?: string;
  imgUrl: string[];
  people: number;
  day: number;
  isComplete: boolean;
}

export const mockListData: GroupCardProps[] = [
  {
    id: 1,
    midPoint: "동대문역사문화공원역",
    place: "박승광해물손칼국수",
    imgUrl: [
      "https://github.com/shadcn.png",
      "https://avatars.githubusercontent.com/u/1024025?v=4",
      "https://avatars.githubusercontent.com/u/28986134?v=4",
      "https://avatars.githubusercontent.com/u/34591336?v=4",
    ],
    people: 8,
    day: 1,
    isComplete: true,
  },
  {
    id: 52,
    midPoint: "동대문역사문화공원역",
    isSelect: false,
    imgUrl: ["https://github.com/shadcn.png", "https://avatars.githubusercontent.com/u/1024025?v=4"],
    people: 8,
    day: 1,
    isComplete: false,
  },
  {
    id: 41,
    midPoint: "동대문역사문화공원역",
    place: "박승광해물손칼국수",
    imgUrl: [
      "https://github.com/shadcn.png",
      "https://avatars.githubusercontent.com/u/1024025?v=4",
      "https://avatars.githubusercontent.com/u/28986134?v=4",
      "https://avatars.githubusercontent.com/u/34591336?v=4",
    ],
    people: 8,
    day: 1,
    isComplete: true,
  },
  {
    id: 32,
    midPoint: "동대문역사문화공원역",
    isSelect: false,
    imgUrl: ["https://github.com/shadcn.png", "https://avatars.githubusercontent.com/u/1024025?v=4"],
    people: 8,
    day: 1,
    isComplete: false,
  },
  {
    id: 31,
    midPoint: "동대문역사문화공원역",
    place: "박승광해물손칼국수",
    imgUrl: [
      "https://github.com/shadcn.png",
      "https://avatars.githubusercontent.com/u/1024025?v=4",
      "https://avatars.githubusercontent.com/u/28986134?v=4",
      "https://avatars.githubusercontent.com/u/34591336?v=4",
    ],
    people: 8,
    day: 1,
    isComplete: true,
  },
  {
    id: 22,
    midPoint: "동대문역사문화공원역",
    isSelect: false,
    imgUrl: ["https://github.com/shadcn.png", "https://avatars.githubusercontent.com/u/1024025?v=4"],
    people: 8,
    day: 1,
    isComplete: false,
  },
  {
    id: 11,
    midPoint: "동대문역사문화공원역",
    place: "박승광해물손칼국수",
    imgUrl: [
      "https://github.com/shadcn.png",
      "https://avatars.githubusercontent.com/u/1024025?v=4",
      "https://avatars.githubusercontent.com/u/28986134?v=4",
      "https://avatars.githubusercontent.com/u/34591336?v=4",
    ],
    people: 8,
    day: 1,
    isComplete: true,
  },
  {
    id: 12,
    midPoint: "동대문역사문화공원역",
    isSelect: false,
    imgUrl: ["https://github.com/shadcn.png", "https://avatars.githubusercontent.com/u/1024025?v=4"],
    people: 8,
    day: 1,
    isComplete: false,
  },
];
