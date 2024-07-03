import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const styleRepositoryList = {
  Thead: styled.thead`
    color: #ffff;
    font-size: 18px;
  `,
  Table: styled.table`
    width: 100%;
    margin-bottom: 55px;
    color: #ffff;
    line-height: 40px;
    text-align: justify;
  `,

  Tr: styled.tr`
    display: flex;
    justify-content: space-between;
  `,
  Td: styled.td`
    &:not(:first-child) {
      text-align: right;
    }
  `,
  Name: styled.td`
    flex-grow: 1;
    margin-right: 10px;
    overflow-wrap: anywhere;
  `,
  Star: styled.td`
    width: 65px;
    flex-shrink: 0;
  `,
  Commit: styled.td`
    width: 110px;
    flex-shrink: 0;
    margin-left: 10px;
  `,
  Link: styled.td`
    width: 65px;
    flex-shrink: 0;
    margin-left: 10px;
  `,
  StyledLink: styled.a`
    color: #25b084;
    &:visited {
      color: #a6c628;
    }
    &:hover {
      color: #ffff;
    }
  `,
  NameLink: styled(NavLink)`
    color: #25b084;
    &:visited {
      color: #a6c628;
    }
    &:hover {
      color: #ffff;
    }
  `,
  Th: styled.th`
    &.name {
      flex-grow: 1;
      margin-right: 10px;
    }
    &.star {
      width: 65px;
      flex-shrink: 0;
    }
    &.commit {
      width: 110px;
      flex-shrink: 0;
      margin-left: 10px;
    }
    &.link {
      width: 65px;
      flex-shrink: 0;
      margin-left: 10px;
    }
  `,
  Tbody: styled.tbody``,
};
