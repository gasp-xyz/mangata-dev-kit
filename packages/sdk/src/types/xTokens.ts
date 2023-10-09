import {
  Address,
  TokenAmount,
  ExtrinsicCommon,
  TxOptions,
  Prettify
} from "./common";
import { Merge, Except } from "type-fest";
import { XcmVersionedMultiAsset, XcmVersionedMultiLocation, XcmV3WeightLimit, XcmVersionedMultiAssets } from "@polkadot/types/lookup"

export type XcmTxOptions = Partial<
  Omit<TxOptions, "statusCallback" | "extrinsicStatus">
>;

export type Deposit<A = string | Uint8Array | XcmVersionedMultiAsset | { V2: any; } | { V3: any; }, D = XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, W = XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array> = Prettify<
  Merge<
    ExtrinsicCommon,
    {
      url: string;
      asset: A,
      destination: D;
      weightLimit: W;
    }
  >
>;

export type Withdraw = Merge<
  ExtrinsicCommon,
  {
    tokenSymbol: string;
    withWeight: number | "Unlimited";
    parachainId: number;
    destinationAddress: Address;
    amount: TokenAmount;
  }
>;

export type MoonriverWithdraw = Merge<
  ExtrinsicCommon,
  {
    tokenSymbol: string;
    moonriverAddress: string;
    amount: TokenAmount;
  }
>;

export type RelayDeposit<
  A = XcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array,
  D = XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array,
  F = number,
  B = XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array,
  W = XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array
> = Prettify<
  Merge<
    ExtrinsicCommon,
    {
      url: string;
      assets: A;
      destination: D;
      feeAssetItem: F;
      beneficiary: B;
      weightLimit: W;
    }
  >
>;

export type RelayWithdraw = Prettify<
  Merge<
    ExtrinsicCommon,
    {
      kusamaAddress: Address;
      amount: TokenAmount;
    }
  >
>;

export type WithdrawKsmFee = Except<RelayWithdraw, "txOptions">;
export type WithdrawFee = Except<Withdraw, "txOptions">;
export type DepositFromParachainFee = Except<Deposit, "txOptions">;
export type DepositFromKusamaFee = Except<RelayDeposit, "txOptions">;
export type DepositFromStatemineFee = Except<RelayDeposit, "txOptions">;
