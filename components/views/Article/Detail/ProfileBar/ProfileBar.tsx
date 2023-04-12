import styled from '@emotion/styled'
import { colors, flexCenter, flexGap, typography } from '@/styles/emotion'
import Image from 'next/image'
import { defaultProfile } from '@/assets/images/common'
import { dateDiff } from '@/utils/dateDiff'
import { getRoundString } from '@/utils/getRoundString'

interface ProfileBarProps {
  article: Article.Item
  count: number
}

const ProfileBar = ({ article,count }: ProfileBarProps) => {
  return (
    article && (
      <Bar>
        <Ul>
          <Li>
            <Image
              src={article.writer.profile ?? defaultProfile}
              alt="user-profile"
              width={40}
              height={40}
              style={{
                borderRadius: '50%',
                marginRight: '12px',
                marginLeft: '8px',
              }}
              priority
            />
            {article.writer.nickname}
          </Li>
          <Li>{dateDiff(article.createAt)}</Li>
          <Li>
            조회수<Span>{getRoundString(article.views)}</Span>
          </Li>
          <Li>
            추천수<Span>{getRoundString(article.likes)}</Span>
          </Li>
          <Li>
            댓글<Span>{getRoundString(count)}</Span>
          </Li>
        </Ul>
      </Bar>
    )
  )
}

const Bar = styled.div`
  ${typography.contentBody}
  color: ${colors.primary.black};
`
const Ul = styled.ul`
  ${flexCenter}
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  overflow: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  > li:last-child::after {
    content: '';
  }
`

const Li = styled.li`
  ${flexCenter}
  height: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  ::after {
    padding: 0 16px;
    content: '|';
    display: block;
    float: right;
  }
`

const Span = styled.span`
  color: ${colors.primary.orange};
  padding-left: 4px;
`

export default ProfileBar
