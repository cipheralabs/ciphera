
# Private State Lifecycle Example

This example demonstrates how Ciphera manages private state across its lifecycle.

## 1. Initialization
A new private application is initialized, and configuration parameters for encryption and proving are set.

```ts
// Initialize Ciphera client
import { Ciphera } from '@Ciphera/sdk';

const ciphera = new Ciphera({
  network: 'mainnet-beta',
  computeEndpoint: 'https://compute.Ciphera.dev',
});
````

## 2. Client-side Encryption

User data is encrypted on the client using AES-256-GCM. Ephemeral keys are used for each operation, and commitments are generated for on-chain reference.

```ts
const plaintextData = { secret: 'user data' };
const encryptedData = await ciphera.encrypt({
  data: plaintextData,
  recipient: recipientPublicKey,
  context: 'private-state-example',
});
```

## 3. Off-chain Computation

Encrypted data is sent to a compute node. Homomorphic operations are performed on ciphertext, generating an execution trace as a witness.

```ts
const result = await ciphera.compute(encryptedData, 'updateState', {
  params: { increment: 1 },
});
```

## 4. Proof Generation

The compute node generates a zero-knowledge proof using the witness. Proof is compressed and serialized for on-chain submission.

```ts
const proof = result.proof;
```

## 5. On-chain Verification

The proof is submitted to the Solana verifier program. Commitment hashes are checked against the encrypted state. Invalid proofs are rejected automatically.

```ts
const isValid = await ciphera.verify({
  proof,
  commitment: result.commitment,
  programId: 'CipheraVrf1111111111111111111111111',
});
```

## 6. State Update

Authorized parties can update or extend encrypted state. Updates require a valid proof for verification. The new state is committed on-chain with updated commitments.

```ts
if (isValid) {
  console.log('State update verified and committed on-chain.');
}
```

## 7. Decryption and Access

Only parties with the correct decryption keys can access plaintext. State remains encrypted at all other stages, ensuring confidentiality.

```ts
const decryptedResult = await ciphera.decrypt({
  ciphertext: result.encryptedState,
  privateKey: userPrivateKey,
});
console.log(decryptedResult);
```

