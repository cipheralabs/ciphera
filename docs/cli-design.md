# CLI Design

Ciphera CLI tools support project lifecycle:
- **init:** Initialize project
- **encrypt <file>:** Encrypt data
- **prove <input>:** Generate proofs
- **verify <proof>:** Verify locally
- **commmit:** Commit encrypted state on Solana
- **inspect <tx>:** Debug transactions

### Configuration
- YAML-based (`Ciphera.config.yaml`)
- Parameters: network, compute endpoint, program ID, encryption settings, proving system

### Prover CLI
- Generates ZK proofs
- Supports recursive compression

### Verifier CLI
- Local verification before on-chain submission
