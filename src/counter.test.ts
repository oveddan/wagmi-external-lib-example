import {
  createTestClient,
  http,
  createWalletClient,
  createPublicClient,
  Address,
} from "viem";
import { foundry } from "viem/chains";
import { it, expect } from "vitest";
import { counterABI, counterUsingLibABI } from "./generated";
import counterJson from '../contracts/out/Counter.sol/Counter.json';
import counterUsingLibJson from '../contracts/out/CounterUsingLib.sol/CounterUsingLib.json';

const walletClient = createWalletClient({
  chain: foundry,
  transport: http(),
});

export const walletClientWithAccount = createWalletClient({
  chain: foundry,
  transport: http(),
});

const [
  deployerAccount,
] = (await walletClient.getAddresses()) as [Address];

const publicClient = createPublicClient({
  chain: foundry,
  transport: http(),
});
