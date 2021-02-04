const campaings = [
  {
    _id: "5fdcd70e94d1bcdd95030d73",
    name: "Prensa",
    area: {
      _id: "5fbc09afcb40dea8dc9f70cb",
      name: "Revistas",
    },
  },
  {
    _id: "5fdcd70e4acf41e845255adc",
    name: "Web",
    area: {
      _id: "5fbc09af4adca41d6bd63c7c",
      name: "Web",
    },
  },
  {
    _id: "5fdcd70e416d7800a0969869",
    name: "TV",
    area: {
      _id: "5fbc09af1a6c0200f4bfbfc0",
      name: "Web",
    },
  },
  {
    _id: "5fdcd70e1a2482e1182fa99a",
    name: "Prensa",
    area: {
      _id: "5fbc09af1a6c0200f4bfbfc0",
      name: "TV",
    },
  },
  {
    _id: "5fdcd70eed5505cfe7e54df9",
    name: "TV",
    area: {
      _id: "5fbc09afe698e18f90fe784e",
      name: "Web",
    },
  },
];

export function getCampaings() {
  return campaings.filter((c) => c);
}
