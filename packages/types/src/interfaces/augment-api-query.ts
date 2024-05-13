// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/storage';

import type { ApiTypes, AugmentedQuery, QueryableStorageEntry } from '@polkadot/api-base/types';
import type { Data } from '@polkadot/types';
import type { BTreeMap, BTreeSet, Bytes, Null, Option, U256, U8aFixed, Vec, bool, u128, u32, u64 } from '@polkadot/types-codec';
import type { AnyNumber, ITuple } from '@polkadot/types-codec/types';
import type { Call, H256, Perbill } from '@polkadot/types/interfaces/runtime';
import type { FrameSupportDispatchPerDispatchClassWeight, FrameSystemAccountInfo, FrameSystemEventRecord, FrameSystemLastRuntimeUpgradeInfo, FrameSystemPhase, MangataTypesAssetsL1Asset, OrmlTokensAccountData, OrmlTokensBalanceLock, OrmlTokensReserveData, OrmlTraitsAssetRegistryAssetMetadata, PalletBootstrapBootstrapPhase, PalletCollectiveMangataVotes, PalletCrowdloanRewardsRewardInfo, PalletFeeLockAccountFeeLockDataInfo, PalletFeeLockFeeLockMetadataInfo, PalletGrandpaStoredPendingChange, PalletGrandpaStoredState, PalletIdentityRegistrarInfo, PalletIdentityRegistration, PalletIssuanceIssuanceInfo, PalletMaintenanceMaintenanceStatusInfo, PalletMultipurposeLiquidityRelockStatusInfo, PalletMultipurposeLiquidityReserveStatusInfo, PalletProofOfStakePromotedPools, PalletProofOfStakeRewardInfo, PalletProofOfStakeSchedule, PalletProofOfStakeScheduleRewardsCalculatorActivatedLiquidityPerSchedule, PalletProofOfStakeScheduleRewardsCalculatorScheduleRewards, PalletProofOfStakeSchedulesList, PalletProxyAnnouncement, PalletProxyProxyDefinition, PalletRolldownMessagesL1, PalletRolldownMessagesL1Update, PalletRolldownMessagesRequestId, PalletRolldownPendingUpdate, PalletRolldownSequencerRights, PalletTransactionPaymentMangataReleases, PalletTreasuryProposal, PalletVestingMangataReleases, PalletVestingMangataVestingInfo, ParachainStakingAggregatorMetadataType, ParachainStakingBond, ParachainStakingCollatorCandidate, ParachainStakingCollatorSnapshot, ParachainStakingDelegator, ParachainStakingRoundCollatorRewardInfoType, ParachainStakingRoundInfo, ParachainStakingSetOrderedSetBond, RollupRuntimeSessionKeys, SpConsensusAuraSr25519AppSr25519Public, SpCoreCryptoKeyTypeId, SpRuntimeAccountAccountId20, SpRuntimeDigest, StagingXcmV3MultiLocation } from '@polkadot/types/lookup';
import type { Observable } from '@polkadot/types/types';

export type __AugmentedQuery<ApiType extends ApiTypes> = AugmentedQuery<ApiType, () => unknown>;
export type __QueryableStorageEntry<ApiType extends ApiTypes> = QueryableStorageEntry<ApiType>;

declare module '@polkadot/api-base/types/storage' {
  interface AugmentedQueries<ApiType extends ApiTypes> {
    assetRegistry: {
      /**
       * Maps a asset id to an L1Asset - useful when processing l1 assets
       **/
      idToL1Asset: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<MangataTypesAssetsL1Asset>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Maps a L1Asset to an asset id - useful when processing l1 assets
       **/
      l1AssetToId: AugmentedQuery<ApiType, (arg: MangataTypesAssetsL1Asset | { Ethereum: any } | string | Uint8Array) => Observable<Option<u32>>, [MangataTypesAssetsL1Asset]> & QueryableStorageEntry<ApiType, [MangataTypesAssetsL1Asset]>;
      /**
       * Maps a multilocation to an asset id - useful when processing xcm
       * messages.
       **/
      locationToAssetId: AugmentedQuery<ApiType, (arg: StagingXcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array) => Observable<Option<u32>>, [StagingXcmV3MultiLocation]> & QueryableStorageEntry<ApiType, [StagingXcmV3MultiLocation]>;
      /**
       * The metadata of an asset, indexed by asset id.
       **/
      metadata: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<OrmlTraitsAssetRegistryAssetMetadata>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    aura: {
      /**
       * The current authority set.
       **/
      authorities: AugmentedQuery<ApiType, () => Observable<Vec<SpConsensusAuraSr25519AppSr25519Public>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current slot of this block.
       * 
       * This will be set in `on_initialize`.
       **/
      currentSlot: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    authorship: {
      /**
       * Author of current block.
       **/
      author: AugmentedQuery<ApiType, () => Observable<Option<U8aFixed>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    bootstrap: {
      /**
       * Currently bootstraped pair of tokens representaed as [ `first_token_id`, `second_token_id`]
       **/
      activePair: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[u32, u32]>>>, []> & QueryableStorageEntry<ApiType, []>;
      archivedBootstrap: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[u32, u32, u32, ITuple<[u128, u128]>]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Active bootstrap parameters
       **/
      bootstrapSchedule: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[u32, u32, u32, ITuple<[u128, u128]>]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Maps ([`frame_system::Config::AccountId`], [`CurrencyId`] ) -> [`Balance`] - where [`CurrencyId`] is id of the token that user participated with. This storage item is used to identify how much liquidity tokens has been claim by the user. If user participated with 2 tokens there are two entries associated with given account (`Address`, `first_token_id`) and (`Address`, `second_token_id`)
       **/
      claimedRewards: AugmentedQuery<ApiType, (arg1: SpRuntimeAccountAccountId20 | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<u128>, [SpRuntimeAccountAccountId20, u32]> & QueryableStorageEntry<ApiType, [SpRuntimeAccountAccountId20, u32]>;
      mintedLiquidity: AugmentedQuery<ApiType, () => Observable<ITuple<[u32, u128]>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Current state of bootstrap as [`BootstrapPhase`]
       **/
      phase: AugmentedQuery<ApiType, () => Observable<PalletBootstrapBootstrapPhase>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Wheter to automatically promote the pool after [`BootstrapPhase::PublicPhase`] or not.
       **/
      promoteBootstrapPool: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * List of accounts that provisioned funds to bootstrap and has not claimed liquidity tokens yet
       **/
      provisionAccounts: AugmentedQuery<ApiType, (arg: SpRuntimeAccountAccountId20 | string | Uint8Array) => Observable<Option<Null>>, [SpRuntimeAccountAccountId20]> & QueryableStorageEntry<ApiType, [SpRuntimeAccountAccountId20]>;
      /**
       * maps ([`frame_system::Config::AccountId`], [`CurrencyId`]) -> [`Balance`] - identifies how much tokens did account provisioned in active bootstrap
       **/
      provisions: AugmentedQuery<ApiType, (arg1: SpRuntimeAccountAccountId20 | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<u128>, [SpRuntimeAccountAccountId20, u32]> & QueryableStorageEntry<ApiType, [SpRuntimeAccountAccountId20, u32]>;
      /**
       * Total sum of provisions of `first` and `second` token in active bootstrap
       **/
      valuations: AugmentedQuery<ApiType, () => Observable<ITuple<[u128, u128]>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * maps ([`frame_system::Config::AccountId`], [`CurrencyId`]) -> [`Balance`] - identifies how much vested tokens did account provisioned in active bootstrap
       **/
      vestedProvisions: AugmentedQuery<ApiType, (arg1: SpRuntimeAccountAccountId20 | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<ITuple<[u128, u128, u128]>>, [SpRuntimeAccountAccountId20, u32]> & QueryableStorageEntry<ApiType, [SpRuntimeAccountAccountId20, u32]>;
      /**
       * list ([`Vec<AccountId>`]) of whitelisted accounts allowed to participate in [`BootstrapPhase::Whitelist`] phase
       **/
      whitelistedAccount: AugmentedQuery<ApiType, (arg: SpRuntimeAccountAccountId20 | string | Uint8Array) => Observable<Null>, [SpRuntimeAccountAccountId20]> & QueryableStorageEntry<ApiType, [SpRuntimeAccountAccountId20]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    council: {
      /**
       * The current members of the collective. This is stored sorted (just by value).
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<SpRuntimeAccountAccountId20>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The prime member that helps determine the default vote behavior in case of absentations.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<U8aFixed>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Proposals so far.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Actual proposal for a given hash, if it's current.
       **/
      proposalOf: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<Call>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * Block when the proposal was proposed.
       **/
      proposalProposedTime: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<u32>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * The hashes of the active proposals.
       **/
      proposals: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Votes on a given proposal, if it is ongoing.
       **/
      voting: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletCollectiveMangataVotes>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    crowdloan: {
      accountsPayable: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: SpRuntimeAccountAccountId20 | string | Uint8Array) => Observable<Option<PalletCrowdloanRewardsRewardInfo>>, [u32, SpRuntimeAccountAccountId20]> & QueryableStorageEntry<ApiType, [u32, SpRuntimeAccountAccountId20]>;
      claimedRelayChainIds: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: SpRuntimeAccountAccountId20 | string | Uint8Array) => Observable<Option<Null>>, [u32, SpRuntimeAccountAccountId20]> & QueryableStorageEntry<ApiType, [u32, SpRuntimeAccountAccountId20]>;
      crowdloanAllocation: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u128>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Id of current crowdloan rewards distribution, automatically incremented by
       * [`Pallet::<T>::complete_initialization`]
       **/
      crowdloanId: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      crowdloanPeriod: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[u32, u32]>>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      initialized: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Total initialized amount so far. We store this to make pallet funds == contributors reward
       * check easier and more efficient
       **/
      initializedRewardAmount: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u128>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Total number of contributors to aid hinting benchmarking
       **/
      totalContributors: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u32>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      unassociatedContributions: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: SpRuntimeAccountAccountId20 | string | Uint8Array) => Observable<Option<PalletCrowdloanRewardsRewardInfo>>, [u32, SpRuntimeAccountAccountId20]> & QueryableStorageEntry<ApiType, [u32, SpRuntimeAccountAccountId20]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    feeLock: {
      accountFeeLockData: AugmentedQuery<ApiType, (arg: SpRuntimeAccountAccountId20 | string | Uint8Array) => Observable<PalletFeeLockAccountFeeLockDataInfo>, [SpRuntimeAccountAccountId20]> & QueryableStorageEntry<ApiType, [SpRuntimeAccountAccountId20]>;
      feeLockMetadata: AugmentedQuery<ApiType, () => Observable<Option<PalletFeeLockFeeLockMetadataInfo>>, []> & QueryableStorageEntry<ApiType, []>;
      feeLockMetadataQeueuePosition: AugmentedQuery<ApiType, (arg: SpRuntimeAccountAccountId20 | string | Uint8Array) => Observable<Option<u128>>, [SpRuntimeAccountAccountId20]> & QueryableStorageEntry<ApiType, [SpRuntimeAccountAccountId20]>;
      unlockQueue: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<Option<SpRuntimeAccountAccountId20>>, [u128]> & QueryableStorageEntry<ApiType, [u128]>;
      unlockQueueBegin: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      unlockQueueEnd: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    grandpa: {
      /**
       * The number of changes (both in terms of keys and underlying economic responsibilities)
       * in the "set" of Grandpa validators from genesis.
       **/
      currentSetId: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * next block number where we can force a change.
       **/
      nextForced: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Pending change: (signaled at, scheduled change).
       **/
      pendingChange: AugmentedQuery<ApiType, () => Observable<Option<PalletGrandpaStoredPendingChange>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * A mapping from grandpa set ID to the index of the *most recent* session for which its
       * members were responsible.
       * 
       * This is only used for validating equivocation proofs. An equivocation proof must
       * contains a key-ownership proof for a given session, therefore we need a way to tie
       * together sessions and GRANDPA set ids, i.e. we need to validate that a validator
       * was the owner of a given key on a given session, and what the active set ID was
       * during that session.
       * 
       * TWOX-NOTE: `SetId` is not under user control.
       **/
      setIdSession: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<u32>>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
      /**
       * `true` if we are currently stalled.
       **/
      stalled: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[u32, u32]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * State of the current authority set.
       **/
      state: AugmentedQuery<ApiType, () => Observable<PalletGrandpaStoredState>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    identity: {
      /**
       * Information that is pertinent to identify the entity behind an account.
       * 
       * TWOX-NOTE: OK ― `AccountId` is a secure hash.
       **/
      identityOf: AugmentedQuery<ApiType, (arg: SpRuntimeAccountAccountId20 | string | Uint8Array) => Observable<Option<PalletIdentityRegistration>>, [SpRuntimeAccountAccountId20]> & QueryableStorageEntry<ApiType, [SpRuntimeAccountAccountId20]>;
      /**
       * The set of registrars. Not expected to get very big as can only be added through a
       * special origin (likely a council motion).
       * 
       * The index into this can be cast to `RegistrarIndex` to get a valid value.
       **/
      registrars: AugmentedQuery<ApiType, () => Observable<Vec<Option<PalletIdentityRegistrarInfo>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Alternative "sub" identities of this account.
       * 
       * The first item is the deposit, the second is a vector of the accounts.
       * 
       * TWOX-NOTE: OK ― `AccountId` is a secure hash.
       **/
      subsOf: AugmentedQuery<ApiType, (arg: SpRuntimeAccountAccountId20 | string | Uint8Array) => Observable<ITuple<[u128, Vec<SpRuntimeAccountAccountId20>]>>, [SpRuntimeAccountAccountId20]> & QueryableStorageEntry<ApiType, [SpRuntimeAccountAccountId20]>;
      /**
       * The super-identity of an alternative "sub" identity together with its name, within that
       * context. If the account is not some other account's sub-identity, then just `None`.
       **/
      superOf: AugmentedQuery<ApiType, (arg: SpRuntimeAccountAccountId20 | string | Uint8Array) => Observable<Option<ITuple<[SpRuntimeAccountAccountId20, Data]>>>, [SpRuntimeAccountAccountId20]> & QueryableStorageEntry<ApiType, [SpRuntimeAccountAccountId20]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    issuance: {
      issuanceConfigStore: AugmentedQuery<ApiType, () => Observable<Option<PalletIssuanceIssuanceInfo>>, []> & QueryableStorageEntry<ApiType, []>;
      isTGEFinalized: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      sessionIssuance: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[u128, u128]>>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      tgeTotal: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    maintenance: {
      maintenanceStatus: AugmentedQuery<ApiType, () => Observable<PalletMaintenanceMaintenanceStatusInfo>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    metamask: {
      chainId: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      decodeUrl: AugmentedQuery<ApiType, () => Observable<Bytes>, []> & QueryableStorageEntry<ApiType, []>;
      name: AugmentedQuery<ApiType, () => Observable<Bytes>, []> & QueryableStorageEntry<ApiType, []>;
      version: AugmentedQuery<ApiType, () => Observable<Bytes>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    multiPurposeLiquidity: {
      relockStatus: AugmentedQuery<ApiType, (arg1: SpRuntimeAccountAccountId20 | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Vec<PalletMultipurposeLiquidityRelockStatusInfo>>, [SpRuntimeAccountAccountId20, u32]> & QueryableStorageEntry<ApiType, [SpRuntimeAccountAccountId20, u32]>;
      reserveStatus: AugmentedQuery<ApiType, (arg1: SpRuntimeAccountAccountId20 | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<PalletMultipurposeLiquidityReserveStatusInfo>, [SpRuntimeAccountAccountId20, u32]> & QueryableStorageEntry<ApiType, [SpRuntimeAccountAccountId20, u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    parachainStaking: {
      /**
       * Stores information about approved candidates for aggregation
       **/
      aggregatorMetadata: AugmentedQuery<ApiType, (arg: SpRuntimeAccountAccountId20 | string | Uint8Array) => Observable<Option<ParachainStakingAggregatorMetadataType>>, [SpRuntimeAccountAccountId20]> & QueryableStorageEntry<ApiType, [SpRuntimeAccountAccountId20]>;
      /**
       * Snapshot of collator delegation stake at the start of the round
       **/
      atStake: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: SpRuntimeAccountAccountId20 | string | Uint8Array) => Observable<ParachainStakingCollatorSnapshot>, [u32, SpRuntimeAccountAccountId20]> & QueryableStorageEntry<ApiType, [u32, SpRuntimeAccountAccountId20]>;
      /**
       * Points for each collator per round
       **/
      awardedPts: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: SpRuntimeAccountAccountId20 | string | Uint8Array) => Observable<u32>, [u32, SpRuntimeAccountAccountId20]> & QueryableStorageEntry<ApiType, [u32, SpRuntimeAccountAccountId20]>;
      /**
       * Maps collator to its aggregator
       **/
      candidateAggregator: AugmentedQuery<ApiType, () => Observable<BTreeMap<SpRuntimeAccountAccountId20, SpRuntimeAccountAccountId20>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The pool of collator candidates, each with their total backing stake
       **/
      candidatePool: AugmentedQuery<ApiType, () => Observable<Vec<ParachainStakingBond>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Get collator candidate state associated with an account if account is a candidate else None
       **/
      candidateState: AugmentedQuery<ApiType, (arg: SpRuntimeAccountAccountId20 | string | Uint8Array) => Observable<Option<ParachainStakingCollatorCandidate>>, [SpRuntimeAccountAccountId20]> & QueryableStorageEntry<ApiType, [SpRuntimeAccountAccountId20]>;
      /**
       * Commission percent taken off of rewards for all collators
       **/
      collatorCommission: AugmentedQuery<ApiType, () => Observable<Perbill>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Get delegator state associated with an account if account is delegating else None
       **/
      delegatorState: AugmentedQuery<ApiType, (arg: SpRuntimeAccountAccountId20 | string | Uint8Array) => Observable<Option<ParachainStakingDelegator>>, [SpRuntimeAccountAccountId20]> & QueryableStorageEntry<ApiType, [SpRuntimeAccountAccountId20]>;
      /**
       * Total points awarded to collators for block production in the round
       **/
      points: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u32>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Current round index and next round scheduled transition
       **/
      round: AugmentedQuery<ApiType, () => Observable<ParachainStakingRoundInfo>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Stored once per session, maps aggregator to list of assosiated candidates
       **/
      roundAggregatorInfo: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<BTreeMap<SpRuntimeAccountAccountId20, BTreeMap<SpRuntimeAccountAccountId20, u128>>>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Stores information about rewards per each session
       **/
      roundCollatorRewardInfo: AugmentedQuery<ApiType, (arg1: SpRuntimeAccountAccountId20 | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Option<ParachainStakingRoundCollatorRewardInfoType>>, [SpRuntimeAccountAccountId20, u32]> & QueryableStorageEntry<ApiType, [SpRuntimeAccountAccountId20, u32]>;
      /**
       * The collator candidates selected for the current round
       * Block authors selection algorithm details [`Pallet::select_top_candidates`]
       **/
      selectedCandidates: AugmentedQuery<ApiType, () => Observable<Vec<SpRuntimeAccountAccountId20>>, []> & QueryableStorageEntry<ApiType, []>;
      stakingLiquidityTokens: AugmentedQuery<ApiType, () => Observable<BTreeMap<u32, Option<ITuple<[u128, u128]>>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Total capital locked by this staking pallet
       **/
      total: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u128>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * The total candidates selected every round
       **/
      totalSelected: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    proofOfStake: {
      /**
       * Tracks how much liquidity user activated for particular (liq token, reward token) pair
       * StorageNMap was used because it only require single read to know if user deactivated all
       * liquidity associated with particular liquidity_token that is rewarded. If so part of the
       * liquididty tokens can be unlocked.
       **/
      activatedLiquidityForSchedules: AugmentedQuery<ApiType, (arg1: SpRuntimeAccountAccountId20 | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array, arg3: u32 | AnyNumber | Uint8Array) => Observable<Option<u128>>, [SpRuntimeAccountAccountId20, u32, u32]> & QueryableStorageEntry<ApiType, [SpRuntimeAccountAccountId20, u32, u32]>;
      /**
       * Tracks how much of the liquidity was activated for schedule rewards and not yet
       * liquidity mining rewards. That information is essential to properly handle token unlcocks
       * when liquidity is deactivated.
       **/
      activatedLockedLiquidityForSchedules: AugmentedQuery<ApiType, (arg1: SpRuntimeAccountAccountId20 | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<u128>, [SpRuntimeAccountAccountId20, u32]> & QueryableStorageEntry<ApiType, [SpRuntimeAccountAccountId20, u32]>;
      /**
       * Tracks how much of the liquidity was activated for schedule rewards and not yet
       * liquidity mining rewards. That information is essential to properly handle token unlcocks
       * when liquidity is deactivated.
       **/
      activatedNativeRewardsLiq: AugmentedQuery<ApiType, (arg1: SpRuntimeAccountAccountId20 | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<u128>, [SpRuntimeAccountAccountId20, u32]> & QueryableStorageEntry<ApiType, [SpRuntimeAccountAccountId20, u32]>;
      /**
       * Stores information about pool weight and accumulated rewards. The accumulated
       * rewards amount is the number of rewards that can be claimed per liquidity
       * token. Here is tracked the number of rewards per liquidity token relationship.
       * Expect larger values when the number of liquidity tokens are smaller.
       **/
      promotedPoolRewards: AugmentedQuery<ApiType, () => Observable<BTreeMap<u32, PalletProofOfStakePromotedPools>>, []> & QueryableStorageEntry<ApiType, []>;
      rewardsInfo: AugmentedQuery<ApiType, (arg1: SpRuntimeAccountAccountId20 | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<PalletProofOfStakeRewardInfo>, [SpRuntimeAccountAccountId20, u32]> & QueryableStorageEntry<ApiType, [SpRuntimeAccountAccountId20, u32]>;
      /**
       * Stores information about pool weight and accumulated rewards
       **/
      rewardsInfoForScheduleRewards: AugmentedQuery<ApiType, (arg1: SpRuntimeAccountAccountId20 | string | Uint8Array, arg2: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]) => Observable<PalletProofOfStakeRewardInfo>, [SpRuntimeAccountAccountId20, ITuple<[u32, u32]>]> & QueryableStorageEntry<ApiType, [SpRuntimeAccountAccountId20, ITuple<[u32, u32]>]>;
      /**
       * List of activated schedules sorted by expiry date
       **/
      rewardsSchedules: AugmentedQuery<ApiType, () => Observable<BTreeMap<ITuple<[u32, u32, u32, u128, u64]>, Null>>, []> & QueryableStorageEntry<ApiType, []>;
      rewardsSchedulesList: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[PalletProofOfStakeSchedule, Option<u64>]>>>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
      /**
       * Maps liquidity token to list of tokens that it ever was rewarded with
       **/
      rewardTokensPerPool: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Null>, [u32, u32]> & QueryableStorageEntry<ApiType, [u32, u32]>;
      scheduleRewardsPerLiquidity: AugmentedQuery<ApiType, (arg: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]) => Observable<ITuple<[U256, u64]>>, [ITuple<[u32, u32]>]> & QueryableStorageEntry<ApiType, [ITuple<[u32, u32]>]>;
      /**
       * How much scheduled rewards per single liquidty_token should be distribute_rewards
       * the **value is multiplied by u128::MAX** to avoid floating point arithmetic
       **/
      scheduleRewardsTotal: AugmentedQuery<ApiType, (arg: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]) => Observable<PalletProofOfStakeScheduleRewardsCalculatorScheduleRewards>, [ITuple<[u32, u32]>]> & QueryableStorageEntry<ApiType, [ITuple<[u32, u32]>]>;
      schedulesListMetadata: AugmentedQuery<ApiType, () => Observable<PalletProofOfStakeSchedulesList>, []> & QueryableStorageEntry<ApiType, []>;
      totalActivatedLiquidity: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u128>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Tracks number of activated liquidity per schedule. It is used for calculation of
       * "cumulative rewrds amount" per 1 liquidity token. Therefore activation/deactivation needs
       * to be deffered same way as schedule rewards are delayed.
       **/
      totalActivatedLiquidityForSchedules: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<PalletProofOfStakeScheduleRewardsCalculatorActivatedLiquidityPerSchedule>, [u32, u32]> & QueryableStorageEntry<ApiType, [u32, u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    proxy: {
      /**
       * The announcements made by the proxy (key).
       **/
      announcements: AugmentedQuery<ApiType, (arg: SpRuntimeAccountAccountId20 | string | Uint8Array) => Observable<ITuple<[Vec<PalletProxyAnnouncement>, u128]>>, [SpRuntimeAccountAccountId20]> & QueryableStorageEntry<ApiType, [SpRuntimeAccountAccountId20]>;
      /**
       * The set of account proxies. Maps the account which has delegated to the accounts
       * which are being delegated to, together with the amount held on deposit.
       **/
      proxies: AugmentedQuery<ApiType, (arg: SpRuntimeAccountAccountId20 | string | Uint8Array) => Observable<ITuple<[Vec<PalletProxyProxyDefinition>, u128]>>, [SpRuntimeAccountAccountId20]> & QueryableStorageEntry<ApiType, [SpRuntimeAccountAccountId20]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    rolldown: {
      awaitingCancelResolution: AugmentedQuery<ApiType, (arg: SpRuntimeAccountAccountId20 | string | Uint8Array) => Observable<BTreeSet<u128>>, [SpRuntimeAccountAccountId20]> & QueryableStorageEntry<ApiType, [SpRuntimeAccountAccountId20]>;
      l2OriginRequestId: AugmentedQuery<ApiType, (arg: PalletRolldownMessagesL1 | 'Ethereum' | number | Uint8Array) => Observable<u128>, [PalletRolldownMessagesL1]> & QueryableStorageEntry<ApiType, [PalletRolldownMessagesL1]>;
      lastProcessedRequestOnL2: AugmentedQuery<ApiType, (arg: PalletRolldownMessagesL1 | 'Ethereum' | number | Uint8Array) => Observable<u128>, [PalletRolldownMessagesL1]> & QueryableStorageEntry<ApiType, [PalletRolldownMessagesL1]>;
      lastUpdateBySequencer: AugmentedQuery<ApiType, (arg: SpRuntimeAccountAccountId20 | string | Uint8Array) => Observable<u128>, [SpRuntimeAccountAccountId20]> & QueryableStorageEntry<ApiType, [SpRuntimeAccountAccountId20]>;
      maxAcceptedRequestIdOnl2: AugmentedQuery<ApiType, (arg: PalletRolldownMessagesL1 | 'Ethereum' | number | Uint8Array) => Observable<u128>, [PalletRolldownMessagesL1]> & QueryableStorageEntry<ApiType, [PalletRolldownMessagesL1]>;
      pendingRequests: AugmentedQuery<ApiType, (arg1: u128 | AnyNumber | Uint8Array, arg2: PalletRolldownMessagesL1 | 'Ethereum' | number | Uint8Array) => Observable<Option<ITuple<[SpRuntimeAccountAccountId20, PalletRolldownMessagesL1Update]>>>, [u128, PalletRolldownMessagesL1]> & QueryableStorageEntry<ApiType, [u128, PalletRolldownMessagesL1]>;
      pendingUpdates: AugmentedQuery<ApiType, (arg1: PalletRolldownMessagesL1 | 'Ethereum' | number | Uint8Array, arg2: PalletRolldownMessagesRequestId | { origin?: any; id?: any } | string | Uint8Array) => Observable<Option<PalletRolldownPendingUpdate>>, [PalletRolldownMessagesL1, PalletRolldownMessagesRequestId]> & QueryableStorageEntry<ApiType, [PalletRolldownMessagesL1, PalletRolldownMessagesRequestId]>;
      requestToExecute: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[PalletRolldownMessagesL1, PalletRolldownMessagesL1Update]>>>, [u128]> & QueryableStorageEntry<ApiType, [u128]>;
      requestToExecuteCnt: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      requestToExecuteLast: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      sequencerCount: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      sequencerRights: AugmentedQuery<ApiType, (arg: SpRuntimeAccountAccountId20 | string | Uint8Array) => Observable<Option<PalletRolldownSequencerRights>>, [SpRuntimeAccountAccountId20]> & QueryableStorageEntry<ApiType, [SpRuntimeAccountAccountId20]>;
      totalNumberOfDeposits: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      totalNumberOfWithdrawals: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    sequencerStaking: {
      activeSequencers: AugmentedQuery<ApiType, () => Observable<Vec<SpRuntimeAccountAccountId20>>, []> & QueryableStorageEntry<ApiType, []>;
      currentRound: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      eligibleToBeSequencers: AugmentedQuery<ApiType, () => Observable<BTreeMap<SpRuntimeAccountAccountId20, u32>>, []> & QueryableStorageEntry<ApiType, []>;
      minimalStakeAmount: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      nextSequencerIndex: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      roundCollators: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<SpRuntimeAccountAccountId20>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      selectedSequencer: AugmentedQuery<ApiType, () => Observable<Option<U8aFixed>>, []> & QueryableStorageEntry<ApiType, []>;
      sequencerStake: AugmentedQuery<ApiType, (arg: SpRuntimeAccountAccountId20 | string | Uint8Array) => Observable<u128>, [SpRuntimeAccountAccountId20]> & QueryableStorageEntry<ApiType, [SpRuntimeAccountAccountId20]>;
      slashFineAmount: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    session: {
      /**
       * Current index of the session.
       **/
      currentIndex: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Indices of disabled validators.
       * 
       * The vec is always kept sorted so that we can find whether a given validator is
       * disabled using binary search. It gets cleared when `on_session_ending` returns
       * a new set of identities.
       **/
      disabledValidators: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The owner of a key. The key is the `KeyTypeId` + the encoded key.
       **/
      keyOwner: AugmentedQuery<ApiType, (arg: ITuple<[SpCoreCryptoKeyTypeId, Bytes]> | [SpCoreCryptoKeyTypeId | string | Uint8Array, Bytes | string | Uint8Array]) => Observable<Option<SpRuntimeAccountAccountId20>>, [ITuple<[SpCoreCryptoKeyTypeId, Bytes]>]> & QueryableStorageEntry<ApiType, [ITuple<[SpCoreCryptoKeyTypeId, Bytes]>]>;
      /**
       * The next session keys for a validator.
       **/
      nextKeys: AugmentedQuery<ApiType, (arg: SpRuntimeAccountAccountId20 | string | Uint8Array) => Observable<Option<RollupRuntimeSessionKeys>>, [SpRuntimeAccountAccountId20]> & QueryableStorageEntry<ApiType, [SpRuntimeAccountAccountId20]>;
      /**
       * True if the underlying economic identities or weighting behind the validators
       * has changed in the queued validator set.
       **/
      queuedChanged: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The queued keys for the next session. When the next session begins, these keys
       * will be used to determine the validator's session keys.
       **/
      queuedKeys: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[SpRuntimeAccountAccountId20, RollupRuntimeSessionKeys]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current set of validators.
       **/
      validators: AugmentedQuery<ApiType, () => Observable<Vec<SpRuntimeAccountAccountId20>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    sudo: {
      /**
       * The `AccountId` of the sudo key.
       **/
      key: AugmentedQuery<ApiType, () => Observable<Option<U8aFixed>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    system: {
      /**
       * The full account information for a particular account ID.
       **/
      account: AugmentedQuery<ApiType, (arg: SpRuntimeAccountAccountId20 | string | Uint8Array) => Observable<FrameSystemAccountInfo>, [SpRuntimeAccountAccountId20]> & QueryableStorageEntry<ApiType, [SpRuntimeAccountAccountId20]>;
      /**
       * Total length (in bytes) for all extrinsics put together, for the current block.
       **/
      allExtrinsicsLen: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Map of block numbers to block hashes.
       **/
      blockHash: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<H256>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Map of block numbers to block shuffling seeds
       **/
      blockSeed: AugmentedQuery<ApiType, () => Observable<H256>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current weight for the block.
       **/
      blockWeight: AugmentedQuery<ApiType, () => Observable<FrameSupportDispatchPerDispatchClassWeight>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Map of block numbers to block shuffling seeds
       **/
      didStoreTxs: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Digest of the current block, also part of the block header.
       **/
      digest: AugmentedQuery<ApiType, () => Observable<SpRuntimeDigest>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The number of events in the `Events<T>` list.
       **/
      eventCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Events deposited for the current block.
       * 
       * NOTE: The item is unbound and should therefore never be read on chain.
       * It could otherwise inflate the PoV size of a block.
       * 
       * Events have a large in-memory size. Box the events to not go out-of-memory
       * just in case someone still reads them from within the runtime.
       **/
      events: AugmentedQuery<ApiType, () => Observable<Vec<FrameSystemEventRecord>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Mapping between a topic (represented by T::Hash) and a vector of indexes
       * of events in the `<Events<T>>` list.
       * 
       * All topic vectors have deterministic storage locations depending on the topic. This
       * allows light-clients to leverage the changes trie storage tracking mechanism and
       * in case of changes fetch the list of events of interest.
       * 
       * The value has the type `(BlockNumberFor<T>, EventIndex)` because if we used only just
       * the `EventIndex` then in case if the topic has the same contents on the next block
       * no notification will be triggered thus the event might be lost.
       **/
      eventTopics: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Vec<ITuple<[u32, u32]>>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * The execution phase of the block.
       **/
      executionPhase: AugmentedQuery<ApiType, () => Observable<Option<FrameSystemPhase>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Total extrinsics count for the current block.
       **/
      extrinsicCount: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Extrinsics data for the current block (maps an extrinsic's index to its data).
       **/
      extrinsicData: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
       **/
      lastRuntimeUpgrade: AugmentedQuery<ApiType, () => Observable<Option<FrameSystemLastRuntimeUpgradeInfo>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current block number being processed. Set by `execute_block`.
       **/
      number: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Hash of the previous block.
       **/
      parentHash: AugmentedQuery<ApiType, () => Observable<H256>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Storage queue is used for storing transactions in blockchain itself.
       * Main reason for that storage entry is fact that upon VER block `N` execution it is
       * required to fetch & executed transactions from previous block (`N-1`) but due to origin
       * substrate design blocks & extrinsics are stored in rocksDB database that is not accessible
       * from runtime part of the node (see [Substrate architecture](https://storage.googleapis.com/mangata-docs-node/frame_executive/struct.Executive.html)) what makes it impossible to properly implement block
       * execution logic. As an solution blockchain runtime storage was selected as buffer for txs
       * waiting for execution. Main advantage of such approach is fact that storage state is public
       * so its impossible to manipulate data stored in there. Storage queue is implemented as double
       * buffered queue - to solve problem of rare occasions where due to different reasons some txs
       * that were included in block `N` are not able to be executed in a following block `N+1` (good
       * example is new session hook/event that by design consumes whole block capacity).
       * 
       * 
       * # Overhead
       * Its worth to notice that storage queue adds only single storage write, as list of all txs
       * is stored as single value (encoded list of txs) maped to single key (block number)
       * 
       * # Storage Qeueue interaction
       * There are two ways to interact with storage queue:
       * - enqueuing new txs using [`Pallet::enqueue_txs`] inherent
       * - poping txs from the queue using [`Pallet::pop_txs`] that is exposed throught RuntimeApi
       * call
       **/
      storageQueue: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[u32, Option<u32>, Vec<ITuple<[Option<SpRuntimeAccountAccountId20>, Bytes]>>]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Map of block numbers to block shuffling seeds
       **/
      txPrevalidation: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
       * (default) if not.
       **/
      upgradedToTripleRefCount: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
       **/
      upgradedToU32RefCount: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    timestamp: {
      /**
       * Did the timestamp get updated in this block?
       **/
      didUpdate: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Current time for the current block.
       **/
      now: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    tokens: {
      /**
       * The balance of a token type under an account.
       * 
       * NOTE: If the total is ever zero, decrease account ref account.
       * 
       * NOTE: This is only used in the case that this module is used to store
       * balances.
       **/
      accounts: AugmentedQuery<ApiType, (arg1: SpRuntimeAccountAccountId20 | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<OrmlTokensAccountData>, [SpRuntimeAccountAccountId20, u32]> & QueryableStorageEntry<ApiType, [SpRuntimeAccountAccountId20, u32]>;
      /**
       * Any liquidity locks of a token type under an account.
       * NOTE: Should only be accessed when setting, changing and freeing a lock.
       **/
      locks: AugmentedQuery<ApiType, (arg1: SpRuntimeAccountAccountId20 | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Vec<OrmlTokensBalanceLock>>, [SpRuntimeAccountAccountId20, u32]> & QueryableStorageEntry<ApiType, [SpRuntimeAccountAccountId20, u32]>;
      nextCurrencyId: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Named reserves on some account balances.
       **/
      reserves: AugmentedQuery<ApiType, (arg1: SpRuntimeAccountAccountId20 | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Vec<OrmlTokensReserveData>>, [SpRuntimeAccountAccountId20, u32]> & QueryableStorageEntry<ApiType, [SpRuntimeAccountAccountId20, u32]>;
      /**
       * The total issuance of a token type.
       **/
      totalIssuance: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u128>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    transactionPayment: {
      nextFeeMultiplier: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      storageVersion: AugmentedQuery<ApiType, () => Observable<PalletTransactionPaymentMangataReleases>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    treasury: {
      /**
       * Proposal indices that have been approved but not yet awarded.
       **/
      approvals: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The amount which has been reported as inactive to Currency.
       **/
      deactivated: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Number of proposals that have been made.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Proposals that have been made.
       **/
      proposals: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletTreasuryProposal>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    vesting: {
      /**
       * Storage version of the pallet.
       * 
       * New networks start with latest version, as determined by the genesis build.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<PalletVestingMangataReleases>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Information regarding the vesting of a given account.
       **/
      vesting: AugmentedQuery<ApiType, (arg1: SpRuntimeAccountAccountId20 | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Option<Vec<PalletVestingMangataVestingInfo>>>, [SpRuntimeAccountAccountId20, u32]> & QueryableStorageEntry<ApiType, [SpRuntimeAccountAccountId20, u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    xyk: {
      liquidityAssets: AugmentedQuery<ApiType, (arg: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]) => Observable<Option<u32>>, [ITuple<[u32, u32]>]> & QueryableStorageEntry<ApiType, [ITuple<[u32, u32]>]>;
      liquidityPools: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[u32, u32]>>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      pools: AugmentedQuery<ApiType, (arg: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]) => Observable<ITuple<[u128, u128]>>, [ITuple<[u32, u32]>]> & QueryableStorageEntry<ApiType, [ITuple<[u32, u32]>]>;
      totalNumberOfSwaps: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
  } // AugmentedQueries
} // declare module
