export const typeMedia = [
  {
    _id: "5fcfa5d2e6f89d25c638aa44",
    name: "TV",
  },
  {
    _id: "5fcfa5d22814c802fbe8d385",
    name: "Revista",
  },
  {
    _id: "5fcfa5d2dd4ab622a9344115",
    name: "Radio",
  },
  {
    _id: "5fcfa5d23b6d601a80deb1c4",
    name: "Web",
  },
  {
    _id: "5fcfa5d281fa63fbc9228085",
    name: "Prensa",
  },
];

export function getTypeMedia() {
  return typeMedia.filter((t) => t);
}
