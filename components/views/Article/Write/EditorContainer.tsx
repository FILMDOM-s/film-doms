import { ChevronLeft } from '@/assets/svgs/common'
import { CATEGORIES } from '@/constants/article'
import { colors, flexCenter, flexGap, typography } from '@/styles/emotion'
import styled from '@emotion/styled'
import Link from 'next/link'
import Editor from '@/components/common/Editor'
import { useState } from 'react'
import File from './File'
import LabeledCheckbox from './Check'
import { useForm } from 'react-hook-form'
import { useCreateArticle } from '@/services/article'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'

export type EditorContainerProps = {
  category: string
}

export type ArticleProps = {
  title: string
  openAllowed: boolean
  commentsAllowed: boolean
  shareAllowed: boolean
  startAt: string
  endAt: string
  files: File[]
}

const EditorContainer = ({ category }: EditorContainerProps) => {
  const router = useRouter()
  const [content, setContent] = useState('')
  const { register, handleSubmit, getValues } = useForm<ArticleProps>({
    mode: 'onChange',
  })

  const { mutate: createArticle } = useCreateArticle({
    onSuccess: ({ result, resultCode }) => {
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

  const onSubmit = async (e: any) => {
    const { title, files, openAllowed, commentsAllowed, shareAllowed } =
      getValues()
    try {
      await createArticle({
        title: title,
        category: category,
        tag: 'tag',
        content: content,
        containsImage: !!files,
        mainImageId: 'mainImageId',
      })
    } catch (err) {}
  }

  return (
    <Container>
      <Title>
        <ChevronWrapper>
          <Link href={`/article/${category}`}>
            <ChevronLeft width="10" height="16" />
          </Link>
        </ChevronWrapper>
        {CATEGORIES[category].title}
      </Title>
      <EditorForm onSubmit={handleSubmit(onSubmit)}>
        <Header>
          <TitleInput
            {...register('title')}
            placeholder="제목"
            name="title"
            type="text"
          />
        </Header>
        <Editor content={content} setContent={setContent} />
        <File register={register} />
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
          <Button theme={'#111111'} type="button" disabled>
            미리보기
          </Button>
          <Button theme={'#FF5414'} type="submit">
            등록
          </Button>
        </Buttons>
      </EditorForm>
    </Container>
  )
}

export default EditorContainer

const Container = styled.div`
  ${flexGap('40px')}
  width: 954px;
  align-items: flex-end;
  padding: 40px 0px;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  width: 954px;
  ${typography.h5}
  color: ${colors.primary.black};
`

const TitleInput = styled.input`
  width: 100%;
  color: ${colors.primary.black};
  border: 2px solid ${colors.primary.black};
  outline: none;
  padding: 6px 20px;
`

const Header = styled.div`
  ${flexGap('20px', 'row')}
  width: 914px;
`

const EditorForm = styled.form`
  ${flexGap('20px')}
  width: 914px;
`
const ChevronWrapper = styled.div`
  ${flexCenter}
  padding: 0 19px 0 9px;
  cursor: pointer;
`

const Checks = styled.div`
  ${flexGap('20px', 'row')}
  width: 100%;
`

const Buttons = styled.div`
  ${flexGap('10px', 'row')}
  width: 100%;
  margin-bottom: 20px;
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
  padding: 10px;
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
