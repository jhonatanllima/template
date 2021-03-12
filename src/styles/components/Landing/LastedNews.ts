import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 80rem;

  display: flex;
  align-items: center;
  flex-direction: column;


  filter: brightness(150%);
  backdrop-filter: blur(20px);
  background: rgba(21, 14, 8, 0.5);
  -webkit-backdrop-filter: blur(20px);
`;

export const ContentTop = styled.div`
  width: 100%;
  height: 70%;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  h1{
    margin-top: 8rem;

    color: #f5d697;
    line-height: 1;
    font-size: 6rem;
    letter-spacing: 0.5rem;
    text-transform: uppercase;
  }

  main{
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    section{
      width: 50rem;
      height: 40rem;
      border-radius: 8px 8px 0 0;

      background: #2c190b;

      header{
        width: 100%;
        height: 70%;
        border-radius: 8px 8px 0 0 ;

        img{
          width: 100%;
          height: 100%;
          border-radius: 8px 8px 0 0 ;  

          object-fit: cover;
          transition: 0.2s;
        }
      }

      footer{
        width: 100%;
        height: 30%;
        padding: 1.5rem;

        span{
          color: #b28b72;
          font-size: 1.8rem;
          line-height: 0.89;
        }

        h3{ 
          margin-top: 1rem;

          color: #b28b72;
          line-height: 1.22;
          font-size: 2.25rem;
          text-transform: uppercase;
        }
      }

      + section {
        margin-left: 4rem;
      }
    }
  }

`;

export const ContentFooter = styled.div`
  width: 100%;
  height: 30%;
`;
