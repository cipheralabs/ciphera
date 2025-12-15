# Solana Verifier

## Program Overview
On-chain component for:
- Proof verification
- Encrypted state management
- Minimal compute unit consumption

## Account Structure
- **StateAccount:** Encrypted state commitments
- **VerifierAccount:** Stores verification keys
- **VaultAccount:** User-specific encrypted data

## Instruction Set
| Instruction         | CU Cost | Description                        |
|--------------------|---------|------------------------------------|
| verify_proof        | ~8,000  | Verify ZK computation proof        |
| commit_state        | ~2,500  | Commit encrypted state             |
| update_state        | ~3,000  | Update state with proof            |
| validate_compute    | ~5,000  | Validate computation matches commitment |
