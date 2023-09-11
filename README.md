# Demo showing failure of attempting to deploy contract with external lib with viem.

This repo shows how a failure in deploying a contract with an external lib using viem.

External lib means the lib has a method marked external, and needs to be deployed separately, and
have its library addresses linked to the consuming contract.


To demo failure:

* `yarn wagmi` to build the contracts and generate the abi and hooks
* `yarn test` to run the test in `./src/counter.test.ts`