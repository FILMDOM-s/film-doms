import { ChevronLeft } from '@/assets/svgs/common'
import { CATEGORIES } from '@/constants/article'
import { colors, flexCenter, flexGap, typography } from '@/styles/emotion'
import styled from '@emotion/styled'
import Link from 'next/link'
import Editor from '@/components/common/Editor'
import { type SelectRef } from '@/components/common/Select/core'
import { SearchSelect } from '@/components/common'
import { EDITOR_OPTIONS } from '../Main/SearchForm/constants'
import { useRef, useState } from 'react'
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
  category: string
  tag: string
  content: string
  containsImage: string
  mainImageId: string
}

const EditorContainer = ({ category }: EditorContainerProps) => {
  const router = useRouter()
  const searchOptionRef = useRef<SelectRef>(null)
  const [content, setContent] = useState('')

  const { mutate: createArticle } = useCreateArticle({
    onSuccess: ({ result, resultCode }) => {
      if (resultCode === 'SUCCESS') {
        toast('로그인 성공!', {
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
      toast.error('로그인에 실패했습니다.', {
        icon: '😥',
        position: 'top-center',
      })
    },
  })

  const onSubmit = async () => {
    try {
      await createArticle({
        title: 'title',
        category: 'category',
        tag: 'tag',
        content: 'content',
        containsImage: 'containsImage',
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
      <EditorForm onSubmit={onSubmit}>
        <Header>
          <SearchSelect options={EDITOR_OPTIONS} ref={searchOptionRef} />
          <TitleInput placeholder="제목" name="title" type="text" />
        </Header>
        <Editor content={content} setContent={setContent} />
        <File />
        <Checks>
          <LabeledCheckbox label={'공개'} />
          <LabeledCheckbox label={'댓글 허용'} />
          <LabeledCheckbox label={'퍼가기 금지'} />
        </Checks>
        <Buttons>
          <Button theme={'#111111'} type="button">
            임시 저장
          </Button>
          <Button theme={'#111111'} type="button">
            임시 저장 불러오기
          </Button>
          <Button theme={'#111111'} type="button">
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
  padding: 0 20px;
`

const Header = styled.div`
  ${flexGap('20px', 'row')}
  width: 914px;
`

const EditorForm = styled.section`
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
  margin-bottom: 20px;
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
