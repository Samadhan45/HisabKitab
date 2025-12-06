import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardLoading() {
    return (
        <div className="space-y-6">
            {/* Budget Progress Skeleton */}
            <div className="bg-white rounded-xl p-6 border shadow-sm">
                <Skeleton className="h-4 w-48 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <div className="flex justify-between">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-20" />
                </div>
            </div>

            {/* Overview Charts Skeleton */}
            <div className="grid gap-6 md:grid-cols-2">
                <Skeleton className="h-[300px] w-full rounded-xl" />
                <Skeleton className="h-[300px] w-full rounded-xl" />
            </div>

            {/* Accounts Grid Skeleton */}
            <div>
                <Skeleton className="h-8 w-40 mb-4" />
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Skeleton className="h-40 w-full rounded-xl" />
                    <Skeleton className="h-40 w-full rounded-xl" />
                    <Skeleton className="h-40 w-full rounded-xl" />
                </div>
            </div>
        </div>
    );
}
