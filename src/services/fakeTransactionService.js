import * as budgetsAPI from "./fakeBudgetService";
import * as typeTransactionsAPI from "./fakeTypeTransactionService";

const transactions = [
  {
    _id: "5fbd2ab32b97306008d65faa",
    dateTransaction: "3 Sep, 2020",
    detail:
      "Deserunt excepteur ipsum occaecat ut nulla esse in est sunt dolore.",
    amount: "$12,622.8",
    typeTransaction: {
      _id: "5fbd2891ff384f8b8cbf92ce",
      name: "Compra de inmobiliario",
    },
    budget: {
      _id: "5fc124bc5ba25990477eccb7",
      name: "Presupuesto Emergente",
    },
  },
  {
    _id: "5fbd2ab30ad06a82ff5261cf",
    dateTransaction: "22 Apr, 2020",
    detail: "Dolor non laboris cupidatat adipisicing quis.",
    amount: "$47,019.32",
    typeTransaction: {
      _id: "5fbd2891ff384f8b8cbf92ce",
      name: "Compra de inmobiliario",
    },
    budget: {
      _id: "5fc124bc5ba25990477eccb7",
      name: "Presupuesto Emergente",
    },
  },
  {
    _id: "5fbd2ab357cd93ad9f3a79ed",
    dateTransaction: "9 Jul, 2019",
    detail: "Velit minim est ad esse.",
    amount: "$169,113.23",
    typeTransaction: {
      _id: "5fbd2891911a9bd4b54cc1b6",
      name: "Compostura vehículo",
    },
    budget: {
      _id: "5fc124bc5ba25990477eccb7",
      name: "Presupuesto Emergente",
    },
  },
  {
    _id: "5fbd2ab3f4ea9803ee6b0d55",
    dateTransaction: "8 Mar, 2019",
    detail: "Ipsum reprehenderit enim ut in.",
    amount: "$64,059.26",
    typeTransaction: {
      _id: "5fbd28914bb21a4c57e6ecc0",
      name: "Reunión equipo",
    },
    budget: {
      _id: "5fc124bc5ba25990477eccb7",
      name: "Presupuesto Emergente",
    },
  },
  {
    _id: "5fbd2ab372de58771de417db",
    dateTransaction: "3 Sep, 2019",
    detail: "Amet ex velit ipsum ea sunt laborum.",
    amount: "$189,047.94",
    typeTransaction: {
      _id: "5fbc09afe698e18f90fe784e",
      name: "Imprenta de pancartas",
    },
    budget: {
      _id: "5fc124bcc701ba44886d9fc4",
      name: "Presupuesto Proveedores",
    },
  },
  {
    _id: "5fbd2ab3887ae109eb5dc490",
    dateTransaction: "16 Jun, 2020",
    detail: "Id in ea ullamco incididunt duis eiusmod tempor eu sunt pariatur.",
    amount: "$76,031.86",
    typeTransaction: {
      _id: "5fbd28914bb21a4c57e6ecc0",
      name: "Impresión editorial",
    },
    budget: {
      _id: "5fc124bcc701ba44886d9fc4",
      name: "Presupuesto Proveedores",
    },
  },
  {
    _id: "5fbd2ab3f76829fa95be1366",
    dateTransaction: "19 Apr, 2020",
    detail:
      "Reprehenderit eiusmod mollit proident voluptate fugiat elit amet excepteur labore id eu aliquip mollit.",
    amount: "$19,521.01",
    typeTransaction: {
      _id: "5fbd2891c809e57b226a1fdd",
      name: "Servicios profesionales",
    },
    budget: {
      _id: "5fc124bcc701ba44886d9fc4",
      name: "Presupuesto Proveedores",
    },
  },
  {
    _id: "5fbd2ab38b22401fde6ba37a",
    dateTransaction: "25 Sep, 2019",
    detail: "Incididunt excepteur sint tempor minim minim.",
    amount: "$181,246.45",
    typeTransaction: {
      _id: "5fbd2891c809e57b226a1fdd",
      name: "Servicios profesionales",
    },
    budget: {
      _id: "5fc124bcc701ba44886d9fc4",
      name: "Presupuesto Proveedores",
    },
  },
  {
    _id: "5fbd2ab3565b2bae939899a1",
    dateTransaction: "30 Dec, 2019",
    detail: "Fugiat magna sunt ex fugiat et ipsum excepteur mollit.",
    amount: "$58,334.75",
    typeTransaction: {
      _id: "5fbd2891911a9bd4b54cc1b6",
      name: "Gasolina",
    },
    budget: {
      _id: "5fc124bc1ce0d3fe2c9cafa4",
      name: "Presupuesto Compras",
    },
  },
  {
    _id: "5fbd2ab3b7cd3256713a1577",
    dateTransaction: "25 Aug, 2020",
    detail:
      "Pariatur quis culpa nisi aliqua do proident eu ipsum laboris ea sunt.",
    amount: "$154,310.99",
    typeTransaction: {
      _id: "5fbc09afcb40dea8dc9f70cb",
      name: "Compra de papeleria",
    },
    budget: {
      _id: "5fc124bc1ce0d3fe2c9cafa4",
      name: "Presupuesto Compras",
    },
  },
  {
    _id: "5fbd2ab39753223f351901a2",
    dateTransaction: "14 Oct, 2020",
    detail: "Minim in eu aliquip laboris aliqua laborum.",
    amount: "$49,857.07",
    typeTransaction: {
      _id: "5fbd2891911a9bd4b54cc1b6",
      name: "Gasolina",
    },
    budget: {
      _id: "5fc124bc1ce0d3fe2c9cafa4",
      name: "Presupuesto Compras",
    },
  },
  {
    _id: "5fbd2ab350d48c49d98fad69",
    dateTransaction: "11 Jun, 2020",
    detail:
      "Ullamco nostrud dolore qui adipisicing deserunt id esse aliquip officia.",
    amount: "$109,251.14",
    typeTransaction: {
      _id: "5fbd289158153f37a77c145b",
      name: "Equipo fotográfico",
    },
    budget: {
      _id: "5fc124bc1ce0d3fe2c9cafa4",
      name: "Presupuesto Compras",
    },
  },
  {
    _id: "5fbd2ab37df94525c162b4db",
    dateTransaction: "19 Apr, 2020",
    detail: "Magna voluptate ad fugiat duis incididunt.",
    amount: "$14,362.65",
    typeTransaction: {
      _id: "5fbd28914bb21a4c57e6ecc0",
      name: "Equipo de video",
    },
    budget: {
      _id: "5fc124bc1ce0d3fe2c9cafa4",
      name: "Presupuesto Compras",
    },
  },
  {
    _id: "5fbd2ab3c079a8efb4cd3ee9",
    dateTransaction: "13 Jun, 2020",
    detail:
      "Proident dolor laborum elit tempor anim in incididunt ad aute nisi ex.",
    amount: "$76,471.71",
    typeTransaction: {
      _id: "5fbd289158153f37a77c145b",
      name: "Equipo de computo",
    },
    budget: {
      _id: "5fc124bc1ce0d3fe2c9cafa4",
      name: "Presupuesto Compras",
    },
  },
  {
    _id: "5fbd2ab34023b9444fe5daaf",
    dateTransaction: "12 Jul, 2020",
    detail:
      "Fugiat ea dolore do dolor consequat in minim do pariatur adipisicing irure ipsum excepteur.",
    amount: "$173,813.41",
    typeTransaction: {
      _id: "5fbc09af1a6c0200f4bfbfc0",
      name: "Publicaciones emergentes",
    },
    budget: {
      _id: "5fc124bc40c92aed76ff6880",
      name: "Presupuesto Medios",
    },
  },
  {
    _id: "5fbd2ab30bc468cf6a6b01a2",
    dateTransaction: "20 Mar, 2019",
    detail:
      "Proident fugiat pariatur veniam enim esse nulla nisi sit sit fugiat.",
    amount: "$12,036.59",
    typeTransaction: {
      _id: "5fbd2891c809e57b226a1fdd",
      name: "Viaticos",
    },
    budget: {
      _id: "5fc124bc40c92aed76ff6880",
      name: "Presupuesto Medios",
    },
  },
  {
    _id: "5fbd2ab362c8855f770c12c8",
    dateTransaction: "21 Sep, 2019",
    detail: "Eu mollit consequat laboris tempor ad.",
    amount: "$43,731.97",
    typeTransaction: {
      _id: "5fbd2891911a9bd4b54cc1b6",
      name: "Publicación editorial",
    },
    budget: {
      _id: "5fc124bc40c92aed76ff6880",
      name: "Presupuesto Medios",
    },
  },
  {
    _id: "5fbd2ab3b2df92b343e21a6f",
    dateTransaction: "7 Jul, 2019",
    detail:
      "Dolor ad adipisicing ex officia dolor ut nostrud quis pariatur cillum culpa adipisicing.",
    amount: "$133,195.26",
    typeTransaction: {
      _id: "5fbc09afcb40dea8dc9f70cb",
      name: "Despensas",
    },
    budget: {
      _id: "5fc124bc9a4a049b6654db70",
      name: "Presupuesto Apoyos",
    },
  },
  {
    _id: "5fbd2ab338423799f449acb0",
    dateTransaction: "26 Sep, 2020",
    detail: "Deserunt dolor sunt elit qui est.",
    amount: "$23,663.55",
    typeTransaction: {
      _id: "5fbd289158153f37a77c145b",
      name: "Viaticos",
    },
    budget: {
      _id: "5fc124bc9a4a049b6654db70",
      name: "Presupuesto Apoyos",
    },
  },
  {
    _id: "5fbd2ab355b367d71d93c183",
    dateTransaction: "16 Mar, 2019",
    detail:
      "Laborum commodo adipisicing reprehenderit deserunt sint sint excepteur esse laboris.",
    amount: "$181,773.76",
    typeTransaction: {
      _id: "5fbd2891ff384f8b8cbf92ce",
      name: "Nota periodico",
    },
    budget: {
      _id: "5fc124bc9a4a049b6654db70",
      name: "Presupuesto Apoyos",
    },
  },
  {
    _id: "5fbd2ab355b367d71d93c181",
    dateTransaction: "16 Mar, 2019",
    detail:
      "Laborum commodo adipisicing reprehenderit deserunt sint sint excepteur esse laboris.",
    amount: "$181,773.76",
    typeTransaction: {
      _id: "5fbd2891ff384f8b8cbf92ce",
      name: "Nota periodico",
    },
    budget: {
      _id: "5fc124bc3a777006c93d1fab",
      name: "Presupuesto Medios",
    },
  },
  {
    _id: "5fbd2ab355b367d71d93c178",
    dateTransaction: "16 Mar, 2019",
    detail:
      "Laborum commodo adipisicing reprehenderit deserunt sint sint excepteur esse laboris.",
    amount: "$181,773.76",
    typeTransaction: {
      _id: "5fbd2891ff384f8b8cbf92ce",
      name: "Publicación Medios",
    },
    budget: {
      _id: "5fc124bc3a777006c93d1fab",
      name: "Presupuesto Medios",
    },
  },
  {
    _id: "5fbd2ab355b367d71d93c175",
    dateTransaction: "16 Mar, 2019",
    detail:
      "Laborum commodo adipisicing reprehenderit deserunt sint sint excepteur esse laboris.",
    amount: "$181,773.76",
    typeTransaction: {
      _id: "5fbd2891ff384f8b8cbf92ce",
      name: "Cobertura de Medios",
    },
    budget: {
      _id: "5fc124bc3a777006c93d1fab",
      name: "Presupuesto Medios",
    },
  },
  {
    _id: "5fbd2ab355b367d71d93c170",
    dateTransaction: "16 Mar, 2019",
    detail:
      "Laborum commodo adipisicing reprehenderit deserunt sint sint excepteur esse laboris.",
    amount: "$181,773.76",
    typeTransaction: {
      _id: "5fbd2891ff384f8b8cbf92ce",
      name: "Impresión de anuncios",
    },
    budget: {
      _id: "5fc124bc78c006cbe56f211f",
      name: "Presupuesto Proveedores",
    },
  },
  {
    _id: "5fbd2ab355b367d71d93c172",
    dateTransaction: "16 Mar, 2019",
    detail:
      "Laborum commodo adipisicing reprehenderit deserunt sint sint excepteur esse laboris.",
    amount: "$181,773.76",
    typeTransaction: {
      _id: "5fbd2891ff384f8b8cbf92ce",
      name: "Servicios de diseño",
    },
    budget: {
      _id: "5fc124bc78c006cbe56f211f",
      name: "Presupuesto Proveedores",
    },
  },
  {
    _id: "5fbd2ab355b367d71d93c174",
    dateTransaction: "16 Mar, 2019",
    detail:
      "Laborum commodo adipisicing reprehenderit deserunt sint sint excepteur esse laboris.",
    amount: "$181,773.76",
    typeTransaction: {
      _id: "5fbd2891ff384f8b8cbf92ce",
      name: "Servicios profesionales",
    },
    budget: {
      _id: "5fc124bc78c006cbe56f211f",
      name: "Presupuesto Proveedores",
    },
  },
  {
    _id: "5fbd2ab355b367d71d93c184",
    dateTransaction: "16 Mar, 2019",
    detail:
      "Laborum commodo adipisicing reprehenderit deserunt sint sint excepteur esse laboris.",
    amount: "$181,773.76",
    typeTransaction: {
      _id: "5fbd2891ff384f8b8cbf92ce",
      name: "Compra de mobiliario",
    },
    budget: {
      _id: "5fc124bc8cbc0c96f8b1ed93",
      name: "Presupuesto Emergente",
    },
  },
  {
    _id: "5fbd2ab355b367d71d93c185",
    dateTransaction: "16 Mar, 2019",
    detail:
      "Laborum commodo adipisicing reprehenderit deserunt sint sint excepteur esse laboris.",
    amount: "$181,773.76",
    typeTransaction: {
      _id: "5fbd2891ff384f8b8cbf92ce",
      name: "Compra de equipo fotográfico",
    },
    budget: {
      _id: "5fc124bc8cbc0c96f8b1ed93",
      name: "Presupuesto Emergente",
    },
  },
];

export function getTransactions() {
  return transactions;
}

export function getTransaction(id) {
  return transactions.find((t) => t._id === id);
}

export function saveTransaction(transaction) {
  let transactionInDb =
    transactions.find((t) => t._id === transaction._id) || {};
  transactionInDb.typeTransaction = typeTransactionsAPI.typeTransactions.find(
    (t) => t._id === transaction.typeTransactionId
  );
  transactionInDb.budget = budgetsAPI.budgets.find(
    (b) => b._id === transaction.budgetId
  );
  transactionInDb.amount = transaction.amount;
  transactionInDb.dateTransaction = transaction.dateTransaction;
  transactionInDb.detail = transaction.detail;

  if (!transactionInDb._id) {
    transactionInDb._id = Date.now().toString();
    transactions.push(transactionInDb);
  }

  return transactionInDb;
}

export function deleteTransaction(id) {
  let transactionInDb = transactions.find((t) => t._id === id);
  transactions.splice(transactions.indexOf(transactionInDb), 1);
  return transactionInDb;
}
