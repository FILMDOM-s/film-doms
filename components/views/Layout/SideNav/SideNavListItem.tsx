import { flexCenter } from "@/styles/emotion";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";

const SideNavListItem = ({ title, link }: { title: string; link: string }) => {
    return (
      <SideNavListItemWrapper>
        <Link css={LinkStyle} href={link}>
          {title}
        </Link>
      </SideNavListItemWrapper>
    )
  }


  export default SideNavListItem;
  const SideNavListItemWrapper = styled.li`
    ${flexCenter}
    height: 50px;
    border-bottom: 1px solid #e5e5e5;
    cursor: pointer;
    &:hover {
      background-color: #f5f5f5;
    }
    + a {
      color: #000;
    }
  `
  
  const LinkStyle = css`
    ${flexCenter}
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #000;
  `