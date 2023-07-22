import { useModal, OpenModalType } from '@/hooks/useModal'
import { getTerms } from '@/utils/getTerms'
import styled from '@emotion/styled'
import { Parser } from 'html-to-react'

const Terms = () => {
  const html = getTerms()
  const reactElement = Parser().parse(html)

  return <Container>{reactElement}</Container>
}

const useTerms = () => {
  const { openModal, closeModal } = useModal()

  const modalData: OpenModalType = {
    title: '개인 정보 제공 및 수집 동의',
    content: <Terms />,
    callback: () => alert('Modal Callback()'),
    theme: 'white',
  }

  return {
    openModal: () => openModal(modalData),
    closeModal,
  }
}

export default useTerms

const Container = styled.div`
  width: 100%;
  height: 400px;
  overflow-y: scroll;
  padding: 10px 20px;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 1.5;
  color: #333333;
`
