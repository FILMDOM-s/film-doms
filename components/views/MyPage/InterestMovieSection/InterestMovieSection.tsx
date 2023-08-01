import styled from '@emotion/styled'
import { colors, flexGap, font } from '@/styles/emotion'
import { Divider, RenderIf } from '@/components/common'
import { MAX_INTEREST_MOVIE_COUNT } from '../constants'
import { useEffect, useRef, useState } from 'react'
import { useUpdateFavoriteMovie } from '@/services/myPage'
import toast from 'react-hot-toast'

interface Props {
  type: 'private' | 'public'
  interestMovieList: User.InterestMovie[]
}

const InterestMovieSection = ({ type, interestMovieList }: Props) => {
  const [value, setValue] = useState<string>('')
  const [hashtags, setHashtags] = useState<string[]>(interestMovieList)
  const { mutate: updateFavoriteMovie } = useUpdateFavoriteMovie()

  const inputRef = useRef<HTMLInputElement>(null)
  const handleRemoveHashtag = (hashtagToRemove: string) => {
    const filteredHashtags = hashtags.filter(
      hashtag => hashtag !== hashtagToRemove
    )
    setHashtags(filteredHashtags)
    updateFavoriteMovie(
      {
        favoriteMovies: filteredHashtags,
      },
      {
        onSuccess: () => {
          toast.success('관심영화가 변경되었습니다.')
        },
      }
    )
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation()
    setValue(event.target.value)
  }

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.stopPropagation()
    if (event.key === 'Enter' && value !== '') {
      if (hashtags.length >= MAX_INTEREST_MOVIE_COUNT) {
        toast.error(
          `관심영화는 최대 ${MAX_INTEREST_MOVIE_COUNT}개까지 등록 가능합니다.`
        )
        return
      }
      if (!hashtags.find(hashtag => hashtag === value)) {
        setHashtags(hashtags => [...hashtags, value])
        updateFavoriteMovie(
          {
            favoriteMovies: [...hashtags, value],
          },
          {
            onSuccess: () => {
              toast.success('관심영화가 변경되었습니다.')
            },
          }
        )
      }
    }
  }

  useEffect(() => {
    setValue('')
  }, [hashtags])

  // 인풋에 입력한 글자수만큼 인풋 넓이 조절
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.width = `${value.length * 10}px`
    }
  }, [hashtags, value.length])

  const isPrivate = type === 'private'

  return (
    <Container>
      <Divider color={colors.primary.orange} size={4} limit="24px" />
      <Flex>
        <Title>관심영화</Title>
        <RenderIf
          condition={isPrivate}
          render={
            <TagInput
              value={value}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
              placeholder="Hashtag"
            />
          }
        />
      </Flex>
      <TagContainer>
        {hashtags.map((hashtag, index) => (
          <TagSpan key={index}>
            #{hashtag}
            <RenderIf
              condition={isPrivate}
              render={
                <TagRemoveButton onClick={() => handleRemoveHashtag(hashtag)}>
                  X
                </TagRemoveButton>
              }
            />
          </TagSpan>
        ))}
        <TagSpan
          style={{
            display:
              hashtags.length >= MAX_INTEREST_MOVIE_COUNT ? 'none' : 'flex',
          }}
        >
          #
          <TagInput
            ref={inputRef}
            value={value}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            placeholder="영화제목"
          />
        </TagSpan>
      </TagContainer>
    </Container>
  )
}

const Title = styled.h1`
  ${font({ size: '20px', weight: '700', lineHeight: '24px' })}
  color: ${colors.grey[900]};
`

const Container = styled.div`
  ${flexGap('20px')}
  width: 100%;
`

// placeholder 글자색 white로 바꾸기
const TagInput = styled.input`
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in-out;
  background-color: transparent;
  color: white;
  flex: 1;
  &::placeholder {
    color: white;
  }
  &::-webkit-input-placeholder {
    color: white;
  }
  &::-ms-input-placeholder {
    color: white;
  }
  min-width: 55px;
`

const TagContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  gap: 0.5rem;
`

const TagSpan = styled.span`
  font-size: 0.8rem;
  color: white;
  background-color: #ff5414;
  padding: 0.5rem 0.7rem;
  border-radius: 15px;
`

const TagRemoveButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  margin-left: 0.5rem;
`

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export default InterestMovieSection
