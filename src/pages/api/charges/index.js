import CHARGES from "./charges.json";

const delay = () => new Promise((resolve) => setTimeout(resolve, 2000));

export default async function handler(req, res) {
  const { search } = req.query;

  if (!search) {
    await delay();
    res.status(200).json(CHARGES);
    return;
  }

  const filteredCharges = CHARGES.filter((charge) => {
    return charge.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
  });

  await delay();
  res.status(200).json(filteredCharges);
}
