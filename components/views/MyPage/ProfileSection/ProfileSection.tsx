import { RenderIf } from '@/components/common'
import { useImageUpload } from '@/services/file'
import { useUpdateUserProfile } from '@/services/myPage'
import { colors, flex, font } from '@/styles/emotion'
import { getImageSrcByUuid } from '@/utils'
import styled from '@emotion/styled'
import { defaultUserProfile } from '@images/common'
import { ProfileEdit } from '@svgs/common'
import Image from 'next/image'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

interface Props {
  type: 'private' | 'public'
  profileImage: string
  nickname: string
}

const readFile = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}

const ProfileSection = ({ type, profileImage, nickname }: Props) => {
  const [previewProfile, setPreviewProfile] = useState<string | null>(null)
  const { mutate: imageUpload } = useImageUpload()
  const { mutate: updateProfile } = useUpdateUserProfile()

  const onChangeProfile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (!file) return

    const profile = (await readFile(file)) as string

    setPreviewProfile(profile)

    imageUpload(file, {
      onSuccess({ result: { uploadedFiles } }) {
        updateProfile(
          {
            imageId: uploadedFiles[0].id,
          },
          {
            onSuccess: () => {
              toast.success('프로필 이미지가 변경되었습니다.')
            },
          }
        )
      },
    })
  }

  const isPrivate = type === 'private'

  return (
    <Container>
      <ProfileImageBox>
        <Image
          src={
            previewProfile ??
            getImageSrcByUuid(profileImage) ??
            defaultUserProfile
          }
          alt={`profile-${nickname}`}
          fill
        />
        <RenderIf
          condition={isPrivate}
          render={
            <>
              <ProfileEditBox htmlFor="profile" role="button">
                <ProfileEdit />
              </ProfileEditBox>
              <Input
                type="file"
                id="profile"
                hide
                accept="image/*"
                onChange={onChangeProfile}
              />
            </>
          }
        />
      </ProfileImageBox>
      <NickName>{nickname}</NickName>
      <RenderIf
        condition={isPrivate}
        render={<Description>{`'${nickname}' 님 환영합니다!`}</Description>}
      />
    </Container>
  )
}

const Input = styled.input<{ hide?: boolean }>`
  ${({ hide }) => hide && 'display: none;'}
`

const Description = styled.span`
  ${font({ size: '16px', weight: '500', lineHeight: '20px' })}
  color: #888888;
`

const NickName = styled.span`
  ${font({ size: '20px', weight: '700', lineHeight: '20px' })}
  color: ${colors.grey[900]};
`

const ProfileEditBox = styled.label`
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: pointer;
`

const ProfileImageBox = styled.div`
  position: relative;
  width: 100px;
  height: 100px;

  & > img {
    border-radius: 50%;
  }
`

const Container = styled.div`
  ${flex({ direction: 'column', align: 'center' })}
  width: 100%;
  gap: 24px;
`

export default ProfileSection
