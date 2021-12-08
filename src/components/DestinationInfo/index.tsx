import { Container } from './styles';

interface PlanetInfoContainerProps {
  name: string
  image: string
  description: string
  distance: string
  travelTime: string
}

function DestinationInfo({ name, image, description, distance, travelTime }: PlanetInfoContainerProps) {
  return (
    <Container>
      <img src={image} alt={name} />
      
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <hr />
        <div>
          <details>
            <summary>Avg. distance</summary>
            <span>{distance}</span>
          </details>

          <details>
            <summary>Est. travel time</summary>
            <span>{travelTime}</span>
          </details>
        </div>
      </div>
    </Container>
  );
};

export default DestinationInfo;