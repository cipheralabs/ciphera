# Architecture

## Overview
Ciphera ensures data remains encrypted throughout its lifecycle. The high-level flow:
1. Client encrypts data locally
2. Ciphertext sent to compute node
3. Homomorphic operations performed
4. Proof generated
5. Solana verifier validates proof
6. Authorized party decrypts result

## Proving System
- **Witness Generation:** Execution trace on compute node
- **Commitment:** Merkle root of intermediate values
- **Proof Compression:** Recursive SNARKs reduce size
- **Serialization:** Formatted for Solana instructions

## Compression Pipeline
- Enables proofs to fit within Solana compute limits
- Optimized recursive circuits for efficiency

## On-Chain Verifier
- Minimal compute unit usage
- Validates zero-knowledge proofs

## Security Model
- **Confidentiality:** Data encrypted at rest and in transit
- **Integrity:** Cryptographic proofs guarantee correctness
- **Availability:** Decentralized compute network
- **Non-repudiation:** On-chain proof record
