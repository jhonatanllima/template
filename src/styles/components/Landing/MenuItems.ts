import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 20vh;

  overflow-x: auto;
  `;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  nav{
    width: 100%;
    height: 100%;

    ul{    
      width: 100%;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
      
      li{
        width: 22rem;
        min-width: 22rem;
        height: 8rem;
        margin-left: 1rem;
        border-radius: 4px;
        border: 2px solid rgba(178, 139, 114, 0.5);

        display: flex;
        align-items: center;
        justify-content: center;

        list-style: none;
        transform: skewX(-10deg);

        a{
          width:100%;
          height: 100%;
          padding: 0 1rem;

          display: flex;
          align-items: center;
          justify-content: center;

          background: rgba(114, 49, 0, 0.5);

          p{
            width: 100%;
            height: 100%;

            display: flex;
            align-items: center;
            justify-content: center;

            color: #d3a384;
            text-transform: uppercase;
            transform: skewX(10deg);
          }

          :hover{
            background: rgba(114, 49, 0, 0.9);
          }
        }

        :hover{
          border: 2px solid rgba(178, 139, 114, 0.9);
        }
      }
    }
  }
`;