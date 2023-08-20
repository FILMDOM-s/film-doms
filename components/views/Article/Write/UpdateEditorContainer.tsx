import { ChevronLeft } from '@/assets/svgs/common'
import { CATEGORIES } from '@/constants/article'
import { colors, flexCenter, flexGap, typography } from '@/styles/emotion'
import styled from '@emotion/styled'
import Link from 'next/link'
import { Suspense, useEffect, useRef, useState } from 'react'
import LabeledCheckbox from './Check'
import { useForm } from 'react-hook-form'
import { useFetchArticleDetailEdit, useUpdateArticle } from '@/services/article'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import { camelToSnake } from '@/utils'
import SelectBox from './Select/Select'
import { Editor } from '@/components/common/Editor'
import { ImageListProps } from '@/components/common/Editor/Editor'
import Viewer from './Viewer'

export type EditorContainerProps = {
  category: string
  id: number
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

const UpdateEditorContainer = ({
  category = 'critic',
  id,
}: EditorContainerProps) => {
  const router = useRouter()
  const [content, setContent] = useState('')
  const contentLength = useRef(0)
  const [preview, setPreview] = useState(false)
  const [imageList, setImageList] = useState<ImageListProps>({})
  const { register, handleSubmit, getValues, setValue, watch } =
    useForm<ArticleProps>({
      mode: 'onChange',
    })
  const { data: article } = useFetchArticleDetailEdit(
    camelToSnake(category),
    id
  )

  const { mutate: updateArticle } = useUpdateArticle()

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
        await updateArticle(
          {
            category: 'FILM_UNIVERSE',
            articleId: id,
            item: {
              title: title,
              category: 'FILM_UNIVERSE',
              tag: tag,
              content: content,
              containsImage: 'true',
              startAt: new Date(startAt).toISOString(),
              endAt: new Date(endAt).toISOString(),
            },
          },
          {
            onSuccess: ({ resultCode }) => {
              if (resultCode === 'NO_IMAGE') {
                toast.error('이미지를 등록해주세요!', {
                  icon: '😥',
                  position: 'top-center',
                })
                return
              }
              if (resultCode === 'SUCCESS') {
                toast('수정 완료!', {
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
            onError: () => {
              toast.error('수정 실패!', {
                icon: '😥',
                position: 'top-center',
              })
            },
          }
        )
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

        await updateArticle(
          {
            category: 'CRITIC',
            articleId: id,
            item: {
              title: title,
              category: 'CRITIC',
              tag: tag,
              content: content,
              containsImage: 'true',
            },
          },
          {
            onSuccess: ({ resultCode }) => {
              if (resultCode === 'NO_IMAGE') {
                toast.error('이미지를 등록해주세요!', {
                  icon: '😥',
                  position: 'top-center',
                })
                return
              }
              if (resultCode === 'SUCCESS') {
                toast('수정 완료!', {
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
            onError: () => {
              toast.error('수정 실패!', {
                icon: '😥',
                position: 'top-center',
              })
            },
          }
        )
      } else {
        await updateArticle(
          {
            category: 'MOVIE',
            articleId: id,
            item: {
              title: title,
              category: 'MOVIE',
              tag: tag,
              content: content,
              containsImage: 'true',
            },
          },
          {
            onSuccess: ({ resultCode }) => {
              if (resultCode === 'NO_IMAGE') {
                toast.error('이미지를 등록해주세요!', {
                  icon: '😥',
                  position: 'top-center',
                })
                return
              }
              if (resultCode === 'SUCCESS') {
                toast('수정 완료!', {
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
            onError: () => {
              toast.error('수정 실패!', {
                icon: '😥',
                position: 'top-center',
              })
            },
          }
        )
      }
    } catch (err) {}
  }

  useEffect(() => {
    setValue('title', article?.title || '')
    setValue('tag', article?.tag || '')
    setValue('openAllowed', true)
    setValue('commentsAllowed', true)
    setValue('shareAllowed', true)
    setValue('startAt', '2021-07-01')
    setValue('endAt', '2021-08-01')
    setContent(article?.content || '')
  }, [article?.content, article?.tag, article?.title, id, setValue])

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
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              marginTop: '1rem',
            }}
          >
            {/* <Checks>
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
            </Checks> */}
            <Buttons>
              <Button
                theme={'#111111'}
                type="button"
                onClick={() => {
                  setPreview(!preview)
                }}
              >
                {preview ? '숨기기' : '미리보기'}
              </Button>
              <Button theme={'#FF5414'} type="submit">
                등록
              </Button>
            </Buttons>
          </div>
        </EditorForm>
        {preview && (
          <Viewer
            title={watch('title')}
            contents={content}
            tag={watch('tag')}
          />
        )}
      </EditorAndViewerContainer>
    </Container>
  )
}

export default UpdateEditorContainer

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
  max-width: 1280px;
  height: 100%;
  flex: 1;
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
  justify-content: flex-end;
`

const Button = styled.button<{ theme: string }>`
  width: 120px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme};
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  color: white;
  transition: all 0.2s ease-in-out;
  background-color: ${({ theme }) => theme} !important;
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
  justify-content: center;
`
