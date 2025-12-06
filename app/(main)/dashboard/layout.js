import DashboardPage from "./page";
import DashboardLoading from "./loading";
import { Suspense } from "react";

export default function Layout() {
  return (
    <div className="px-5">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-6xl font-bold tracking-tight gradient-title">
          Dashboard
        </h1>
      </div>
      <Suspense fallback={<DashboardLoading />}>
        <DashboardPage />
      </Suspense>
    </div>
  );
}
