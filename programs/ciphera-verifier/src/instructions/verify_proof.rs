use anchor_lang::prelude::*;
use crate::state::CommitmentState;
use crate::errors::CipheraError;


#[derive(Accounts)]
pub struct VerifyProof<'info> {
#[account(mut)]
pub state: Account<'info, CommitmentState>,
pub authority: Signer<'info>,
}


pub fn handler(
ctx: Context<VerifyProof>,
public_inputs: [u8; 32],
commitment: [u8; 32],
) -> Result<()> {
let state = &mut ctx.accounts.state;


if ctx.accounts.authority.key() != state.authority {
return Err(CipheraError::Unauthorized.into());
}


// Deterministic gate: enforce commitment consistency
// commitment == hash(root || public_inputs)
use anchor_lang::solana_program::hash::hashv;


let computed = hashv(&[&state.root, &public_inputs]);
if computed.to_bytes() != commitment {
return Err(CipheraError::InvalidCommitment.into());
}


state.nonce = state.nonce.saturating_add(1);
state.last_updated_slot = Clock::get()?.slot;


Ok(())
}
