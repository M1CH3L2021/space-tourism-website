import styled from 'styled-components';

export const Container = styled.main`
  height: 100vh;
  padding-top: 350px;

  background-image: url('/home-background.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 0;
  
  > div {
    width: 100%;
    max-width: 1110px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    
    span {
      color: var(--blue);
      font-size: 28px;
      letter-spacing: 4.8px;
      text-transform: uppercase;
    }

    h1 {
      margin-top: 12px;

      font-size: 150px;
      text-transform: uppercase;
      font-weight: 400;
    }

    p {
      max-width: 440px;
      color: var(--blue);
      font-size: 18px;
      line-height: 32px;
    }

    button {
      align-self: flex-end;
      height: 270px;
      width: 270px;
      
      background: var(--white);
      color: var(--black);
      font-size: 32px;
      font-family: Bellefair;
      text-transform: uppercase;
      
      border-radius: 50%;

      display: flex;
      justify-content: center;
      align-items: center;

      position: relative;

      transition: .3s;

      &:hover {
        filter: brightness(.8);
      }
    }
  }
`;
