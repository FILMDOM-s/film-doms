import { ChevronLeft } from '@/assets/svgs/common'
import { Editor } from '@/components/common/Editor'
import { CATEGORIES } from '@/constants/article'
import { useCreateArticle } from '@/services/article'
import { colors, flexCenter, flexGap, typography } from '@/styles/emotion'
import styled from '@emotion/styled'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Suspense, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import LabeledCheckbox from './Check'
import SelectBox from './Select'
import { ImageListProps } from '@/components/common/Editor/Editor'
import Viewer from './Viewer'

export type EditorContainerProps = {
  category: string
}

export type ArticleProps = {
  title: string
  tag: string
  openAllowed: boolean
  commentsAllowed: boolean
  shareAllowed: boolean
  startAt: string
  endAt: string
}

const EditorContainer = ({ category = 'critic' }: EditorContainerProps) => {
  const router = useRouter()
  const [content, setContent] = useState('')
  const contentLength = useRef(0)
  const [imageList, setImageList] = useState<ImageListProps>({})
  const { register, handleSubmit, getValues, watch } = useForm<ArticleProps>({
    mode: 'onChange',
  })

  const { mutate: createArticle } = useCreateArticle({
    onSuccess: ({ resultCode }) => {
      if (resultCode === 'NO_IMAGE') {
        toast.error('이미지를 등록해주세요!', {
          icon: '😥',
          position: 'top-center',
        })
        return
      }
      if (resultCode === 'SUCCESS') {
        toast('등록 완료!', {
          icon: '👏',
          position: 'top-center',
        })
        router.push(`/article/${[category]}`, `/article/${category}`)
      } else {
        toast.error(resultCode, {
          icon: '😥',
          position: 'top-center',
        })
      }
    },
    onError: err => {
      toast.error('등록 실패!', {
        icon: '😥',
        position: 'top-center',
      })
    },
  })

  const onSubmit = async () => {
    const { title, tag, startAt, endAt } = getValues()
    try {
      if (!title) {
        toast.error('제목을 입력해주세요', {
          icon: '😥',
          position: 'top-center',
        })
        return
      }

      const tempImageList = content.match(
        /<img[^>]*src=[\"']?([^>\"']+)[\"']?[^>]*>/g
      )

      if (category === 'filmUniverse') {
        if (!startAt || !endAt) {
          toast.error('게시 기간을 입력해주세요', {
            icon: '😥',
            position: 'top-center',
          })
          return
        }

        if (!tempImageList) {
          toast.error('이미지가 반드시 포함되어야 해요!', {
            icon: '😥',
            position: 'top-center',
          })
          return
        }

        await createArticle({
          title: title,
          category: 'FILM_UNIVERSE',
          tag: tag,
          content: content,
          containsImage: 'true',
          startAt: new Date(startAt).toISOString(),
          endAt: new Date(endAt).toISOString(),
        })
      } else if (category === 'critic') {
        if (!tempImageList) {
          toast.error('이미지가 반드시 포함되어야 해요!', {
            icon: '😥',
            position: 'top-center',
          })
          return
        }

        if (tempImageList.length < 3) {
          toast.error('이미지는 3개 이상 포함되어야 해요!', {
            icon: '😥',
            position: 'top-center',
          })
          return
        }

        if (contentLength.current < 3000) {
          toast.error('3000자 이상 입력해주세요!', {
            icon: '😥',
            position: 'top-center',
          })
          return
        }

        await createArticle({
          title: title,
          category: 'CRITIC',
          tag: tag,
          content: content,
          containsImage: 'true',
        })
      } else {
        createArticle({
          title: title,
          category: 'MOVIE',
          tag: tag,
          content: content,
          containsImage: 'true',
        })
      }
    } catch (err) {}
  }

  return (
    <Container>
      <EditorAndViewerContainer>
        <EditorForm onSubmit={handleSubmit(onSubmit)}>
          <Header>
            <Suspense>
              <SelectBox category={category} register={register} />
            </Suspense>
            <TitleInput
              {...register('title')}
              placeholder="제목"
              name="title"
              type="text"
            />
          </Header>
          <Editor
            content={content}
            onChangeContent={(value, length) => {
              setContent(value)
              contentLength.current = length
            }}
            onChangeImageList={setImageList}
          />
          <Checks>
            <LabeledCheckbox
              label={'공개'}
              register={register}
              name={'openAllowed'}
            />
            <LabeledCheckbox
              label={'댓글 허용'}
              register={register}
              name={'commentsAllowed'}
            />
            <LabeledCheckbox
              label={'퍼가기 금지'}
              register={register}
              name={'shareAllowed'}
            />
          </Checks>
          {category === 'filmUniverse' && (
            <Period>
              <div>게시 기간</div>
              <DateContainer>
                <DateInput
                  type={'date'}
                  {...register('startAt')}
                  name="startAt"
                />
                <span>~</span>
                <DateInput type={'date'} {...register('endAt')} name="endAt" />
              </DateContainer>
            </Period>
          )}
          <Buttons>
            <Button theme={'#111111'} type="button" disabled>
              임시 저장
            </Button>
            <Button theme={'#111111'} type="button" disabled>
              임시 저장 불러오기
            </Button>
            <Button theme={'#FF5414'} type="submit">
              등록
            </Button>
          </Buttons>
        </EditorForm>
        <Viewer title={watch('title')} contents={content} tag={watch('tag')} />
      </EditorAndViewerContainer>
    </Container>
  )
}

export default EditorContainer

const Container = styled.div`
  ${flexGap('40px')}
  width: 100%;
  align-items: center;
`

const TitleInput = styled.input`
  width: 100%;
  height: 80px;
  color: ${colors.primary.black};
  outline: none;
  padding: 6px 20px;
  font-size: 32px;
  font-weight: 700;
`

const Header = styled.div`
  ${flexGap('10px', 'column')}
  width: 100%;
`

const EditorForm = styled.form`
  ${flexGap('20px')}
  width: 100%;
  height: 100%;
  flex: 1;
  border-right: 1px solid black;
`

const Checks = styled.div`
  ${flexGap('20px', 'row')}
  width: 100%;
  padding: 0 15px;
`

const Buttons = styled.div`
  ${flexGap('10px', 'row')}
  width: 100%;
  margin-bottom: 20px;
  padding: 0 15px;
`

const Button = styled.button<{ theme: string }>`
  width: 100%;
  height: 40px;
  border: 2px solid ${({ theme }) => theme};
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  color: ${({ theme }) => theme};
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme};
    color: ${colors.primary.white};
  }
`

const Period = styled.div`
  ${flexGap('20px', 'row')}
  width: 100%;
  border: 2px solid #e5e5e5;
  border-radius: 5px;
  padding: 0 15px;
`

const DateInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
`

const DateContainer = styled.div`
  ${flexGap('20px', 'row')}
`

const EditorAndViewerContainer = styled.div`
  ${flexGap('20px', 'row')}
  width: 100%;
  height: 100%;
  padding: 20px;
  border: 2px solid #e5e5e5;
  border-radius: 5px;
`
