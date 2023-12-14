// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Compact, Enum, Struct, u32 } from '@polkadot/types-codec';
import type { EcdsaSignature, Ed25519Signature, Sr25519Signature } from '@polkadot/types/interfaces/extrinsics';
import type { BlockNumber, Digest, H256, H512, Hash } from '@polkadot/types/interfaces/runtime';

/** @name Header */
export interface Header extends Struct {
  readonly parentHash: Hash;
  readonly number: Compact<BlockNumber>;
  readonly stateRoot: Hash;
  readonly extrinsicsRoot: Hash;
  readonly digest: Digest;
  readonly seed: ShufflingSeed;
  readonly count: BlockNumber;
}

/** @name MultiSignature */
export interface MultiSignature extends Enum {
  readonly isEd25519: boolean;
  readonly asEd25519: Ed25519Signature;
  readonly isSr25519: boolean;
  readonly asSr25519: Sr25519Signature;
  readonly isEcdsa: boolean;
  readonly asEcdsa: EcdsaSignature;
  readonly isEth: boolean;
  readonly asEth: EcdsaSignature;
  readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa' | 'Eth';
}

/** @name RpcAssetMetadata */
export interface RpcAssetMetadata extends Struct {
  readonly tokenId: TokenId;
  readonly decimals: u32;
  readonly name: Bytes;
  readonly symbol: Bytes;
}

/** @name ShufflingSeed */
export interface ShufflingSeed extends Struct {
  readonly seed: H256;
  readonly proof: H512;
}

/** @name TokenId */
export interface TokenId extends u32 {}

export type PHANTOM_DEFAULT = 'default';
