export const Title = ({ title, subTitle }: { title: string; subTitle?: string }) => {
  return (
    <div className="space-y-3">
      <p className="font-black text-3xl">{title}</p>
      {subTitle && <p className="text-muted-foreground/70 font-bold">{subTitle}</p>}
    </div>
  )
}
