# SDK Design

## Overview
Ciphera SDK simplifies building privacy-preserving applications:
- Encrypt data
- Submit encrypted computations
- Generate and verify proofs

## Client API
- `encrypt(data, recipient, context)`
- `decrypt(ciphertext, privateKey)`
- `compute(ciphertext, operation, params)`
- `verify(proof, commitment, programId)`

## Proof Builder
- Handles witness generation
- Recursive SNARK compression
- Outputs Solana-ready proofs

## Vault Encryption
- Manages per-user keys
- Provides secure storage for encrypted data
