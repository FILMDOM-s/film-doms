import { Thumb } from '@/assets/svgs/common'
import { Button, Divider, Loading } from '@/components/common'
import {
  useDeleteArticle,
  useFetchArticleDetailContentByCategoryById,
  useToggleArticleLike,
} from '@/services/article'
import { useFetchArticleCommentListByCategoryById } from '@/services/article'
import { colors, flexGap, typography } from '@/styles/emotion'
import styled from '@emotion/styled'
import { ProfileBar } from './ProfileBar'
import { ReadOnlyEditor } from '@/components/common/Editor'
import { toast } from 'react-hot-toast'
import { snakeToCamel } from '@/utils'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useFetchUserInfo } from '@/services/myPage'

export type ArticleDetailProps = {
  articleId: number
  category: string
}

export const ArticleDetail = ({ articleId, category }: ArticleDetailProps) => {
  const router = useRouter()
  const { mutate: deleteArticle } = useDeleteArticle()
  const { data: userInfo } = useFetchUserInfo()
  const [isMine, setIsMine] = useState(false)

  const { data: article, refetch } = useFetchArticleDetailContentByCategoryById(
    category,
    articleId
  )
  const { data: comments } = useFetchArticleCommentListByCategoryById(
    category,
    articleId
  )

  const { mutate: toggleArticleLike, isLoading } = useToggleArticleLike()

  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      toast.success('클립보드에 링크가 복사되었습니다.', {
        icon: '📋',
        position: 'top-right',
      })
    } catch (e) {
      toast.error('복사에 실패하였습니다')
    }
  }

  const handleToggleLike = () => {
    toggleArticleLike(articleId, {
      onSuccess: () => {
        refetch()
      },
    })
  }

  useEffect(() => {
    if (userInfo?.id === article.author.id) {
      setIsMine(true)
    }
  }, [article.author.id, userInfo?.id])

  return (
    <Container>
      <Category>{article.tag}</Category>
      <Title>{article.title}</Title>
      <ProfileBar article={article} count={comments.commentCount} />
      <Divider color={colors.grey[100]} size={1} />
      <Content>
        <TopContentGrid>
          {article && `Filmdoms/${article.id}`}
          <GrayButton
            onClick={() => {
              handleCopyClipBoard(
                `${window.location.origin}/article/${snakeToCamel(
                  category
                )}/${articleId}`
              )
            }}
          >
            복사
          </GrayButton>
          {isMine && (
            <>
              <GrayButton
                onClick={() => {
                  router.push(
                    `/article/${snakeToCamel(category)}/${article.id}/edit`
                  )
                }}
              >
                수정
              </GrayButton>
              <GrayButton
                onClick={() => {
                  deleteArticle(
                    {
                      category,
                      articleId: article.id,
                    },
                    {
                      onSuccess: () => {
                        toast.error('삭제 성공')
                        router.push(`/article/${snakeToCamel(category)}`)
                      },
                      onError: () => {
                        toast.error('삭제 실패')
                      },
                    }
                  )
                }}
              >
                삭제
              </GrayButton>
            </>
          )}
        </TopContentGrid>
        <ReadOnlyEditor content={article && article.content} />
        <BottomContentGrid>
          <OrangeButton
            leftIcon={isLoading ? <Loading /> : <Thumb />}
            onClick={handleToggleLike}
          >
            {article.likes}
          </OrangeButton>
        </BottomContentGrid>
      </Content>
      <Divider color={colors.grey[100]} size={1} />
    </Container>
  )
}

const Container = styled.div`
  ${flexGap('16px')}
  width: 914px;
`

const Category = styled.div`
  ${typography.contentTitle}
  color: ${colors.grey[900]};
`

const Title = styled.div`
  ${typography.h5}
  color: ${colors.primary.black};
`

const Content = styled.div`
  ${typography.contentBody}
  color: ${colors.grey[600]};
`

const TopContentGrid = styled.div`
  ${flexGap('8px', 'row')}
  justify-content: flex-end;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 40px;
  ${typography.contentBody}
  color: ${colors.grey[100]};
`

const BottomContentGrid = styled.div`
  ${flexGap('16px')}
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 72px;
  margin-bottom: 60px;
`
const OrangeButton = styled(Button)`
  color: ${colors.primary.orange};
  border: 2px solid ${colors.primary.orange};
  background-color: white;
  padding: 6px 18px;
`

const GrayButton = styled(Button)`
  color: #ffffff;
  border: none;
  background-color: #888888;
  ${typography.tag}
  padding: 6px 18px;
`
