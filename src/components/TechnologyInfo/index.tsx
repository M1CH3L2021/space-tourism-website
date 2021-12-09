import { ReactNode } from 'react';

import { Container } from './styles';

interface TechnologyInfoProps {
  name: string
  description: string
  image: string
}

function TechnologyInfo({ name, description, image }: TechnologyInfoProps) {
  return (
    <Container>
      <div>
        <h4>The Terminology...</h4>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>

      <img src={image} alt={`image of the ${name}`} />
    </Container>
  );
};

export default TechnologyInfo;
