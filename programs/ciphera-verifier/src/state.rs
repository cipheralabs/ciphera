use anchor_lang::prelude::*;


#[account]
pub struct CommitmentState {
pub authority: Pubkey,
pub root: [u8; 32],
pub nonce: u64,
pub last_updated_slot: u64,
}


impl CommitmentState {
pub const SIZE: usize = 8 + 32 + 8 + 8 + 32; // discriminator + fields
}