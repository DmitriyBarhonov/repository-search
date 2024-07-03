import styled from "styled-components";

export const PaginatorStyle = {
  PaginatorContainer: styled.div`
    display: flex;
    justify-content: center;
  `,
  Button: styled.button<{ $isActive: boolean }>`
    cursor: pointer;
    color: #ffff;
    padding: 3px 10px;
    border-radius: 2px;
    background-color: ${({ $isActive }) => ($isActive ? "#b04825" : "#25b084")};
  `,
  Li: styled.li`
    margin-right: 15px;
  `,
};
