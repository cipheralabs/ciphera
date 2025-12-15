import { createHash, randomBytes } from "crypto";


export type ProofArtifact = {
publicInputs: Buffer;
commitment: Buffer;
};


export function generateProof(root: Buffer, trace: Buffer): ProofArtifact {
const publicInputs = trace.subarray(0, 32);


const commitment = createHash("sha256")
.update(Buffer.concat([root, publicInputs]))
.digest();


return { publicInputs, commitment };
}