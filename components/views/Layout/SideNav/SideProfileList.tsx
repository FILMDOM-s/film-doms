import { sideProfileList } from '@/constants/constants'
import styled from '@emotion/styled'
import SideProfileListListItem from './SideProfileListItem'

const SideProfileList = () => {
  return (
    <SideProfileListListContainer>
      {sideProfileList.map((item: any) => {
        return (
          <SideProfileListListItem
            key={item.title}
            title={item.title}
            link={item.link}
          />
        )
      })}
    </SideProfileListListContainer>
  )
}

export default SideProfileList

const SideProfileListListContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`
