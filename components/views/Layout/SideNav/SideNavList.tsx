import { sideNavList } from '@/constants/constants'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'

const SideNavList = () => {
  return (
    <SideNavListContainer>
      {sideNavList.map((item, index) => {
        return (
          <SideNavListItem
            key={item.title}
            title={item.title}
            link={item.link}
          />
        )
      })}
    </SideNavListContainer>
  )
}

export default SideNavList

const SideNavListItem = ({ title, link }: { title: string; link: string }) => {
  const router = useRouter()
  return (
    <SideNavListItemWrapper
      onClick={() => {
        router.push(link)
      }}
    >
      {title}
    </SideNavListItemWrapper>
  )
}
const SideNavListItemWrapper = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid #e5e5e5;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`

const SideNavListContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`
