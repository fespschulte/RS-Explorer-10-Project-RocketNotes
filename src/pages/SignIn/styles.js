import styled from "styled-components";

export const  Container = styled.div`
  height: 100%;
  display: flex;
  align-items: stretch;
`

export const  Form = styled.form`
  padding: 0 136px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > h1 { 
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 63px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
  > p {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
  > h2 {
    margin: 48px 0;
  }
  > button {
    margin-bottom: 124px;
  }
`
