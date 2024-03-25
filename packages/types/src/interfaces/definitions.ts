export default {
  types: {
    ShufflingSeed: {
      seed: "H256",
      proof: "H512"
    },
    EthereumSignature: "EcdsaSignature",
    Header: {
      parentHash: "Hash",
      number: "Compact<BlockNumber>",
      stateRoot: "Hash",
      extrinsicsRoot: "Hash",
      digest: "Digest",
      seed: "ShufflingSeed",
      count: "BlockNumber"
    },
    RpcAssetMetadata: {
      tokenId: "TokenId",
      decimals: "u32",
      name: "Vec<u8>",
      symbol: "Vec<u8>"
    },
    TokenId: "u32",
    L1Update: {
      pendingDeposits: "Vec<Deposit>",
      pendingCancelResultions: "Vec<CancelResolution>",
      pendingWithdrawalResolutions: "Vec<WithdrawalResolution>",
      pendingL2UpdatesToRemove: "Vec<L2UpdatesToRemove>",
    },
    Deposit: {
      requestId: "RequestId",
      depositRecipient: "[u8; 20]",
      tokenAddress: "[u8; 20]",
      amount: "U256",
      blockHash: "H256"
    },
    RequestId: {
      origin: "Origin",
      id: "u128"
    },
    Origin: {
      _enum: ['L1', 'L2']
    },
    CancelResolution: {
      requestId: "RequestId",
      l2RequestId: "u128",
      cancelJustified: "bool",
      blockHash: "H256"
    },
    WithdrawalResolution: {
      requestId: "RequestId",
      l2RequestId: "u128",
      status: "bool",
      blockHash: "H256"
    },
    L2UpdatesToRemove: {
      requestId: "RequestId",
      l2UpdatesToRemove: "Vec<u128>",
      blockHash: "H256"
    }
  }
}


export { default as pos } from './pos/definitions.js';
export { default as xyk } from './xyk/definitions.js';
export { default as rolldown } from './rolldown/definitions.js';
export { default as metamask } from './metamask/definitions.js';