import styled from "styled-components";
import background from '../../assets/background.png'

export const  Container = styled.div`
  width: 100%;
  height: 100vh;
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
    margin: 48px 0 24px;
  }
  
  > a {
    margin-top: 124px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${background}) no-repeat center center;
  background-size: cover;
`
