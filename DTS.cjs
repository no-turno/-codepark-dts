const DTS = (label = "") => async (path = "", id) => await Bun.file(path).json().then(data => {
  return Bun.write("typings/" + label + "/" + id + ".d.ts", `
export type ${label.toUpperCase() + "_" + id.toUpperCase()} = ${Bun.inspect(data)}
  `).then(_ => {
    return Bun.file("typings/" + label + "/index.d.ts")
  })
});

// const cliGenerator = schema("cli");

// cliGenerator("cli/cli.schema.json", "cli").catch(console.error)

// cliGenerator("cli/env.schema.json", "env").catch(console.error)

// cliGenerator("cli/shell.schema.json", "shell").catch(console.error)

module.exports = DTS;