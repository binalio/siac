export const typeTransactions = [
  {
    _id: "5fbd289158153f37a77c145b",
    name: "Pago servicios",
  },
  {
    _id: "5fbd2891ff384f8b8cbf92ce",
    name: "Compra de Inmobiliario",
  },
  {
    _id: "5fbd2891c809e57b226a1fdd",
    name: "Viaticos",
  },
  {
    _id: "5fbd2891911a9bd4b54cc1b6",
    name: "Gasolina",
  },
  {
    _id: "5fbd28914bb21a4c57e6ecc0",
    name: "Pago a proveedores",
  },
];

export function getTypeTransactions() {
  return typeTransactions.filter((t) => t);
}
