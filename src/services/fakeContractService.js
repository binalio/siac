import * as budgetsAPI from "./fakeBudgetService";
import * as suppliersAPI from "./fakeSupplierService";
import * as periodsAPI from "./fakePeriodService";

const contracts = [
  {
    _id: "5fcfc1a153afd0d31c9ea2fc",
    startDate: "27 Jun, 2019",
    endDate: "16 May, 2019",
    detail: "Do nisi nostrud ea sunt est nisi tempor elit dolore dolore non.",
    amount: 94048.23,
    balance: 78739.09,
    supplier: {
      _id: "5fce68ac1b0d82417e78d1e2",
      name: "Diario de Queretaro",
    },
    budget: {
      _id: "5fc124bc9ea28d727ad06564",
      name: "Presupuesto Proveedores",
      period: {
        _id: "5fc1232b536bd1884da4e430",
        name: "2021",
      },
    },
  },
  {
    _id: "5fcfc1a1a617517ffe1b2ba1",
    startDate: "30 Oct, 2020",
    endDate: "10 Sep, 2020",
    detail:
      "Voluptate aute aliqua labore irure proident amet mollit reprehenderit aute nisi qui esse.",
    amount: 100117.19,
    balance: 130464.8,
    supplier: {
      _id: "5fce68ac1b0d82417e78d1e2",
      name: "Diario de Queretaro",
    },
    budget: {
      _id: "5fc124bc78c006cbe56f211f",
      name: "Presupuesto Proveedores",
      period: {
        _id: "5fc1232b4278265f6aebfd26",
        name: "2020",
      },
    },
  },
  {
    _id: "5fcfc1a1133ab9582587bcf9",
    startDate: "16 May, 2019",
    endDate: "12 Nov, 2020",
    detail: "Minim anim magna culpa et.",
    amount: 140834.37,
    balance: 182115.86,
    supplier: {
      _id: "5fce68ac1b0d82417e78d1e2",
      name: "Diario de Queretaro",
    },
    budget: {
      _id: "5fc124bc1ce0d3fe2c9cafa4",
      name: "Presupuesto Compras",
      period: {
        _id: "5fc1232b7d132ce89d20441e",
        name: "2019",
      },
    },
  },
  {
    _id: "5fcfc1a19fede3a984c6fddd",
    startDate: "12 May, 2020",
    endDate: "19 Jul, 2020",
    detail:
      "Ullamco aliqua Lorem consequat pariatur dolore sint labore fugiat ex.",
    amount: 129016.28,
    balance: 106653.58,
    supplier: {
      _id: "5fce68acb9ad412eff26971c",
      name: "Televisa",
    },
    budget: {
      _id: "5fc124bc6123ae881a66dd2f",
      name: "Presupuesto Compras",
      period: {
        _id: "5fc1232b4278265f6aebfd26",
        name: "2020",
      },
    },
  },
  {
    _id: "5fcfc1a152a17119e84cde66",
    startDate: "16 Jan, 2019",
    endDate: "25 Feb, 2020",
    detail: "Mollit officia pariatur dolore minim nisi.",
    amount: 106088.61,
    balance: 6985.71,
    supplier: {
      _id: "5fce68acb9ad412eff26971c",
      name: "Televisa",
    },
    budget: {
      _id: "5fc124bc262e7fbc84de6e17",
      name: "Presupuesto Compras",
      period: {
        _id: "5fc1232b536bd1884da4e430",
        name: "2021",
      },
    },
  },
  {
    _id: "5fcfc1a1c6a659e212690cfd",
    startDate: "29 Nov, 2019",
    endDate: "14 Mar, 2019",
    detail: "Laborum fugiat cillum amet duis.",
    amount: 69517.99,
    balance: 185255.34,
    supplier: {
      _id: "5fce68acb9ad412eff26971c",
      name: "Televisa",
    },
    budget: {
      _id: "5fc124bc9ea28d727ad06564",
      name: "Presupuesto Proveedores",
      period: {
        _id: "5fc1232b7d132ce89d20441e",
        name: "2019",
      },
    },
  },
  {
    _id: "5fcfc1a13110177b10a35dc9",
    startDate: "15 Apr, 2020",
    endDate: "17 May, 2019",
    detail: "Et velit ullamco cillum excepteur est labore.",
    amount: 61689.67,
    balance: 16202.24,
    supplier: {
      _id: "5fce68ac42025c10644a2ea5",
      name: "AM Queretaro",
    },
    budget: {
      _id: "5fc124bc8cbc0c96f8b1ed93",
      name: "Presupuesto Emergente",
      period: {
        _id: "5fc1232b4278265f6aebfd26",
        name: "2020",
      },
    },
  },
  {
    _id: "5fcfc1a1a04e4bc493138afc",
    startDate: "16 Mar, 2019",
    endDate: "28 Oct, 2019",
    detail: "Enim elit fugiat labore dolore et cupidatat exercitation.",
    amount: 89381.34,
    balance: 21739.25,
    supplier: {
      _id: "5fce68ac42025c10644a2ea5",
      name: "AM Queretaro",
    },
    budget: {
      _id: "5fbc09afb97d1f29c74629de",
      name: "Presupuesto Medios",
      period: {
        _id: "5fc1232b7d132ce89d20441e",
        name: "2019",
      },
    },
  },
  {
    _id: "5fcfc1a146bb6bfb537279b0",
    startDate: "2 Nov, 2020",
    endDate: "31 Jul, 2020",
    detail:
      "Proident reprehenderit Lorem ut aliquip ipsum laborum ipsum qui incididunt occaecat nostrud incididunt aliqua.",
    amount: 10421.45,
    balance: 159236.51,
    supplier: {
      _id: "5fce68ac42025c10644a2ea5",
      name: "AM Queretaro",
    },
    budget: {
      _id: "5fbc09afb97d1f29c74629de",
      name: "Presupuesto Emergente",
      period: {
        _id: "5fc1232b536bd1884da4e430",
        name: "2021",
      },
    },
  },
  {
    _id: "5fcfc1a1315e40d0af922f3b",
    startDate: "1 May, 2019",
    endDate: "28 Nov, 2020",
    detail:
      "Magna nisi deserunt proident nostrud fugiat pariatur officia sit culpa incididunt proident consectetur.",
    amount: 186114.39,
    balance: 41103.47,
    supplier: {
      _id: "5fce68acc66068fb61bceec2",
      name: "Revista Qro",
    },
    budget: {
      _id: "5fbc09af1a6c0200f4bfbfc0",
      name: "Presupuesto Medios",
      period: {
        _id: "5fc1232b4278265f6aebfd26",
        name: "2020",
      },
    },
  },
  {
    _id: "5fcfc1a1cf0b4c7377e43b5b",
    startDate: "12 Oct, 2019",
    endDate: "15 Nov, 2019",
    detail:
      "Ex laboris commodo tempor enim aliquip consectetur dolore exercitation labore aute Lorem ut dolore.",
    amount: 138207.44,
    balance: 193648.48,
    supplier: {
      _id: "5fce68acc66068fb61bceec2",
      name: "Revista Qro",
    },
    budget: {
      _id: "5fbc09afe698e18f90fe784e",
      name: "Presupuesto Emergente",
      period: {
        _id: "5fc1232b7d132ce89d20441e",
        name: "2019",
      },
    },
  },
  {
    _id: "5fcfc1a1634e631e5a9c30f6",
    startDate: "15 Nov, 2020",
    endDate: "28 Nov, 2019",
    detail: "Dolore pariatur nostrud nulla ullamco excepteur dolor.",
    amount: 3495.92,
    balance: 10513.83,
    supplier: {
      _id: "5fce68ac0eeebcf6410e10de",
      name: "Radio Formula",
    },
    budget: {
      _id: "5fbc09afcb40dea8dc9f70cb",
      name: "Presupuesto Apoyos",
      period: {
        _id: "5fc1232b4278265f6aebfd26",
        name: "2020",
      },
    },
  },
  {
    _id: "5fcfc1a14195546c11da2d13",
    startDate: "28 Jun, 2019",
    endDate: "18 Jun, 2020",
    detail: "Anim esse eiusmod mollit veniam enim.",
    amount: 185411.96,
    balance: 154701.05,
    supplier: {
      _id: "5fce68ac0eeebcf6410e10de",
      name: "Radio Formula",
    },
    budget: {
      _id: "5fbc09afb97d1f29c74629de",
      name: "Presupuesto Apoyos",
      period: {
        _id: "5fc1232b7d132ce89d20441e",
        name: "2019",
      },
    },
  },
  {
    _id: "5fcfc1a17a086513b71bd5c7",
    startDate: "9 Jun, 2019",
    endDate: "27 Aug, 2019",
    detail:
      "Proident velit sit exercitation laborum velit exercitation ullamco do nostrud.",
    amount: 44891.56,
    balance: 84197.13,
    supplier: {
      _id: "5fce68ac0eeebcf6410e10de",
      name: "Radio Formula",
    },
    budget: {
      _id: "5fbc09afcb40dea8dc9f70cb",
      name: "Presupuesto Otro",
      period: {
        _id: "5fc1232b536bd1884da4e430",
        name: "2021",
      },
    },
  },
  {
    _id: "5fcfc1a1fda9e772620b8d35",
    startDate: "15 Feb, 2020",
    endDate: "21 Mar, 2020",
    detail:
      "Minim occaecat culpa est eiusmod enim duis elit cupidatat amet adipisicing deserunt.",
    amount: 55345.52,
    balance: 155504.45,
    supplier: {
      _id: "5fce68ac720f40476fab6105",
      name: "91 DAT",
    },
    budget: {
      _id: "5fbc09af4adca41d6bd63c7c",
      name: "Presupuesto Otro",
      period: {
        _id: "5fc1232b536bd1884da4e430",
        name: "2021",
      },
    },
  },
  {
    _id: "5fcfc1a15179fab6fa4d060b",
    startDate: "5 Aug, 2019",
    endDate: "17 Nov, 2020",
    detail:
      "Sunt aliquip dolore nisi eiusmod adipisicing nulla do incididunt laborum id eiusmod.",
    amount: 185858.29,
    balance: 22420.14,
    supplier: {
      _id: "5fce68ac720f40476fab6105",
      name: "91 DAT",
    },
    budget: {
      _id: "5fbc09afb97d1f29c74629de",
      name: "Presupuesto Apoyos",
      period: {
        _id: "5fc1232b536bd1884da4e430",
        name: "2021",
      },
    },
  },
  {
    _id: "5fcfc1a195f15ab195fbca76",
    startDate: "8 Dec, 2019",
    endDate: "14 Jul, 2019",
    detail: "Ad cupidatat culpa irure quis ipsum aliquip duis occaecat.",
    amount: 62116.75,
    balance: 14367.55,
    supplier: {
      _id: "5fce68ac720f40476fab6105",
      name: "91 DAT",
    },
    budget: {
      _id: "5fbc09af1a6c0200f4bfbfc0",
      name: "Presupuesto Otro",
      period: {
        _id: "5fc1232b7d132ce89d20441e",
        name: "2019",
      },
    },
  },
];

export function getContracts() {
  return contracts;
}

export function getContract(id) {
  return contracts.find((c) => c._id === id);
}

export function saveContract(contract) {
  let contractInDb = contracts.find((c) => c._id === contract._id) || {};
  contractInDb.supplier = suppliersAPI.suppliers.find(
    (s) => s._id === contract.supplierId
  );
  contractInDb.supplier = (({ _id, name }) => ({ _id, name }))(
    contractInDb.supplier
  );

  contractInDb.budget = budgetsAPI.budgets.find(
    (b) => b._id === contract.budgetId
  );
  contractInDb.budget = (({ _id, name }) => ({ _id, name }))(
    contractInDb.budget
  );

  contractInDb.budget.period = periodsAPI.periods.find(
    (p) => p._id === contract.periodId
  );
  contractInDb.budget.period = (({ _id, name }) => ({ _id, name }))(
    contractInDb.budget.period
  );

  contractInDb.startDate = contract.startDate;
  contractInDb.endDate = contract.endDate;
  contractInDb.amount = contract.amount;
  contractInDb.balance = contract.balance;
  contractInDb.detail = contract.detail;

  console.log(contractInDb);

  if (!contractInDb._id) {
    contractInDb._id = Date.now().toString();
    contracts.push(contractInDb);
  }
  console.log(contracts);
  return contractInDb;
}

export function deleteContract(id) {
  let contractInDb = contracts.find((c) => c._id === id);
  contracts.splice(contracts.indexOf(contractInDb), 1);
  return contractInDb;
}
