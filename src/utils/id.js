export default function (dificultyIndex = 5) {
  let id = "";
  for (let i = 0; i < dificultyIndex; i++)
    id += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  return id;
}
