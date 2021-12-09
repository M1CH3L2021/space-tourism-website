import styled from 'styled-components';

export const Container = styled.header`
  padding-left: 50px;
  position: fixed;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    padding: 0 120px;

    text-transform: uppercase;

    display: flex;
    align-items: center;
    gap: 48px;

    background-color: rgba(255, 255, 255, .04);
    backdrop-filter: blur(10px);

    > * {
      padding: 38px 0;
      border-bottom: 3px solid white;

      strong {
        margin-right: 12px;
      }
    }
  }
`;
