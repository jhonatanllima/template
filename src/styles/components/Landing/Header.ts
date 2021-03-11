import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 12vh;
  padding: 0 10rem;
  min-height: 8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img{
    width: 13rem;
    height: auto;
  }

  p{
    display: flex;
    align-items: center;
    justify-content: center;

    color: #d3a384;
    font-size: 2rem;
    text-transform: uppercase;
    
    img{
      width: 2rem;
      height: 2rem;
      margin: 0.5rem;
    }
  }
`;
