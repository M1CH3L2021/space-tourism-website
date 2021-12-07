import { Container } from './styles';

interface PlanetInfoContainerProps {
  name: string
  image: string
  description: string
  distance: string
  travelTime: string
}

function DestinationInfoContainer({ name, image, description, distance, travelTime }: PlanetInfoContainerProps) {
  return (
    <Container>
      <img src={image} alt={name} />
      
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <hr />
        <article>
          <div>
            <h4>Avg. distance</h4>
            <span>{distance}</span>
          </div>

          <div>
            <h4>Est. travel time</h4>
            <span>{travelTime}</span>
          </div>
        </article>
      </div>
    </Container>
  );
};

export default DestinationInfoContainer;