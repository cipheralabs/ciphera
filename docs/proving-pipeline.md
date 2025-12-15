# Proving Pipeline

1. **Witness Generation:** Compute node executes encrypted operations
2. **Commitment:** Merkle root of intermediate results
3. **Proof Compression:** Recursive SNARK to reduce size
4. **Serialization:** Convert to Solana instruction format
5. **Submission:** Send to on-chain verifier
6. **Validation:** Solana program validates proof