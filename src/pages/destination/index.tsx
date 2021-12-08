import Head from 'next/head'
import { useEffect, useState } from 'react';
import DestinationInfo from '../../components/DestinationInfo';

import { Container } from './styles';
import { api } from '../../services/api';

interface IDestination {
  name: string
  image: string
  description: string
  distance: string
  travelTime: string
}

interface IDestinations {
  moon: IDestination
  mars: IDestination
  europa: IDestination
  titan: IDestination
}

function Destination() {
  const [destinations, setDestinations] = useState<IDestinations>({} as IDestinations)
  const [selectedDestination, setSelectedDestination] = useState<IDestination>({} as IDestination)

  useEffect(() => {
    api.get('/destinations')
      .then(response => {
        setSelectedDestination(response.data.moon)
        setDestinations(response.data)
      })
  }, [])

  return (
    <>
      <Head>
        <title>Destination | Space Tourism</title>
      </Head>
      <Container>
        <nav>
          <h1>
            <span>01</span>
            Destination
          </h1>

          <ul>
            <li onClick={() => setSelectedDestination(destinations.moon)}>Moon</li>
            <li onClick={() => setSelectedDestination(destinations.mars)}>Mars</li>
            <li onClick={() => setSelectedDestination(destinations.europa)}>Europa</li>
            <li onClick={() => setSelectedDestination(destinations.titan)}>Titan</li>
          </ul>
        </nav>

        <DestinationInfo
          name={selectedDestination.name}
          image={selectedDestination.image}
          description={selectedDestination.description}
          distance={selectedDestination.distance}
          travelTime={selectedDestination.travelTime}
        />
      </Container>
    </>
  );
};

export default Destination;
