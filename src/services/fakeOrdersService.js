const orders = [
  {
    _id: "5fe8b5ecb37cc9cfc6ba014d",
    startDate: "25 Feb, 2020",
    endDate: "24 Feb, 2020",
    amount: 43924.06,
    campaing: {
      _id: "5fbc09afb97d1f29c74629de",
      name: "Informe de gobierno",
    },
    supplier: {
      _id: "5fbc09af1a6c0200f4bfbfc0",
      name: "MEGACABLE",
      media: {
        _id: "5fbc09af4adca41d6bd63c7c",
        name: "Revistas",
      },
    },
  },
  {
    _id: "5fe8b5ec7ec39ac4b6245aa4",
    startDate: "23 Jul, 2020",
    endDate: "31 Oct, 2019",
    amount: 56240.73,
    campaing: {
      _id: "5fbc09af1a6c0200f4bfbfc0",
      name: "Informe de gobierno",
    },
    supplier: {
      _id: "5fbc09afcb40dea8dc9f70cb",
      name: "LA CAÑADA",
      media: {
        _id: "5fbc09afe698e18f90fe784e",
        name: "Radio",
      },
    },
  },
  {
    _id: "5fe8b5ec53018f1a007bb035",
    startDate: "23 Dec, 2019",
    endDate: "5 Oct, 2019",
    amount: 171484.26,
    campaing: {
      _id: "5fbc09afe698e18f90fe784e",
      name: "Informe de gobierno",
    },
    supplier: {
      _id: "5fbc09af1a6c0200f4bfbfc0",
      name: "LA CAÑADA",
      media: {
        _id: "5fbc09afe698e18f90fe784e",
        name: "Prensa",
      },
    },
  },
  {
    _id: "5fe8b5eca107c7beda51b879",
    startDate: "15 May, 2019",
    endDate: "2 May, 2019",
    amount: 113006.62,
    campaing: {
      _id: "5fbc09afcb40dea8dc9f70cb",
      name: "Apoyo a Madres",
    },
    supplier: {
      _id: "5fbc09af4adca41d6bd63c7c",
      name: "MEGACABLE",
      media: {
        _id: "5fbc09afcb40dea8dc9f70cb",
        name: "Radio",
      },
    },
  },
  {
    _id: "5fe8b5ec64b0b1c18afad244",
    startDate: "30 Mar, 2019",
    endDate: "15 Apr, 2019",
    amount: 5929.82,
    campaing: {
      _id: "5fbc09af4adca41d6bd63c7c",
      name: "Apoyo a Madres",
    },
    supplier: {
      _id: "5fbc09afcb40dea8dc9f70cb",
      name: "LA CAÑADA",
      media: {
        _id: "5fbc09afcb40dea8dc9f70cb",
        name: "Prensa",
      },
    },
  },
  {
    _id: "5fe8b5ecf300c181e553ae3c",
    startDate: "31 Aug, 2019",
    endDate: "13 Jun, 2019",
    amount: 53049,
    campaing: {
      _id: "5fbc09af1a6c0200f4bfbfc0",
      name: "Informe de gobierno",
    },
    supplier: {
      _id: "5fbc09afcb40dea8dc9f70cb",
      name: "BRUJULA DIGITAL",
      media: {
        _id: "5fbc09af1a6c0200f4bfbfc0",
        name: "Prensa",
      },
    },
  },
  {
    _id: "5fe8b5ec5eff8320124ecddc",
    startDate: "11 Mar, 2019",
    endDate: "19 Jun, 2020",
    amount: 16271.99,
    campaing: {
      _id: "5fbc09af4adca41d6bd63c7c",
      name: "Apoyo a Madres",
    },
    supplier: {
      _id: "5fbc09af4adca41d6bd63c7c",
      name: "DIARIO DE QUERÉTARO",
      media: {
        _id: "5fbc09afcb40dea8dc9f70cb",
        name: "Prensa",
      },
    },
  },
  {
    _id: "5fe8b5ec9afe76610da82d39",
    startDate: "25 Feb, 2019",
    endDate: "13 Aug, 2020",
    amount: 173849.12,
    campaing: {
      _id: "5fbc09afb97d1f29c74629de",
      name: "Apoyo a Madres",
    },
    supplier: {
      _id: "5fbc09afcb40dea8dc9f70cb",
      name: "TV AZTECA",
      media: {
        _id: "5fbc09afb97d1f29c74629de",
        name: "Prensa",
      },
    },
  },
  {
    _id: "5fe8b5ec58fa110c2fcf3b74",
    startDate: "19 Oct, 2020",
    endDate: "18 Jul, 2020",
    amount: 74713.48,
    campaing: {
      _id: "5fbc09afb97d1f29c74629de",
      name: "Informe de gobierno",
    },
    supplier: {
      _id: "5fbc09af1a6c0200f4bfbfc0",
      name: "TV AZTECA",
      media: {
        _id: "5fbc09af4adca41d6bd63c7c",
        name: "Prensa",
      },
    },
  },
  {
    _id: "5fe8b5ec6295f23867637295",
    startDate: "21 Apr, 2019",
    endDate: "21 Apr, 2020",
    amount: 96252.6,
    campaing: {
      _id: "5fbc09afb97d1f29c74629de",
      name: "Predial",
    },
    supplier: {
      _id: "5fbc09afcb40dea8dc9f70cb",
      name: "TELEVISA",
      media: {
        _id: "5fbc09afcb40dea8dc9f70cb",
        name: "Prensa",
      },
    },
  },
  {
    _id: "5fe8b5eca14a2badab8b13e6",
    startDate: "17 Jul, 2019",
    endDate: "9 Aug, 2020",
    amount: 140942.63,
    campaing: {
      _id: "5fbc09afcb40dea8dc9f70cb",
      name: "Apoyo a Madres",
    },
    supplier: {
      _id: "5fbc09afb97d1f29c74629de",
      name: "TELEVISA",
      media: {
        _id: "5fbc09afcb40dea8dc9f70cb",
        name: "Prensa",
      },
    },
  },
  {
    _id: "5fe8b5ec6fc79cd5c294300a",
    startDate: "28 Aug, 2020",
    endDate: "10 Apr, 2019",
    amount: 32495.39,
    campaing: {
      _id: "5fbc09afe698e18f90fe784e",
      name: "Apoyo Agropecuario",
    },
    supplier: {
      _id: "5fbc09afe698e18f90fe784e",
      name: "IMAGEN",
      media: {
        _id: "5fbc09afb97d1f29c74629de",
        name: "Radio",
      },
    },
  },
  {
    _id: "5fe8b5ec3fbb932b53025911",
    startDate: "24 Dec, 2019",
    endDate: "1 Jan, 2020",
    amount: 102370.61,
    campaing: {
      _id: "5fbc09af1a6c0200f4bfbfc0",
      name: "Predial",
    },
    supplier: {
      _id: "5fbc09af1a6c0200f4bfbfc0",
      name: "LA CAÑADA",
      media: {
        _id: "5fbc09afe698e18f90fe784e",
        name: "Web",
      },
    },
  },
  {
    _id: "5fe8b5ec2e0ac02a8b5e7921",
    startDate: "30 Jan, 2019",
    endDate: "14 Jun, 2019",
    amount: 197383.91,
    campaing: {
      _id: "5fbc09af1a6c0200f4bfbfc0",
      name: "Informe de gobierno",
    },
    supplier: {
      _id: "5fbc09afe698e18f90fe784e",
      name: "TELEVISA",
      media: {
        _id: "5fbc09afe698e18f90fe784e",
        name: "Web",
      },
    },
  },
  {
    _id: "5fe8b5ecd05b2c802a414ef1",
    startDate: "17 Nov, 2019",
    endDate: "2 Jul, 2019",
    amount: 107896.58,
    campaing: {
      _id: "5fbc09afb97d1f29c74629de",
      name: "Apoyo a Madres",
    },
    supplier: {
      _id: "5fbc09afe698e18f90fe784e",
      name: "IMAGEN",
      media: {
        _id: "5fbc09af4adca41d6bd63c7c",
        name: "Revistas",
      },
    },
  },
  {
    _id: "5fe8b5ec6225dd6b6d165289",
    startDate: "26 Jan, 2019",
    endDate: "2 Aug, 2019",
    amount: 148090.31,
    campaing: {
      _id: "5fbc09afb97d1f29c74629de",
      name: "Informe de gobierno",
    },
    supplier: {
      _id: "5fbc09afb97d1f29c74629de",
      name: "TELEVISA",
      media: {
        _id: "5fbc09af4adca41d6bd63c7c",
        name: "Radio",
      },
    },
  },
  {
    _id: "5fe8b5ec5e3352ee5a4c436f",
    startDate: "8 Aug, 2020",
    endDate: "3 Jun, 2020",
    amount: 61996.83,
    campaing: {
      _id: "5fbc09afcb40dea8dc9f70cb",
      name: "Apoyo Agropecuario",
    },
    supplier: {
      _id: "5fbc09af4adca41d6bd63c7c",
      name: "BRUJULA DIGITAL",
      media: {
        _id: "5fbc09afcb40dea8dc9f70cb",
        name: "Prensa",
      },
    },
  },
  {
    _id: "5fe8b5ec4f4e303bb4d810aa",
    startDate: "3 Jul, 2020",
    endDate: "6 Dec, 2020",
    amount: 194627.29,
    campaing: {
      _id: "5fbc09afe698e18f90fe784e",
      name: "Despensas",
    },
    supplier: {
      _id: "5fbc09af1a6c0200f4bfbfc0",
      name: "IMAGEN",
      media: {
        _id: "5fbc09af4adca41d6bd63c7c",
        name: "Radio",
      },
    },
  },
  {
    _id: "5fe8b5ec8734163a8475f0cd",
    startDate: "3 Aug, 2020",
    endDate: "18 Apr, 2019",
    amount: 94939.03,
    campaing: {
      _id: "5fbc09af4adca41d6bd63c7c",
      name: "Apoyo Agropecuario",
    },
    supplier: {
      _id: "5fbc09af1a6c0200f4bfbfc0",
      name: "IMAGEN",
      media: {
        _id: "5fbc09afcb40dea8dc9f70cb",
        name: "TV",
      },
    },
  },
  {
    _id: "5fe8b5ec26bd0fbb1a0fdaa7",
    startDate: "25 May, 2019",
    endDate: "27 Jun, 2020",
    amount: 186283.05,
    campaing: {
      _id: "5fbc09af4adca41d6bd63c7c",
      name: "Becas escolares",
    },
    supplier: {
      _id: "5fbc09af4adca41d6bd63c7c",
      name: "BRUJULA DIGITAL",
      media: {
        _id: "5fbc09af4adca41d6bd63c7c",
        name: "Radio",
      },
    },
  },
];

export function getOrders() {
  return orders;
}

export function getOrder(id) {
  return orders.find((o) => o._id === id);
}

export function saveOrder(order) {}

export function deleteOrder(id) {}
