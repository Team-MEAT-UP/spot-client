import { createBrowserRouter } from "react-router-dom";
import MapViewPage from "../../pages/MapViewPage";
import MainPage from "../../pages/MainPage";
import StartPointPage from "../../pages/StartPointPage";
import FindPage from "../../pages/FindPage";
import PlacePage from "../../pages/PlacePage";
import DetailPage from "../../pages/DetailPage";
import HistoryPage from "@/pages/HistoryPage";
import ReviewPage from "@/pages/ReviewPage";
import VisitedPage from "@/pages/VisitedPage";
import MyPage from "@/pages/MyPage";

export const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/mapView", element: <MapViewPage /> },
  { path: "/startPoint", element: <StartPointPage /> },
  { path: "/find", element: <FindPage /> },
  { path: "/place", element: <PlacePage /> },
  { path: "/detail", element: <DetailPage /> },
  { path: "/history", element: <HistoryPage /> },
  { path: "/review/:id", element: <ReviewPage /> },
  { path: "/visited/:id", element: <VisitedPage /> },
  { path: "/my", element: <MyPage /> },
]);
