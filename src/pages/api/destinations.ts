export default function handler(req, res) {
  res.status(200).json({
    moon: {
      name: "Moon",
      image: "https://i.ibb.co/tM6mBt1/moon.png",
      description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 Km",
      travelTime: "3 days"
    },
    mars: {
      name: "Mars",
      image: "https://i.ibb.co/G2NXLJz/mars.png",
      description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 M. Km",
      travelTime: "9 months"
    },
    europa: {
      name: "Europa",
      image: "https://i.ibb.co/W3wnHtb/europa.png",
      description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 M. Km",
      travelTime: "3 years"
    },
    titan: {
      name: "Titan",
      image: "https://i.ibb.co/0MB54gP/titan.png",
      description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 Bi. Km",
      travelTime: "7 years"
    }
  })
}