import { xorEncrypt } from "./crypto";
import { Ciphertext, Proof } from "./types";
import { executeEncryptedOp } from "../../offchain/compute-node/execution_trace";
import { generateProof } from "../../offchain/prover/mock_prover";


export class CipheraClient {
private root: Uint8Array;


constructor(root: Uint8Array) {
this.root = root;
}


encrypt(data: Uint8Array): Ciphertext {
return xorEncrypt(data, 42);
}


compute(op: string, input: Ciphertext): { output: Ciphertext; proof: Proof } {
const trace = executeEncryptedOp(op, input);
const { publicInputs, commitment } = generateProof(Buffer.from(this.root), Buffer.from(trace));


return {
output: trace,
proof: { publicInputs, commitment },
};
}
}
