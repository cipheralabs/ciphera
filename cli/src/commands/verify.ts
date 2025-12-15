import { createHash } from "crypto";


export function verifyCommand(rootHex: string, publicInputsHex: string, commitmentHex: string) {
const root = Buffer.from(rootHex, "hex");
const publicInputs = Buffer.from(publicInputsHex, "hex");


const computed = createHash("sha256")
.update(Buffer.concat([root, publicInputs]))
.digest("hex");


if (computed === commitmentHex) console.log("Proof verified successfully");
else console.error("Invalid proof");
}