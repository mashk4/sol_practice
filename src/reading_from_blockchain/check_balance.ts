import 'dotenv/config';
import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  clusterApiUrl
} from '@solana/web3.js';

const connection = new Connection(clusterApiUrl('devnet'));
console.log('Connection established');

let publicKeyString = process.env['PUBLIC_KEY'];
if (publicKeyString === undefined) {
  console.log('Add PUBLIC_KEY to .env!');
  process.exit(1);
}

const publicKey = new PublicKey(publicKeyString);
const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(`💰 The balance for the wallet at address ${publicKey} is: ${balanceInSOL}`)