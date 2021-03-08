import styled from 'styled-components';

export const Background = styled.div`
  z-index: -1;
  position: fixed;

  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-size: cover  ;
  background-repeat: no-repeat;
  background-image: url('assets/background/background.png');
`;

export const Container = styled.div`
  width: 100vw;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  height: auto;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const SectionHome = styled.div`
  width: 100%;
  height: auto;

  background: linear-gradient(to bottom, rgba(106, 52, 16, 0.5), rgba(21, 14, 8, 0.5) 46%);
`;
