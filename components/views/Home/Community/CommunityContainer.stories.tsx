import { ComponentMeta } from '@storybook/react'
import styled from '@emotion/styled'
import CommunityContainer from './CommunityContainer'

export default {
  component: CommunityContainer,
  title: 'Section/Community',
} as ComponentMeta<typeof CommunityContainer>

export const Default = () => (
  <Container>
    <CommunityContainer />
  </Container>
)

const Container = styled.div`
  width: 1280px;
`
