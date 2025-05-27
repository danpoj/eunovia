import { PostContents } from './post-contents'

export default async function Page({
  params,
}: {
  params: Promise<{
    id: string
  }>
}) {
  const id = Number((await params).id)

  return (
    <div className="pb-40">
      <PostContents id={id} />
    </div>
  )
}
