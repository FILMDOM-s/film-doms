import { BasicNoticeType } from '@/types/notices'
import styled from '@emotion/styled'

export default function BasicNotice({
  notices,
  title,
  color,
}: {
  notices: BasicNoticeType[]
  title: string
  color?: string
}) {
  return (
    <div>
      <Header color={color ?? 'black'} className={'py-2 px-2 text-white'}>
        {title}
      </Header>
      {notices?.map((notice, index) => {
        return (
          <div key={notice.id} className="flex py-2 bg-white border px-2">
            <div className="px-2">{notice.date}</div>
            <div>{notice.title}</div>
          </div>
        )
      })}
    </div>
  )
}

const Header = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
`
