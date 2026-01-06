
# Ciphera

Ciphera is a privacy-preserving infrastructure layer for Solana that enables encrypted computation, private state management, and confidential analytics. It allows developers to build applications that process sensitive user data without exposing plaintext, while leveraging zero-knowledge proofs for trustless verification.

---

## Features

- **Client-side encryption** with AES-256-GCM
- **Homomorphic computation** on encrypted data
- **Zero-knowledge proof generation and verification**
- **On-chain state commitments** with privacy guarantees
- **SDK and CLI tools** for easy integration into Solana applications
- **Optimized for Solana compute units** and high-performance execution

---

## Installation

Install the Ciphera SDK via npm:

```bash
npm install @Ciphera/sdk
````

Or using yarn:

```bash
yarn add @Ciphera/sdk
```

---

## Quick Start

```ts
import { Ciphera } from '@Ciphera/sdk';

// Initialize client
const ciphera = new Ciphera({
  network: 'mainnet-beta',
  computeEndpoint: 'https://compute.Ciphera.dev',
});

// Encrypt data
const encrypted = await ciphera.encrypt({
  data: { secret: 'user data' },
  recipient: recipientPublicKey,
  context: 'example-computation',
});

// Perform computation
const result = await ciphera.compute(encrypted, 'aggregate', { operation: 'sum' });

// Verify computation proof
const isValid = await ciphera.verify({
  proof: result.proof,
  commitment: result.commitment,
  programId: 'CipheraVrf1111111111111111111111111',
});

// Decrypt result
const decrypted = await ciphera.decrypt({
  ciphertext: result.encryptedState,
  privateKey: userPrivateKey,
});

console.log(decrypted);
```

---

## CLI Usage

The Ciphera CLI provides commands for project setup, encryption, proof generation, and verification:

```bash
Ciphera init my-private-app      # Initialize a new project
Ciphera encrypt <file>           # Encrypt a file or data
Ciphera prove <input>            # Generate a proof for a computation
Ciphera verify <proof>           # Verify a proof locally
Ciphera commit                   # Commit encrypted state to Solana
Ciphera inspect <tx>             # Inspect a Ciphera transaction
```

---

## Contributing

Contributions are welcome! You can:

* Open an issue for bug reports or feature requests
* Submit a pull request with improvements or new examples
* Join the early access program for testing and feedback

Please follow standard best practices for code style and testing.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact & Resources

* **Website:** [https://ciphera.dev](https://ciphera.dev)
* **Twitter:** [@Cipheratechs](https://x.com/cipheratechs)
* **Email:** [contact@](mailto:help@ciphera.dev)

For the latest updates and examples, visit our website or join the early access program.


