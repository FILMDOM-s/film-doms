import { sideNavList } from '@/constants/constants'
import styled from '@emotion/styled'
import SideNavListItem from './SideNavListItem'

const SideNavList = () => {
  return (
    <SideNavListContainer>
      {sideNavList.map(item => {
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

const SideNavListContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`
