
const ProcessToKill = await prompt("write the process you want to terminate: ")

const process = Deno.run({
  cmd: ["taskkill", "/f", "/IM", `${ProcessToKill}.exe`],
});


(await process.status());