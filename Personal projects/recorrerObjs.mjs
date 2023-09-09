let entris = []
export function recorrerObjs(obj) {
  const entries = Object.entries(obj);
  entries.forEach((entry) => {
    entris.push(entry)
    console.log(entry)
  });
  console.log("---------------------")
  return entris
}
