export const suppliers = [
  {
    _id: "5fce68ac1b0d82417e78d1e2",
    isActive: true,
    name: "Diario de Queretaro",
    tradename: "Presupuesto Emergente",
    mediaId: "5fcfa5d281fa63fbc9228085",
    media: [
      {
        type: "Prensa",
        sections: ["eu", "velit", "non", "exercitation", "aliquip"],
        products: ["id", "nisi", "qui", "dolore", "nulla"],
      },
    ],
  },
  {
    _id: "5fce68acb9ad412eff26971c",
    isActive: true,
    name: "Televisa",
    tradename: "Presupuesto Emergente",
    mediaId: "5fcfa5d2e6f89d25c638aa44",
    media: [
      {
        type: "TV",
        sections: ["nulla", "laborum", "eu", "consectetur", "dolor"],
        products: ["magna", "eu", "et", "consequat", "fugiat"],
      },
    ],
  },
  {
    _id: "5fce68ac42025c10644a2ea5",
    isActive: true,
    name: "AM Queretaro",
    tradename: "Presupuesto Proveedores",
    mediaId: "5fcfa5d281fa63fbc9228085",
    media: [
      {
        type: "Web",
        sections: ["ut", "exercitation", "nulla", "aliquip", "adipisicing"],
        products: ["minim", "enim", "dolore", "labore", "reprehenderit"],
      },
    ],
  },
  {
    _id: "5fce68acc66068fb61bceec2",
    isActive: true,
    name: "Revista Qro",
    tradename: "Presupuesto Compras",
    mediaId: "5fcfa5d22814c802fbe8d385",
    media: [
      {
        type: "Revistas",
        sections: ["magna", "proident", "proident", "ipsum", "dolore"],
        products: ["minim", "culpa", "occaecat", "eu", "ullamco"],
      },
    ],
  },
  {
    _id: "5fce68ac0eeebcf6410e10de",
    isActive: true,
    name: "Radio Formula",
    tradename: "Presupuesto Proveedores",
    mediaId: "5fcfa5d2dd4ab622a9344115",
    media: [
      {
        type: "Radio",
        sections: ["enim", "exercitation", "esse", "esse", "excepteur"],
        products: ["laborum", "adipisicing", "sit", "tempor", "magna"],
      },
    ],
  },
  {
    _id: "5fce68ac720f40476fab6105",
    isActive: true,
    name: "91 DAT",
    tradename: "Presupuesto Proveedores",
    mediaId: "5fcfa5d2dd4ab622a9344115",
    media: [
      {
        type: "Radio",
        sections: ["laboris", "mollit", "consequat", "elit", "voluptate"],
        products: ["et", "dolore", "ea", "laboris", "enim"],
      },
    ],
  },
];

export function getSuppliers() {
  return suppliers.filter((s) => s);
}
