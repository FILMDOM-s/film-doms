import { css } from '@emotion/react'
import Image from 'next/image'
import React from 'react'

const Critic = ({ image, tag, title, createAt }: Critic) => {
  return (
    <article css={CriticBox}>
      <div className="flex flex-col">
        <h3 css={Tag} className="lg:hidden">
          {tag}
        </h3>
        <h2 css={Title}>{title}</h2>
        <div className="flex justify-between items-center">
          <time css={Time}>{createAt}</time>
          {/* bookmark icon */}
        </div>
      </div>
      <div css={ImageContainer}>
        <Image
          src={image}
          alt={'post image'}
          fill
          sizes="(max-width: 1024px) 100vw,
            (min-width: 768px) 50vw,
              33vw"
        />
      </div>
      <div className="hidden lg:flex lg:w-full lg:justify-start">
        <h3 css={Tag}>{tag}</h3>
      </div>
    </article>
  )
}

export default Critic

const Tag = css`
  width: 37px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  color: #222222;
  margin-bottom: 8px;
  @media screen and (min-width: 1024px) {
    font-size: 16px;
    width: 42px;
    margin-bottom: 14px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 27px;
    margin-bottom: 16px;
    width: 47px;
  }
`

const Title = css`
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 219px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
  margin-bottom: 10px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  @media screen and (min-width: 1024px) {
    width: 295px;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 18px;
  }

  @media screen and (min-width: 1440px) {
    width: 411px;
    font-size: 22px;
    line-height: 33px;
    margin-bottom: 21px;
  }
`

const CriticBox = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid #eeeeee;
  height: 100%;
  width: 100%;
  @media screen and (min-width: 1024px) {
    flex-direction: column-reverse;
    border: none;
  }
`

const ImageContainer = css`
  min-width: 104px;
  min-height: 104px;
  position: relative;
  object-fit: cover;
  margin-left: 13px;
  @media screen and (min-width: 1024px) {
    margin: 0 0 20px 0;
    min-width: 295px;
    width: 100%;
    height: 100%;
    min-height: 166px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 22px;
    width: 416px;
    height: 234px;
  }
`
const Time = css`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;

  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 27px;
  }
`
