import { encryptCommand } from "./commands/encrypt";


const [, , cmd, arg] = process.argv;


if (cmd === "encrypt") encryptCommand(arg);
else console.log("Unknown command");