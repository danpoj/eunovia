import { posts, user } from '@/constants'
import Image from 'next/image'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Title } from '@/components/title'

export default function Page() {
  return (
    <>
      <Title title="커뮤니티" />

      <Table>
        <TableCaption>TODO: 여기에 pagination 넣기</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-20">번호</TableHead>
            <TableHead>제목</TableHead>
            <TableHead className="w-20">글쓴이</TableHead>
            <TableHead className="w-20">작성일</TableHead>
            <TableHead className="w-10">조회</TableHead>
            <TableHead className="text-right w-10">추천</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.map((post) => (
            <TableRow
              key={post.id}
              className="h-11"
            >
              <TableCell>
                <p className="text-[10px] md:text-xs text-muted-foreground/70">{post.id}</p>
              </TableCell>
              <TableCell className="font-medium">
                <p className="text-xs md:text-sm">{post.title}</p>
              </TableCell>
              <TableCell>
                <div className="flex gap-1.5 items-center">
                  <Image
                    src={user.src}
                    alt={user.nickname}
                    width={60}
                    height={60}
                    className="object-cover size-5 rounded"
                  />
                  <p className="text-[10px] md:text-xs">{user.nickname}</p>
                </div>
              </TableCell>
              <TableCell>
                <p className="text-muted-foreground/80 text-[10px] md:text-xs">{post.createdAt}</p>
              </TableCell>
              <TableCell>
                <p className="text-xs"> {post.views}</p>
              </TableCell>
              <TableCell className="text-right">
                <p className="text-xs"> {post.likes}</p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
