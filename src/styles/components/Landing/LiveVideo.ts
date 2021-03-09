import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1920px;

  display: flex;

  background: transparent radial-gradient(closest-side at 50% 50%, rgba(106, 52, 16, 0.5) 0%, rgba(21, 14, 8, 0.5) 100%) 0% 0% no-repeat padding-box;
`;

export const ContentLeft = styled.div`
  width: 20%;
  height: auto;
  padding: 1rem;

  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;

  button{
    width: 23rem;
    height: 8rem;
    border: none;
    outline: none;
    padding:  3rem;
    margin-top: 1rem;
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    color: #292113;
    font-weight: bold;
    line-height: 1.21;
    text-transform: uppercase;
    background: rgba(211, 163, 132, 0.9);

    .iconButton{
      width: 3rem;
      height: 3rem;
      margin-right: 1rem;

      color: #503400;
    }

    :hover{
      background: rgba(211, 163, 132, 1);
    }
  }
`;

export const Center = styled.div`
  width: 60%;
  height: auto;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  h3{
    color: #b28b72;
    margin-top: -8rem;
    font-size: 2.3rem;
    line-height: 1;
    letter-spacing: 0.5rem;
    text-transform: uppercase;
  }

  h1{
    margin-bottom: 2rem;

    color: #f5d697;
    line-height: 1;
    font-size: 9rem;
    letter-spacing: 0.5rem;
    text-transform: uppercase;
  }

  div{
    width: 90%;
    border-radius: 1.4rem;
    border: 1rem solid rgba(255, 255, 255, 0.07);

    aspect-ratio: 16/9;

    iframe{
      border-radius: 6px;
    }
  }
`;

export const ContentRight = styled.div`
  width: 20%;
  height: auto;
  padding-right: 10rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h2{
    color: #d3a384;
    line-height: 1;
    font-size: 2.3rem;
    margin-bottom: 2rem;
    text-transform: uppercase;
  }

  p{
    color: #d3a384;
    line-height: 1;
    font-size: 1.8rem;
    text-align:start;
    margin-bottom: 2rem;
  }
`;
