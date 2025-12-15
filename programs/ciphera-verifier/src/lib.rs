use anchor_lang::prelude::*;


pub mod instructions;
pub mod state;
pub mod errors;


use instructions::*;


declare_id!("C1pherAVerifier111111111111111111111111");


#[program]
pub mod ciphera_verifier {
use super::*;


pub fn verify_proof(
ctx: Context<VerifyProof>,
public_inputs: [u8; 32],
commitment: [u8; 32],
) -> Result<()> {
verify_proof::handler(ctx, public_inputs, commitment)
}


pub fn commit_state(
ctx: Context<CommitState>,
new_root: [u8; 32],
) -> Result<()> {
commit_state::handler(ctx, new_root)
}
}