const words = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k"];

const generateRandomWord = (length, arr = words) => {
  return Array.from(
    { length },
    () => arr[Math.floor(Math.random() * arr.length)]
  ).join("");
};

const delay = () => new Promise((resolve) => setTimeout(resolve, 2000));

export default async function handler(req, res) {
  const word = generateRandomWord(10);

  await delay(2000);
  res.json({ word });
}
