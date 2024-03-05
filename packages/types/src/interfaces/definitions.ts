export default {
  types: {
    ShufflingSeed: {
      seed: "H256",
      proof: "H512"
    },
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
  }
}


export { default as pos } from './pos/definitions.js';
export { default as xyk } from './xyk/definitions.js';
export { default as rolldown } from './rolldown/definitions.js';