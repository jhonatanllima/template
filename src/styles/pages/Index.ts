import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: auto;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('assets/background/background.png');
`;

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  max-width: 1920px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
