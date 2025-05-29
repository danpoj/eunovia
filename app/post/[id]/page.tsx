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
    <>
      <PostContents id={id} />
    </>
  )
}
