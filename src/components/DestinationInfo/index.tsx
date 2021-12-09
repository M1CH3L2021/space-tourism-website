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
          <div>
            <h4>Avg. distance</h4>
            <span>{distance}</span>
          </div>

          <div>
            <h4>Est. travel time</h4>
            <span>{travelTime}</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DestinationInfo;