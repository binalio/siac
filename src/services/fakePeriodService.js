export const periods = [
  {
    _id: "5fc1232b7d132ce89d20441e",
    name: "2019",
  },
  {
    _id: "5fc1232b4278265f6aebfd26",
    name: "2020",
  },
  {
    _id: "5fc1232b536bd1884da4e430",
    name: "2021",
  },
];

export function getPeriods() {
  return periods.filter((p) => p);
}
