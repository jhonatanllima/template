import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 75vh;
  min-height: 60rem; 

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentLeft = styled.div`
  width: 20%;

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
        display: flex;
        align-items: center;

        height: 8rem;
        margin-top: 0.6rem; 
        padding: 1.6rem 1.6rem 1.6rem 0;

        list-style: none;
        background: rgba(114, 49, 0, 0.5);

        a{
          padding: 1.2rem 2rem;

          color: #fff;
          transition: 0.4s;
          font-size: 2.5rem;
          margin-left: 5rem;
          padding-right: 3rem;

          text-transform: uppercase;

          :hover{
            margin-left: 6rem;
          }
        }

        :first-child{
          width: 80%;
          border-radius: 0 100px 100px 0;

          transition: 0.2s;

          :hover{
            width: 85%;

            cursor: pointer;
            margin-left: 0vw;
            background: rgba(114, 49, 0, 0.9);
          }
        }

        :nth-child(2){
          width: 70%;
          border-radius: 0 100px 100px 0;

          transition: 0.2s;

          :hover{
            width: 80%;

            cursor: pointer;
            margin-left: 0vw;

            background: rgba(114, 49, 0, 0.9);
          }
        }

        :nth-child(3){
          width: 95%;
          border-radius: 0 100px 100px 0;

          transition: 0.2s;

          :hover{
            width: 100%;

            cursor: pointer;
            margin-left: 0vw;

            background: rgba(114, 49, 0, 0.9);
          }
        }

        :last-child{
          width: 80%;
          border-radius: 0 100px 100px 0;

          transition: 0.2s;

          :hover{
            width: 90%;
            
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
  width: 60%;
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
  width: 20%;
  min-height: 100%;
  padding-right: 10rem;

  img{
    width: 100%;
    height: auto;
    margin-top: -4vh;
    object-fit: contain;
  }
`;
