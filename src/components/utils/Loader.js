export const SkeletonLoader = () => {
  return (
    <div className="shadow rounded-md p-4 max-w- w-full">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 w-5/12 bg-slate-300 rounded-full" />
          <div className="space-y-2">
            <div className="h-2 bg-slate-300 rounded" />
            <div className="h-2 bg-slate-300 rounded" />
            <div className="h-2 w-8/12 bg-slate-300 rounded" />
          </div>
          <div className="h-2 ml-auto w-5/12 bg-slate-300 rounded-full" />
        </div>
      </div>
    </div>
  )
}