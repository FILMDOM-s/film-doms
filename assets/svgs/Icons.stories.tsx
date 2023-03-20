import styled from '@emotion/styled'
import * as Icons from '@svgs/common'

export default {
  title: 'StyleGuide/Icons',
}

export const AllIcons = () => {
  return (
    <Container>
      {Object.values(Icons).map((Icon, index) => {
        return <Icon key={index} />
      })}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  gap: 1rem;
`
