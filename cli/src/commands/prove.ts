import { generateProof } from "../../../offchain/prover/mock_prover";


export function proveCommand(traceHex: string, rootHex: string) {
const trace = Buffer.from(traceHex, "hex");
const root = Buffer.from(rootHex, "hex");


const proof = generateProof(root, trace);
console.log(JSON.stringify({
publicInputs: proof.publicInputs.toString("hex"),
commitment: proof.commitment.toString("hex"),
}, null, 2));
}