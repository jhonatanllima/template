import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 13vh; 
  min-height: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
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
        width: 29rem;
        height: 8rem;
        min-width: 25rem;
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
            padding: 0rem 4rem;

            display: flex;
            align-items: center;
            justify-content: center;

            color: #d3a384;
            font-size: 2.1rem;
            text-align: center;
            word-break: break-all;
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