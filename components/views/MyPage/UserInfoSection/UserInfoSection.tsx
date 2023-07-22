import styled from '@emotion/styled'
import { colors, flex, flexGap, font } from '@/styles/emotion'
import { Divider } from '@/components/common'
import { useUpdateNickname } from '@/services/myPage'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useChangePassword, useWithdrawal } from '../../Auth/Help/hooks'

interface Props {
  email: string
  nickname: string
  registeredAt: number
  password?: string
}

const UserInfoSection = ({ email, nickname, registeredAt }: Props) => {
  const [newNickname, setNewNickname] = useState(nickname)
  const [editNewNickname, setEditNewNickname] = useState(false)
  const { mutate: updateNickname } = useUpdateNickname()

  const { openModal: openModalChangePassword } = useChangePassword()
  const { openModal: openModalWithdrawal } = useWithdrawal()

  const handleNewNicknameMutation = () => {
    updateNickname(
      {
        newNickname: newNickname,
      },
      {
        onSuccess: () => {
          toast.success('닉네임이 변경되었습니다.')
          setEditNewNickname(!editNewNickname)
        },
      }
    )
  }

  return (
    <Container>
      <Divider color={colors.primary.orange} size={4} limit="24px" />
      <Title>회원정보</Title>
      <Table>
        <tbody>
          <Tr>
            <Label>이메일</Label>
            <Content>{email}</Content>
          </Tr>
          <Tr>
            <Label>닉네임</Label>
            <Content>
              <Input
                value={newNickname}
                onChange={e => {
                  setNewNickname(e.target.value)
                }}
                disabled={!editNewNickname}
              />
            </Content>
            <OptionBox>
              {editNewNickname && (
                <Button
                  as="div"
                  role="button"
                  onClick={handleNewNicknameMutation}
                >
                  완료
                </Button>
              )}
              <Button
                onClick={() => {
                  setEditNewNickname(!editNewNickname)
                }}
              >
                변경
              </Button>
            </OptionBox>
          </Tr>
          <Tr>
            <Label>비밀번호</Label>
            <Content>{'*'.repeat(10)}</Content>
            <OptionBox>
              <Button
                as="div"
                role="button"
                onClick={() => {
                  openModalChangePassword()
                }}
              >
                변경
              </Button>
            </OptionBox>
          </Tr>
          <Tr>
            <Label>가입일</Label>
            <Content>
              {new Intl.DateTimeFormat('ko-KR')
                .format(registeredAt)
                .replaceAll(/\s/g, '')
                .slice(0, -1)}
            </Content>
          </Tr>
        </tbody>
      </Table>
      <Box>
        <QuitButton
          onClick={() => {
            openModalWithdrawal()
          }}
        >
          회원탈퇴
        </QuitButton>
      </Box>
    </Container>
  )
}

const Table = styled.table`
  ${flexGap('12px')}
`

const QuitButton = styled.button`
  ${font({ size: '14px', weight: '500', lineHeight: '24px' })}
  color: ${colors.grey[100]};
  text-decoration: underline;
`

const Button = styled.button`
  ${font({ size: '14px', weight: '700', lineHeight: '14px' })}
  color: ${colors.sub.red};
  width: max-content;
  padding: 6px 12px;
  border: 2px solid ${colors.sub.red};
  cursor: pointer;
`

const OptionBox = styled.td`
  ${flex({ justify: 'flex-end', align: 'center' })}
  margin-left: auto;
  gap: 12px;
`

const InterestMovieBox = styled.div`
  width: 400px;
`

const Tr = styled.tr`
  ${flex({ justify: 'flex-start', align: 'center' })}
  width: 100%;
  height: 60px;
  padding: 10px;
  border-bottom: 1px solid #dddddd;

  &:first-of-type {
    border-top: 1px solid ${colors.primary.orange};
  }
`

const Box = styled.div`
  ${flex({ justify: 'flex-end' })}
`

const Content = styled.td`
  ${font({ size: '16px', weight: '500', lineHeight: '24px' })}
  color: ${colors.grey[900]};
  white-space: nowrap;
  overflow-x: auto;
  width: 60%;
`

const Label = styled.td`
  ${font({ size: '16px', weight: '500', lineHeight: '24px' })}
  color: ${colors.grey[600]};
  width: 20%;
`

const Title = styled.h1`
  ${font({ size: '20px', weight: '700', lineHeight: '24px' })}
  color: ${colors.grey[900]};
`

const Container = styled.div`
  ${flexGap('20px')}
  width: 100%;
`

const Input = styled.input`
  ${font({ size: '16px', weight: '500', lineHeight: '24px' })}
  color: ${colors.grey[900]};
  width: 100%;
  height: 30px;
  border: none;
  background-color: transparent;
`

export default UserInfoSection
