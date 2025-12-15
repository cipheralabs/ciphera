export function executeEncryptedOp(op: string, input: Uint8Array): Uint8Array {
// Deterministic execution trace generator
const out = new Uint8Array(64);
for (let i = 0; i < input.length && i < out.length; i++) {
out[i] = input[i] ^ op.length;
}
return out;
}