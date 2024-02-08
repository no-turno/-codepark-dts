import DTS from "./DTS.cjs";

const dts = DTS("cli");

dts("cli/cli.schema.json", "cli").catch(console.error)

dts("cli/env.schema.json", "env").catch(console.error)

dts("cli/shell.schema.json", "shell").catch(console.error)

const codepark = DTS("codepark");

codepark("codepark/cli.schema.json", "cli").catch(console.error)

codepark("codepark/workspace.schema.json", "workspace").catch(console.error)

codepark("codepark/env.schema.json", "env").catch(console.error)