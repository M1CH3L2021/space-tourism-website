import { Container } from './styles';

interface CrewInfoProps {
  name: string
  description: string
  photo: string
}

function CrewMemberInfo({ name, description, photo }: CrewInfoProps) {
  return (
    <Container>
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>

      <img src={photo} alt={`${name}'s photo`} loading="lazy"/>
    </Container>
  );
};

export default CrewMemberInfo;
