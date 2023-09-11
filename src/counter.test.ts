import {
  createTestClient,
  http,
  createWalletClient,
  createPublicClient,
  parseEther,
  Address,
} from "viem";
import { foundry } from "viem/chains";
import { describe, it, beforeEach, expect } from "vitest";
import { counterABI } from "./generated";
import counterJson from '../contracts/out/Counter.sol/Counter.json';

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

const testClient = createTestClient({
  chain: foundry,
  mode: "anvil",
  transport: http(),
});

const publicClient = createPublicClient({
  chain: foundry,
  transport: http(),
});

describe("it can deploy the counter contract with external libs", async () => {

  const hash = await walletClient.deployContract({
    abi: counterABI,
    account: deployerAccount,
    bytecode: counterJson.bytecode.object as `0x${string}`
  });

  const receipt = await publicClient.waitForTransactionReceipt({ hash });

  expect(receipt.status).toBe('success');

});