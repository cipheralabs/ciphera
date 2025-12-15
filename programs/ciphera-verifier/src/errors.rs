use anchor_lang::prelude::*;


#[error_code]
pub enum CipheraError {
#[msg("Invalid commitment supplied")]
InvalidCommitment,


#[msg("Unauthorized authority")]
Unauthorized,
}