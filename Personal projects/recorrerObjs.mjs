let entri
export function recorrerObjs(obj) {
  const entries = Object.entries(obj);
  entries.forEach((entry) => {
    entri = entry
    console.log(entry)
    return entry
  });
  console.log("---------------------")
  return entri
}
