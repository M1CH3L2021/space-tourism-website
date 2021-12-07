import { ReactNode } from 'react';

import { Container } from './styles';

interface CrewProps {
  children: ReactNode;
}

function Crew({ children }: CrewProps) {
  return (
    <Container>
      <h1>crew</h1>
      {children}
    </Container>
  );
};

export default Crew;
