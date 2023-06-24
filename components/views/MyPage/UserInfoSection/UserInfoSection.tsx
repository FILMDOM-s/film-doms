import styled from '@emotion/styled'
import { colors, flex, flexGap, font } from '@/styles/emotion'
import { Divider } from '@/components/common'
import { MAX_INTEREST_MOVIE_COUNT } from '../constants'
import { useUpdateFavoriteMovie, useUpdateNickname } from '@/services/myPage'
import { useRef } from 'react'
import { toast } from 'react-hot-toast'

interface Props {
  email: string
  nickname: string
  registeredAt: number
  interestMovieList: string[]
}

const UserInfoSection = ({
  email,
  nickname,
  registeredAt,
  interestMovieList,
}: Props) => {
  const newNickname = useRef<HTMLTableDataCellElement>(null)
  const favoriteMovie = useRef<HTMLDivElement>(null)
  const { mutate: updateFavoriteMovie } = useUpdateFavoriteMovie()
  const { mutate: updateNickname } = useUpdateNickname()
  const sliceInterestMovieList = interestMovieList.slice(
    0,
    MAX_INTEREST_MOVIE_COUNT
  )

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
            <Content ref={newNickname} contentEditable>
              {nickname}
            </Content>
            <OptionBox>
              <Button
                as="div"
                role="button"
                onClick={() => {
                  const _newNickname = newNickname.current?.textContent

                  if (!_newNickname || _newNickname === nickname) {
                    return
                  }

                  updateNickname(
                    {
                      newNickname: _newNickname,
                    },
                    {
                      onSuccess: () => {
                        toast.success('닉네임이 변경되었습니다.')
                      },
                    }
                  )
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
              <Button as="div" role="button">
                변경
              </Button>
            </OptionBox>
          </Tr>
          <Tr>
            <Label>관심영화</Label>
            <Content>
              <InterestMovieBox ref={favoriteMovie} contentEditable>
                {sliceInterestMovieList.join(', ')}
              </InterestMovieBox>
            </Content>
            <OptionBox>
              <Button
                as="div"
                role="button"
                onClick={() => {
                  const text = favoriteMovie.current?.textContent

                  if (!text) {
                    return
                  }

                  updateFavoriteMovie(
                    {
                      favoriteMovies: text
                        .split(',')
                        .map(item => item.trim())
                        .slice(0, 5),
                    },
                    {
                      onSuccess: () => {
                        toast.success('관심영화가 변경되었습니다.')
                      },
                    }
                  )
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
        <QuitButton>회원탈퇴</QuitButton>
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

export default UserInfoSection
