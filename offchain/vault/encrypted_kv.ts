import { createHash } from "crypto";


export class EncryptedKV {
private store = new Map<string, Buffer>();


put(key: string, value: Buffer) {
const k = this.hash(key);
this.store.set(k, value);
}


get(key: string): Buffer | undefined {
return this.store.get(this.hash(key));
}


private hash(input: string): string {
return createHash("sha256").update(input).digest("hex");
}
}