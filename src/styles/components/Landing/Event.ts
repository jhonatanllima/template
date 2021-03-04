import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 67vh;

  display: flex;
`;

export const ContentLeft = styled.div`
  width: 25%;
  min-height: 100%;

  display: flex;
  align-items: center;

  nav{
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    ul{
      width: 100%;
      height: auto;

      li{
        margin-top: 0.8rem; 
        padding: 2rem 2rem 2rem 0;

        list-style: none;
        background: #723100;

        a{
          color: #fff;
          font-size: 2rem;
          margin-left: 7rem;
        }

        :first-child{
          width: 70%;
          margin-left: -1.5vw;
          border-radius: 0 100px 100px 0;

          transition: 0.2s;

          :hover{
            cursor: pointer;
            margin-left: 0vw;
          }
        }

        :nth-child(2){
          width: 60%;
          margin-left: -1.5vw;
          border-radius: 0 100px 100px 0;

          transition: 0.2s;

          :hover{
            cursor: pointer;
            margin-left: 0vw;
          }
        }

        :nth-child(3){
          width: 90%;
          margin-left: -1.5vw;
          border-radius: 0 100px 100px 0;

          transition: 0.2s;

          :hover{
            cursor: pointer;
            margin-left: 0vw;
          }
        }

        :last-child{
          width: 70%;
          margin-left: -1.5vw;
          border-radius: 0 100px 100px 0;

          transition: 0.2s;

          :hover{
            cursor: pointer;
            margin-left: 0vw;
          }
        }
      }
    }
  }
`;

export const Center = styled.div`
  width: 50%;
  min-height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  
  img{
    width: 100%;
    height: auto;

    object-fit: contain;
  }
`;

export const ContentRight = styled.div`
  width: 25%;
  min-height: 100%;

  img{
    width: 100%;
    height: auto;
    margin-top: -4vh;
    margin-left: -3vw;

    object-fit: contain;
  }
`;
