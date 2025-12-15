use anchor_lang::prelude::*;
use crate::state::CommitmentState;


#[derive(Accounts)]
pub struct CommitState<'info> {
#[account(init_if_needed, payer = authority, space = CommitmentState::SIZE)]
pub state: Account<'info, CommitmentState>,
#[account(mut)]
pub authority: Signer<'info>,
pub system_program: Program<'info, System>,
}


pub fn handler(
ctx: Context<CommitState>,
new_root: [u8; 32],
) -> Result<()> {
let state = &mut ctx.accounts.state;


if state.authority == Pubkey::default() {
state.authority = ctx.accounts.authority.key();
}


state.root = new_root;
state.last_updated_slot = Clock::get()?.slot;


Ok(())
}