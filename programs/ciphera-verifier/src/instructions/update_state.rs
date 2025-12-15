use anchor_lang::prelude::*;
use crate::state::CommitmentState;
use crate::errors::CipheraError;


#[derive(Accounts)]
pub struct UpdateState<'info> {
#[account(mut)]
pub state: Account<'info, CommitmentState>,
pub authority: Signer<'info>,
}


pub fn handler(
ctx: Context<UpdateState>,
updated_root: [u8; 32],
) -> Result<()> {
let state = &mut ctx.accounts.state;


if ctx.accounts.authority.key() != state.authority {
return Err(CipheraError::Unauthorized.into());
}


state.root = updated_root;
state.nonce = state.nonce.saturating_add(1);
state.last_updated_slot = Clock::get()?.slot;


Ok(())
}