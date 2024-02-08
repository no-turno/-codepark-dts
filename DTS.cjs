const MAIN = (label = "") => async (path = "", id) => {
  const outfile = Bun.file(path).json();
  return await outfile.then(async data => {
    const filePath = "typings/" + label + "/index.d.ts";
    const LABEL = label.toUpperCase() + "_" + id.toUpperCase();
    const MODEL_REFERENCE = Bun.inspect(data)
    const TYPE_TEMPLATE = /* ts */`export type ${LABEL} = ${MODEL_REFERENCE}`
    return Bun.write(filePath, TYPE_TEMPLATE).then(() => Bun.file(filePath)).catch(console.error)
  });
}

const DTS = (label = "") => MAIN(label);


module.exports = DTS;