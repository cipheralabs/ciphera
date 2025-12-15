import { writeFileSync } from "fs";


export function initCommand() {
const config = {
network: "localnet",
verifierProgram: "C1pherAVerifier111111111111111111111111",
defaultKeypair: "~/.config/solana/id.json",
};


writeFileSync("ciphera.config.json", JSON.stringify(config, null, 2));
console.log("Ciphera project initialized");
}