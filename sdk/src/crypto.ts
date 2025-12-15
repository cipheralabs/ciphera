export function xorEncrypt(data: Uint8Array, key: number): Uint8Array {
const out = new Uint8Array(data.length);
for (let i = 0; i < data.length; i++) out[i] = data[i] ^ key;
return out;
}