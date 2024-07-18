import { Suspense } from "react";
import HeatMap from "./heat-map-page";

export default function HeatMapPage() {
  return (
    <Suspense>
      <HeatMap />
    </Suspense>
  );
}
