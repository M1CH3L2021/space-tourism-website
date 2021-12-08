import { useEffect, useState } from 'react';
import Head from 'next/head';
import { api } from '../../services/api';

import { Container } from './styles';
import CrewMemberInfo from '../../components/CrewInfo';

interface ICrewMember {
  role: string
  name: string
  description: string
  photo: string
}

interface ICrew {
  commander: ICrewMember
  missionSpecialist: ICrewMember
  pilot: ICrewMember
  engineer: ICrewMember
}

function Crew() {
  const [crew, setCrew] = useState<ICrew>({} as ICrew)
  const [selectedCrewMember, setSelectedCrewMember] = useState<ICrewMember>({} as ICrewMember)

  useEffect(() => {
    api.get('/crew')
      .then(response => {
        setSelectedCrewMember(response.data.commander)
        setCrew(response.data)
      })
  }, [])

  console.log(crew)

  return (
    <>
      <Head>
        <title>Crew | Space Tourism</title>
      </Head>
      <Container>
        <nav>
          <h1>
            <span>02</span>
            Meet your crew
          </h1>

          <ul>
            <li onClick={() => setSelectedCrewMember(crew.commander)}>Commander</li>
            <li onClick={() => setSelectedCrewMember(crew.missionSpecialist)}>Mission Specialist</li>
            <li onClick={() => setSelectedCrewMember(crew.pilot)}>Pilot</li>
            <li onClick={() => setSelectedCrewMember(crew.engineer)}>Flight Engineer</li>
          </ul>
        </nav>

        <CrewMemberInfo
          name={selectedCrewMember.name}
          description={selectedCrewMember.description}
          photo={selectedCrewMember.photo}
        />
      </Container>
    </>
  );
};

export default Crew;
