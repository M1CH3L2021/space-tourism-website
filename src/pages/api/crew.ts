export default function handler(req, res) {
  res.status(200).json({
    commander: {
      role: "Commander",
      name: "Douglas Hurley",
      description: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      photo: "https://i.ibb.co/R0kThPM/commander.png"
    },
    missionSpecialist: {
      role: "Mission Specialist",
      name: "Mark Shuttleworth",
      description: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      photo: "https://i.ibb.co/M2td9Lr/specialist.png"
    },
    pilot: {
      role: "Pilot",
      name: "Victor Glover",
      description: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
      photo: "https://i.ibb.co/8YyMxmw/pilot.png"
    },
    engineer: {
      role: "Flight Engineer",
      name: "Anousheh Ansari",
      description: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      photo: "https://i.ibb.co/D75zVDm/engineer.png"
    }
  })
}