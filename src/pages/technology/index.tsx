import { useEffect, useState } from 'react';
import Head from 'next/head'
import TechnologyInfo from '../../components/TechnologyInfo';
import { api } from '../../services/api';

import { Container } from './styles';

interface ITechnology {
  name: string
  description: string
  image: string
}

interface ITechnologies {
  launchVehicle: ITechnology
  spaceport: ITechnology
  spaceCapsule: ITechnology
}

function Technology() {
  const [technologies, setTechnologies] = useState<ITechnologies>({} as ITechnologies)
  const [selectedTechnology, setSelectedTechnology] = useState<ITechnology>({} as ITechnology)

  useEffect(() => {
    api.get('/technologies')
      .then(response => {
        setSelectedTechnology(response.data.launchVehicle)
        setTechnologies(response.data)
      })
  }, [])

  return (
    <>
      <Head>
        <title>Technology | Space Tourism</title>
      </Head>
      <Container>
        <h1>
          <span>3</span>
          Space launch 101
        </h1>

        <div>
          <ul>
            <li>
              <button onClick={() => setSelectedTechnology(technologies.launchVehicle)}>1</button>
            </li>
            <li>
              <button onClick={() => setSelectedTechnology(technologies.spaceport)}>2</button>
            </li>
            <li>
              <button onClick={() => setSelectedTechnology(technologies.spaceCapsule)}>3</button>
            </li>
          </ul>

          <TechnologyInfo
            name={selectedTechnology.name}
            description={selectedTechnology.description}
            image={selectedTechnology.image}
          />
        </div>
      </Container>
    </>
  );
};

export default Technology;