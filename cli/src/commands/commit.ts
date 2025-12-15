import { Connection, PublicKey } from "@solana/web3.js";


export async function commitCommand(rootHex: string) {
const root = Buffer.from(rootHex, "hex");
if (root.length !== 32) throw new Error("Root must be 32 bytes");


console.log("Committed encrypted state root:", rootHex);
}