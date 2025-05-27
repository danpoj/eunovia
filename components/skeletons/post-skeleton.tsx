import { Skeleton } from '@/components/ui/skeleton'

export const PostsSkeleton = () => {
  return (
    <div className="space-y-2">
      {Array.from({ length: 5 }, (_, i) => i).map((v) => (
        <Skeleton
          key={v}
          className="h-40 w-full"
        />
      ))}
    </div>
  )
}
