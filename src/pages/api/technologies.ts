export default function handler(req, res) {
  res.status(200).json({
    launchVehicle: {
      name: "Launch Vehicle",
      description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      image: "https://i.ibb.co/LzX1R3S/launch-vehicle.png"
    },
    spaceport: {
      name: "Spaceport",
      description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
      image: "https://i.ibb.co/ng3Hmsr/spaceport.png"
    },
    spaceCapsule: {
      name: "Space Capsule",
      description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      image: "https://i.ibb.co/MfJsf7q/space-capsule.png"
    }
  })
}