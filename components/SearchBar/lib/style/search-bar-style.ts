import styled from "styled-components";

export const SearchBarStyle = {
  Input: styled.input`
    padding: 10px 20px;
    width: 400px;
    margin-right: 15px;
    border-radius: 5px;
    border: none;
    color: #fffff;
  `,
  Form: styled.form`
    margin-bottom: 20px;
  `,
  FormContainer: styled.button``,
  Title: styled.h1`
    margin-bottom: 20px;
    font-size: 40px;
    transition: color 3s;
    animation: color-change 3s infinite;
    @keyframes color-change {
      0% {
        color: #9fee00;
      }
      25% {
        color: #86b32d;
      }
      50% {
        color: #679b00;
      }
      75% {
        color: #b9f73e;
      }
      100% {
        color: #c9f76f;
      }
    }
  `,
};
