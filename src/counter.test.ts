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

it("it can deploy the counter contract WITHOUT external libs", async () => {
  const hash = await walletClient.deployContract({
    abi: counterABI,
    account: deployerAccount,
    bytecode: counterJson.bytecode.object as `0x${string}`
  });

  const receipt = await publicClient.waitForTransactionReceipt({ hash });

  expect(receipt.status).toBe('success');
});

it("it can deploy the counter contract WITH external libs", async () => {
  const hash = await walletClient.deployContract({
    abi: counterUsingLibABI,
    account: deployerAccount,
    bytecode: counterUsingLibJson.bytecode.object as `0x${string}`
  });

  const receipt = await publicClient.waitForTransactionReceipt({ hash });

  expect(receipt.status).toBe('success');
});