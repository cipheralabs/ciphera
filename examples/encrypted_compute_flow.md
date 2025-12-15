
# Encrypted Compute Flow Example

This example demonstrates how to perform computations on encrypted data using Ciphera while maintaining privacy.

## 1. Initialization
Set up the Ciphera client and connect to the compute endpoint.

```ts
import { Ciphera } from '@Ciphera/sdk';

const ciphera = new Ciphera({
  network: 'mainnet-beta',
  computeEndpoint: 'https://compute.Ciphera.dev',
});
````

## 2. Encrypt Input Data

Data is encrypted on the client before sending it for computation. Each computation uses ephemeral encryption keys.

```ts
const inputData = { value: 42 };
const encryptedInput = await ciphera.encrypt({
  data: inputData,
  recipient: recipientPublicKey,
  context: 'encrypted-compute-example',
});
```

## 3. Submit Encrypted Data to Compute Node

Send the encrypted data to the compute node for processing. Homomorphic operations allow computations without decrypting the data.

```ts
const computeResult = await ciphera.compute(encryptedInput, 'computeOperation', {
  params: { multiplier: 2 },
});
```

## 4. Generate Zero-Knowledge Proof

The compute node generates a proof that the computation was performed correctly on the encrypted data.

```ts
const proof = computeResult.proof;
```

## 5. On-chain Verification

Submit the proof to the Solana verifier program to validate correctness. The encrypted state remains confidential.

```ts
const isValid = await ciphera.verify({
  proof,
  commitment: computeResult.commitment,
  programId: 'CipheraVrf1111111111111111111111111',
});
```

## 6. Retrieve Computed Encrypted Result

If verification succeeds, the encrypted result can be accessed and optionally decrypted by authorized parties.

```ts
if (isValid) {
  const encryptedOutput = computeResult.encryptedState;
  console.log('Encrypted computation verified and available.');
}
```

## 7. Decrypt Result

Only parties with the correct decryption keys can obtain the plaintext result.

```ts
const decryptedOutput = await ciphera.decrypt({
  ciphertext: computeResult.encryptedState,
  privateKey: userPrivateKey,
});
console.log('Decrypted computation result:', decryptedOutput);
```

