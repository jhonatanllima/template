import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 66vh;

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
        padding: 1.6rem 1.6rem 1.6rem 0;

        list-style: none;
        background: rgba(114, 49, 0, 0.5);

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
            background: rgba(114, 49, 0, 0.9);
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

            background: rgba(114, 49, 0, 0.9);
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

            background: rgba(114, 49, 0, 0.9);
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

            background: rgba(114, 49, 0, 0.9);
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
  padding-right: 10rem;

  img{
    width: 100%;
    height: auto;
    margin-top: -4vh;
    object-fit: contain;
  }
`;
