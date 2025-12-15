# Encryption Model

Ciphera uses hybrid cryptography for performance and security.

## Encryption Flow
1. Generate ephemeral AES-256 key
2. Encrypt payload with AES-256-GCM
3. Wrap AES key with recipient's public key (X25519)
4. Pack ciphertext + wrapped key + nonce
5. Compute commitment hash for on-chain reference

## Algorithms
| Component           | Algorithm     | Key Size |
|--------------------|--------------|---------|
| Symmetric Encryption| AES-256-GCM  | 256 bits|
| Key Encapsulation   | X25519       | 256 bits|
| Commitment          | SHA-256      | 256 bits|
