import { CipheraClient } from "../../../sdk/src/client";


export function encryptCommand(input: string) {
const client = new CipheraClient(new Uint8Array(32));
const data = new TextEncoder().encode(input);
const out = client.encrypt(data);
console.log(Buffer.from(out).toString("hex"));
}