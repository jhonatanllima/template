import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 50vh;
  min-height: 50rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  background: linear-gradient(to bottom, rgba(106, 52, 16, 0.5), rgba(21, 14, 8, 0.5) 46%); 

  img{
    width: 60%;
    height: auto;
  }

  h4{
    margin-bottom: 1rem;

    color: #b28b72;
    font-size: 1.5rem;
  }

  section {
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    span{
      margin-top: 1rem;

      color: #b28b72;
      font-size: 2rem;
      line-height: 1.18;
    }

    img{
      width: 7rem;
      height: 5rem;
      margin-left: 1rem;
    }
  }
`;
