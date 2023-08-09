import styled from '@emotion/styled'
import { MAX_INTEREST_MOVIE_COUNT } from '../constants'
import { useEffect, useRef, useState } from 'react'
import { useUpdateFavoriteMovie } from '@/services/myPage'
import toast from 'react-hot-toast'
import { RenderIf } from '@/components/common'
import { TagXIcon } from '@/assets/svgs/common'

interface Props {
  type: 'private' | 'public'
  interestMovieList: User.InterestMovie[]
}

const MovieTagList = ({ type, interestMovieList }: Props) => {
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
    <TagContainer>
      {hashtags.map((hashtag, index) => (
        <TagSpan key={index}>
          #{hashtag}
          <RenderIf
            condition={isPrivate}
            render={
              <TagRemoveButton onClick={() => handleRemoveHashtag(hashtag)}>
                <TagXIcon />
              </TagRemoveButton>
            }
          />
        </TagSpan>
      ))}
      {type === 'private' && (
        <TagSpan
          style={{
            display:
              hashtags.length >= MAX_INTEREST_MOVIE_COUNT ? 'none' : 'flex',
            color: '#AAAAAA',
            border: '2px solid #AAAAAA',
            backgroundColor: 'transparent',
          }}
        >
          #
          <TagInput
            ref={inputRef}
            value={value}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            placeholder="영화제목"
            color="#AAAAAA"
          />
        </TagSpan>
      )}
    </TagContainer>
  )
}

export default MovieTagList

// placeholder 글자색 white로 바꾸기
const TagInput = styled.input<{ color: string }>`
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in-out;
  background-color: transparent;
  color: ${({ color }) => color};
  flex: 1;
  &::placeholder {
    color: ${({ color }) => color};
  }
  &::-webkit-input-placeholder {
    color: ${({ color }) => color};
  }
  &::-ms-input-placeholder {
    color: ${({ color }) => color};
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
  font-size: 14px;
  font-weight: 700;
  color: #ff5414;
  border: 2px solid #ff5414;
  background-color: transparent;
  padding: 0.5rem 0.7rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  line-height: 14px;
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
