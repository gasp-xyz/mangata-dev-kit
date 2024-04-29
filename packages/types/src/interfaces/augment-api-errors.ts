// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/errors';

import type { ApiTypes, AugmentedError } from '@polkadot/api-base/types';

export type __AugmentedError<ApiType extends ApiTypes> = AugmentedError<ApiType>;

declare module '@polkadot/api-base/types/errors' {
  interface AugmentedErrors<ApiType extends ApiTypes> {
    assetRegistry: {
      /**
       * Asset was not found.
       **/
      AssetNotFound: AugmentedError<ApiType>;
      /**
       * The version of the `VersionedMultiLocation` value used is not able
       * to be interpreted.
       **/
      BadVersion: AugmentedError<ApiType>;
      /**
       * Another asset was already register with this asset id.
       **/
      ConflictingAssetId: AugmentedError<ApiType>;
      ConflictingL1Asset: AugmentedError<ApiType>;
      /**
       * Another asset was already register with this location.
       **/
      ConflictingLocation: AugmentedError<ApiType>;
      /**
       * The asset id is invalid.
       **/
      InvalidAssetId: AugmentedError<ApiType>;
      /**
       * Name or symbol is too long.
       **/
      InvalidAssetString: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    bootstrap: {
      /**
       * Bootstrate event already started
       **/
      AlreadyStarted: AugmentedError<ApiType>;
      /**
       * Bootstrap already Finished
       **/
      BootstrapFinished: AugmentedError<ApiType>;
      /**
       * Bootstrap must be pre finalized before it can be finalized
       **/
      BootstrapMustBePreFinalized: AugmentedError<ApiType>;
      /**
       * no rewards to claim
       **/
      BootstrapNotReadyToBeFinished: AugmentedError<ApiType>;
      /**
       * Bootstrap not scheduled
       **/
      BootstrapNotSchduled: AugmentedError<ApiType>;
      /**
       * Bootstrap cant be scheduled in past
       **/
      BootstrapStartInThePast: AugmentedError<ApiType>;
      /**
       * First provision must be in non restricted token
       **/
      FirstProvisionInSecondTokenId: AugmentedError<ApiType>;
      /**
       * Math problem
       **/
      MathOverflow: AugmentedError<ApiType>;
      /**
       * Not enough funds for provision
       **/
      NotEnoughAssets: AugmentedError<ApiType>;
      /**
       * Not enough funds for provision (vested)
       **/
      NotEnoughVestedAssets: AugmentedError<ApiType>;
      /**
       * Cannot claim rewards before bootstrap finish
       **/
      NotFinishedYet: AugmentedError<ApiType>;
      /**
       * no rewards to claim
       **/
      NothingToClaim: AugmentedError<ApiType>;
      /**
       * Bootstarap phases cannot lasts 0 blocks
       **/
      PhaseLengthCannotBeZero: AugmentedError<ApiType>;
      /**
       * Bootstraped pool already exists
       **/
      PoolAlreadyExists: AugmentedError<ApiType>;
      /**
       * Bootstrap provisioning blocked by maintenance mode
       **/
      ProvisioningBlockedByMaintenanceMode: AugmentedError<ApiType>;
      /**
       * Tokens used in bootstrap cannot be the same
       **/
      SameToken: AugmentedError<ApiType>;
      /**
       * Token does not exists
       **/
      TokenIdDoesNotExists: AugmentedError<ApiType>;
      /**
       * Token activations failed
       **/
      TokensActivationFailed: AugmentedError<ApiType>;
      /**
       * Bootstrap can only be updated or cancelled
       * BootstrapUpdateBuffer blocks or more before bootstrap start
       **/
      TooLateToUpdateBootstrap: AugmentedError<ApiType>;
      /**
       * User cannot participate at this moment
       **/
      Unauthorized: AugmentedError<ApiType>;
      /**
       * Only scheduled token pair can be used for provisions
       **/
      UnsupportedTokenId: AugmentedError<ApiType>;
      /**
       * Valuation ratio exceeded
       **/
      ValuationRatio: AugmentedError<ApiType>;
      /**
       * wrong ratio
       **/
      WrongRatio: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    council: {
      /**
       * Members are already initialized!
       **/
      AlreadyInitialized: AugmentedError<ApiType>;
      /**
       * Duplicate proposals not allowed
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * Duplicate vote ignored
       **/
      DuplicateVote: AugmentedError<ApiType>;
      /**
       * Requires foundation account or root
       **/
      NotFoundationAccountOrRoot: AugmentedError<ApiType>;
      /**
       * Account is not a member
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Prime account is not a member
       **/
      PrimeAccountNotMember: AugmentedError<ApiType>;
      /**
       * Proposal must exist
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * The close call was made too early, before the end of the voting.
       **/
      TooEarly: AugmentedError<ApiType>;
      /**
       * To early to close the proposal, can only close ProposalCloseDelay blocks after proposal
       * was proposed unless by a foundation account
       **/
      TooEarlyToCloseByNonFoundationAccount: AugmentedError<ApiType>;
      /**
       * There can only be a maximum of `MaxProposals` active proposals.
       **/
      TooManyProposals: AugmentedError<ApiType>;
      /**
       * Mismatched index
       **/
      WrongIndex: AugmentedError<ApiType>;
      /**
       * The given length bound for the proposal was too low.
       **/
      WrongProposalLength: AugmentedError<ApiType>;
      /**
       * The given weight bound for the proposal was too low.
       **/
      WrongProposalWeight: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    crowdloan: {
      /**
       * Trying to introduce a batch that goes beyond the limits of the funds
       **/
      AllocationDoesNotMatch: AugmentedError<ApiType>;
      /**
       * User trying to associate a native identity with a relay chain identity for posterior
       * reward claiming provided an already associated relay chain identity
       **/
      AlreadyAssociated: AugmentedError<ApiType>;
      /**
       * Trying to introduce a batch that goes beyond the limits of the funds
       **/
      BatchBeyondFundPot: AugmentedError<ApiType>;
      /**
       * The mint operation during claim has resulted in err.
       * This is expected when claiming less than existential desposit on a non-existent account
       * Please consider waiting until the EndVestingBlock to attempt this
       **/
      ClaimingLessThanED: AugmentedError<ApiType>;
      /**
       * First claim already done
       **/
      FirstClaimAlreadyDone: AugmentedError<ApiType>;
      /**
       * User submitted an unsifficient number of proofs to change the reward address
       **/
      InsufficientNumberOfValidProofs: AugmentedError<ApiType>;
      /**
       * User trying to associate a native identity with a relay chain identity for posterior
       * reward claiming provided a wrong signature
       **/
      InvalidClaimSignature: AugmentedError<ApiType>;
      /**
       * User trying to claim the first free reward provided the wrong signature
       **/
      InvalidFreeClaimSignature: AugmentedError<ApiType>;
      /**
       * Math overflow
       **/
      MathOverflow: AugmentedError<ApiType>;
      /**
       * User trying to claim an award did not have an claim associated with it. This may mean
       * they did not contribute to the crowdloan, or they have not yet associated a native id
       * with their contribution
       **/
      NoAssociatedClaim: AugmentedError<ApiType>;
      /**
       * User provided a signature from a non-contributor relay account
       **/
      NonContributedAddressProvided: AugmentedError<ApiType>;
      /**
       * Period not set
       **/
      PeriodNotSet: AugmentedError<ApiType>;
      /**
       * The contribution is not high enough to be eligible for rewards
       **/
      RewardNotHighEnough: AugmentedError<ApiType>;
      /**
       * User trying to claim rewards has already claimed all rewards associated with its
       * identity and contribution
       **/
      RewardsAlreadyClaimed: AugmentedError<ApiType>;
      /**
       * Rewards should match funds of the pallet
       **/
      RewardsDoNotMatchFund: AugmentedError<ApiType>;
      /**
       * Reward vec has already been initialized
       **/
      RewardVecAlreadyInitialized: AugmentedError<ApiType>;
      /**
       * Reward vec has not yet been fully initialized
       **/
      RewardVecNotFullyInitializedYet: AugmentedError<ApiType>;
      /**
       * Initialize_reward_vec received too many contributors
       **/
      TooManyContributors: AugmentedError<ApiType>;
      /**
       * Provided vesting period is not valid
       **/
      VestingPeriodNonValid: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    feeLock: {
      /**
       * The lock cannot be unlocked yet
       **/
      CantUnlockFeeYet: AugmentedError<ApiType>;
      /**
       * Locks were incorrectly initialized
       **/
      FeeLocksIncorrectlyInitialzed: AugmentedError<ApiType>;
      /**
       * Locks have not been initialzed
       **/
      FeeLocksNotInitialized: AugmentedError<ApiType>;
      /**
       * Lock metadata is invalid
       **/
      InvalidFeeLockMetadata: AugmentedError<ApiType>;
      /**
       * The limit on the maximum curated tokens for which there is a swap threshold is exceeded
       **/
      MaxCuratedTokensLimitExceeded: AugmentedError<ApiType>;
      /**
       * No tokens of the user are fee-locked
       **/
      NotFeeLocked: AugmentedError<ApiType>;
      /**
       * An unexpected failure has occured
       **/
      UnexpectedFailure: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    grandpa: {
      /**
       * Attempt to signal GRANDPA change with one already pending.
       **/
      ChangePending: AugmentedError<ApiType>;
      /**
       * A given equivocation report is valid but already previously reported.
       **/
      DuplicateOffenceReport: AugmentedError<ApiType>;
      /**
       * An equivocation proof provided as part of an equivocation report is invalid.
       **/
      InvalidEquivocationProof: AugmentedError<ApiType>;
      /**
       * A key ownership proof provided as part of an equivocation report is invalid.
       **/
      InvalidKeyOwnershipProof: AugmentedError<ApiType>;
      /**
       * Attempt to signal GRANDPA pause when the authority set isn't live
       * (either paused or already pending pause).
       **/
      PauseFailed: AugmentedError<ApiType>;
      /**
       * Attempt to signal GRANDPA resume when the authority set isn't paused
       * (either live or already pending resume).
       **/
      ResumeFailed: AugmentedError<ApiType>;
      /**
       * Cannot signal forced change so soon after last.
       **/
      TooSoon: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    identity: {
      /**
       * Account ID is already named.
       **/
      AlreadyClaimed: AugmentedError<ApiType>;
      /**
       * Empty index.
       **/
      EmptyIndex: AugmentedError<ApiType>;
      /**
       * Fee is changed.
       **/
      FeeChanged: AugmentedError<ApiType>;
      /**
       * The index is invalid.
       **/
      InvalidIndex: AugmentedError<ApiType>;
      /**
       * Invalid judgement.
       **/
      InvalidJudgement: AugmentedError<ApiType>;
      /**
       * The target is invalid.
       **/
      InvalidTarget: AugmentedError<ApiType>;
      /**
       * The provided judgement was for a different identity.
       **/
      JudgementForDifferentIdentity: AugmentedError<ApiType>;
      /**
       * Judgement given.
       **/
      JudgementGiven: AugmentedError<ApiType>;
      /**
       * Error that occurs when there is an issue paying for judgement.
       **/
      JudgementPaymentFailed: AugmentedError<ApiType>;
      /**
       * No identity found.
       **/
      NoIdentity: AugmentedError<ApiType>;
      /**
       * Account isn't found.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Account isn't named.
       **/
      NotNamed: AugmentedError<ApiType>;
      /**
       * Sub-account isn't owned by sender.
       **/
      NotOwned: AugmentedError<ApiType>;
      /**
       * Sender is not a sub-account.
       **/
      NotSub: AugmentedError<ApiType>;
      /**
       * Sticky judgement.
       **/
      StickyJudgement: AugmentedError<ApiType>;
      /**
       * Too many additional fields.
       **/
      TooManyFields: AugmentedError<ApiType>;
      /**
       * Maximum amount of registrars reached. Cannot add any more.
       **/
      TooManyRegistrars: AugmentedError<ApiType>;
      /**
       * Too many subs-accounts.
       **/
      TooManySubAccounts: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    issuance: {
      /**
       * The issuance config has already been initialized
       **/
      IssuanceConfigAlreadyInitialized: AugmentedError<ApiType>;
      /**
       * The issuance config is invalid
       **/
      IssuanceConfigInvalid: AugmentedError<ApiType>;
      /**
       * The issuance config has not been initialized
       **/
      IssuanceConfigNotInitialized: AugmentedError<ApiType>;
      /**
       * An underflow or an overflow has occured
       **/
      MathError: AugmentedError<ApiType>;
      /**
       * The TGE is already finalized
       **/
      TGEIsAlreadyFinalized: AugmentedError<ApiType>;
      /**
       * TGE must be finalized before issuance config is inti
       **/
      TGENotFinalized: AugmentedError<ApiType>;
      /**
       * unknown pool
       **/
      UnknownPool: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    maintenance: {
      /**
       * Already in maintenance mode
       **/
      AlreadyInMaintenanceMode: AugmentedError<ApiType>;
      /**
       * Already not upgradable in maintenance mode
       **/
      AlreadyNotUpgradableInMaintenanceMode: AugmentedError<ApiType>;
      /**
       * Already upgradable in maintenance mode
       **/
      AlreadyUpgradableInMaintenanceMode: AugmentedError<ApiType>;
      /**
       * Timeouts were incorrectly initialized
       **/
      NotFoundationAccount: AugmentedError<ApiType>;
      /**
       * Not in maintenance mode
       **/
      NotInMaintenanceMode: AugmentedError<ApiType>;
      /**
       * Upgrade blocked by Maintenance
       **/
      UpgradeBlockedByMaintenance: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    metamask: {
      /**
       * there should be some updates
       **/
      NothingToUpdate: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    multiPurposeLiquidity: {
      /**
       * Math error
       **/
      MathError: AugmentedError<ApiType>;
      /**
       * The token is not a liquidity token
       **/
      NotALiquidityToken: AugmentedError<ApiType>;
      /**
       * Not enough tokens
       **/
      NotEnoughTokens: AugmentedError<ApiType>;
      /**
       * Not enough unspend reserves
       **/
      NotEnoughUnspentReserves: AugmentedError<ApiType>;
      /**
       * The limit on the maximum number of relocks was exceeded
       **/
      RelockCountLimitExceeded: AugmentedError<ApiType>;
      /**
       * Provided index for relock is out of bounds
       **/
      RelockInstanceIndexOOB: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    parachainStaking: {
      AggregatorDNE: AugmentedError<ApiType>;
      AggregatorExists: AugmentedError<ApiType>;
      AggregatorLiquidityTokenTaken: AugmentedError<ApiType>;
      AlreadyActive: AugmentedError<ApiType>;
      AlreadyDelegatedCandidate: AugmentedError<ApiType>;
      AlreadyOffline: AugmentedError<ApiType>;
      CandidateAlreadyApprovedByAggregator: AugmentedError<ApiType>;
      CandidateAlreadyLeaving: AugmentedError<ApiType>;
      CandidateBondBelowMin: AugmentedError<ApiType>;
      CandidateCannotLeaveYet: AugmentedError<ApiType>;
      CandidateDNE: AugmentedError<ApiType>;
      CandidateExists: AugmentedError<ApiType>;
      CandidateNotAggregating: AugmentedError<ApiType>;
      CandidateNotAggregatingUnderAggregator: AugmentedError<ApiType>;
      CandidateNotApprovedByAggregator: AugmentedError<ApiType>;
      CandidateNotLeaving: AugmentedError<ApiType>;
      CannotDelegateIfLeaving: AugmentedError<ApiType>;
      CannotGoOnlineIfLeaving: AugmentedError<ApiType>;
      CannotSetBelowMin: AugmentedError<ApiType>;
      CollatorRoundRewardsDNE: AugmentedError<ApiType>;
      DelegationBelowMin: AugmentedError<ApiType>;
      DelegationDNE: AugmentedError<ApiType>;
      DelegatorAlreadyLeaving: AugmentedError<ApiType>;
      DelegatorCannotLeaveYet: AugmentedError<ApiType>;
      DelegatorDNE: AugmentedError<ApiType>;
      DelegatorDNEInDelegatorSet: AugmentedError<ApiType>;
      DelegatorDNEinTopNorBottom: AugmentedError<ApiType>;
      DelegatorExists: AugmentedError<ApiType>;
      DelegatorNotLeaving: AugmentedError<ApiType>;
      DelegatorRewardsDNE: AugmentedError<ApiType>;
      ExceedMaxCollatorCandidates: AugmentedError<ApiType>;
      ExceedMaxDelegationsPerDelegator: AugmentedError<ApiType>;
      ExceedMaxTotalDelegatorsPerCandidate: AugmentedError<ApiType>;
      IncorrectRewardDelegatorCount: AugmentedError<ApiType>;
      InsufficientBalance: AugmentedError<ApiType>;
      InvalidSchedule: AugmentedError<ApiType>;
      MathError: AugmentedError<ApiType>;
      NoWritingSameValue: AugmentedError<ApiType>;
      PendingCandidateRequestAlreadyExists: AugmentedError<ApiType>;
      PendingCandidateRequestNotDueYet: AugmentedError<ApiType>;
      PendingCandidateRequestsDNE: AugmentedError<ApiType>;
      PendingDelegationRequestAlreadyExists: AugmentedError<ApiType>;
      PendingDelegationRequestDNE: AugmentedError<ApiType>;
      PendingDelegationRequestNotDueYet: AugmentedError<ApiType>;
      StakingLiquidityTokenAlreadyListed: AugmentedError<ApiType>;
      StakingLiquidityTokenNotListed: AugmentedError<ApiType>;
      TargettedAggregatorSameAsCurrent: AugmentedError<ApiType>;
      TooLowCandidateCountToLeaveCandidates: AugmentedError<ApiType>;
      TooLowCandidateCountWeightHintCancelLeaveCandidates: AugmentedError<ApiType>;
      TooLowCandidateCountWeightHintJoinCandidates: AugmentedError<ApiType>;
      TooLowCandidateDelegationCountToDelegate: AugmentedError<ApiType>;
      TooLowCurrentStakingLiquidityTokensCount: AugmentedError<ApiType>;
      TooLowDelegationCountToDelegate: AugmentedError<ApiType>;
      TooLowDelegationCountToLeaveDelegators: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    proofOfStake: {
      CalculateRewardsAllMathError: AugmentedError<ApiType>;
      CalculateRewardsMathError: AugmentedError<ApiType>;
      /**
       * Cannot schedule rewards in past
       **/
      CannotScheduleRewardsInPast: AugmentedError<ApiType>;
      DeprecatedExtrinsic: AugmentedError<ApiType>;
      LiquidityCheckpointMathError: AugmentedError<ApiType>;
      LiquidityLockedIn3rdpartyRewards: AugmentedError<ApiType>;
      MathError: AugmentedError<ApiType>;
      /**
       * Math overflow
       **/
      MathOverflow: AugmentedError<ApiType>;
      MissingRewardsInfoError: AugmentedError<ApiType>;
      /**
       * Not a promoted pool
       **/
      NotAPromotedPool: AugmentedError<ApiType>;
      /**
       * Not enought assets
       **/
      NotEnoughAssets: AugmentedError<ApiType>;
      /**
       * Not enough rewards earned
       **/
      NotEnoughRewardsEarned: AugmentedError<ApiType>;
      NoThirdPartyPartyRewardsToClaim: AugmentedError<ApiType>;
      /**
       * Past time calculation
       **/
      PastTimeCalculation: AugmentedError<ApiType>;
      /**
       * Pool does not exist
       **/
      PoolDoesNotExist: AugmentedError<ApiType>;
      SoloTokenPromotionForbiddenError: AugmentedError<ApiType>;
      /**
       * Too little rewards per session
       **/
      TooLittleRewards: AugmentedError<ApiType>;
      /**
       * Too many schedules
       **/
      TooManySchedules: AugmentedError<ApiType>;
      /**
       * Too small volume of the pool
       **/
      TooSmallVolume: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    proxy: {
      /**
       * Account is already a proxy.
       **/
      Duplicate: AugmentedError<ApiType>;
      /**
       * Call may not be made by proxy because it may escalate its privileges.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * Cannot add self as proxy.
       **/
      NoSelfProxy: AugmentedError<ApiType>;
      /**
       * Proxy registration not found.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Sender is not a proxy of the account to be proxied.
       **/
      NotProxy: AugmentedError<ApiType>;
      /**
       * There are too many proxies registered or too many announcements pending.
       **/
      TooMany: AugmentedError<ApiType>;
      /**
       * Announcement, if made at all, was made too recently.
       **/
      Unannounced: AugmentedError<ApiType>;
      /**
       * A call which is incompatible with the proxy type's filter was attempted.
       **/
      Unproxyable: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    rolldown: {
      AddressDeserializationFailure: AugmentedError<ApiType>;
      BalanceOverflow: AugmentedError<ApiType>;
      BlockedByMaintenanceMode: AugmentedError<ApiType>;
      CancelRightsExhausted: AugmentedError<ApiType>;
      EmptyUpdate: AugmentedError<ApiType>;
      InvalidUpdate: AugmentedError<ApiType>;
      L1AssetCreationFailed: AugmentedError<ApiType>;
      L1AssetNotFound: AugmentedError<ApiType>;
      MathOverflow: AugmentedError<ApiType>;
      MultipleUpdatesInSingleBlock: AugmentedError<ApiType>;
      NotEnoughAssets: AugmentedError<ApiType>;
      OnlySelectedSequencerisAllowedToUpdate: AugmentedError<ApiType>;
      OperationFailed: AugmentedError<ApiType>;
      ReadRightsExhausted: AugmentedError<ApiType>;
      RequestDoesNotExist: AugmentedError<ApiType>;
      SequencerAwaitingCancelResolution: AugmentedError<ApiType>;
      SequencerLastUpdateStillInDisputePeriod: AugmentedError<ApiType>;
      TooManyRequests: AugmentedError<ApiType>;
      WrongRequestId: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    sequencerStaking: {
      CantUnstakeWhileInActiveSet: AugmentedError<ApiType>;
      MathOverflow: AugmentedError<ApiType>;
      MaxSequencersLimitReached: AugmentedError<ApiType>;
      NotEligibleToBeSequencer: AugmentedError<ApiType>;
      NotEnoughSequencerStake: AugmentedError<ApiType>;
      OperationFailed: AugmentedError<ApiType>;
      SequencerAlreadyInActiveSet: AugmentedError<ApiType>;
      SequencerIsNotInActiveSet: AugmentedError<ApiType>;
      TestUnstakingError: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    session: {
      /**
       * Registered duplicate key.
       **/
      DuplicatedKey: AugmentedError<ApiType>;
      /**
       * Invalid ownership proof.
       **/
      InvalidProof: AugmentedError<ApiType>;
      /**
       * Key setting account is not live, so it's impossible to associate keys.
       **/
      NoAccount: AugmentedError<ApiType>;
      /**
       * No associated validator ID for account.
       **/
      NoAssociatedValidatorId: AugmentedError<ApiType>;
      /**
       * No keys are associated with this account.
       **/
      NoKeys: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    sudo: {
      /**
       * Sender must be the Sudo account
       **/
      RequireSudo: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    sudoOrigin: {
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    system: {
      /**
       * The origin filter prevent the call to be dispatched.
       **/
      CallFiltered: AugmentedError<ApiType>;
      /**
       * Failed to extract the runtime version from the new runtime.
       * 
       * Either calling `Core_version` or decoding `RuntimeVersion` failed.
       **/
      FailedToExtractRuntimeVersion: AugmentedError<ApiType>;
      /**
       * The name of specification does not match between the current runtime
       * and the new runtime.
       **/
      InvalidSpecName: AugmentedError<ApiType>;
      /**
       * Suicide called when the account has non-default composite data.
       **/
      NonDefaultComposite: AugmentedError<ApiType>;
      /**
       * There is a non-zero reference count preventing the account from being purged.
       **/
      NonZeroRefCount: AugmentedError<ApiType>;
      /**
       * The specification version is not allowed to decrease between the current runtime
       * and the new runtime.
       **/
      SpecVersionNeedsToIncrease: AugmentedError<ApiType>;
      /**
       * the storage queue is empty and cannot accept any new txs
       **/
      StorageQueueFull: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    tokens: {
      /**
       * Cannot convert Amount into Balance type
       **/
      AmountIntoBalanceFailed: AugmentedError<ApiType>;
      /**
       * The balance is too low
       **/
      BalanceTooLow: AugmentedError<ApiType>;
      /**
       * Beneficiary account must pre-exist
       **/
      DeadAccount: AugmentedError<ApiType>;
      /**
       * Value too low to create account due to existential deposit
       **/
      ExistentialDeposit: AugmentedError<ApiType>;
      /**
       * Transfer/payment would kill account
       **/
      KeepAlive: AugmentedError<ApiType>;
      /**
       * Failed because liquidity restrictions due to locking
       **/
      LiquidityRestrictions: AugmentedError<ApiType>;
      /**
       * Failed because the maximum locks was exceeded
       **/
      MaxLocksExceeded: AugmentedError<ApiType>;
      /**
       * Failed because token with given id does not exits
       **/
      TokenIdNotExists: AugmentedError<ApiType>;
      TooManyReserves: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    treasury: {
      /**
       * The spend origin is valid but the amount it is allowed to spend is lower than the
       * amount to be spent.
       **/
      InsufficientPermission: AugmentedError<ApiType>;
      /**
       * Proposer's balance is too low.
       **/
      InsufficientProposersBalance: AugmentedError<ApiType>;
      /**
       * No proposal or bounty at that index.
       **/
      InvalidIndex: AugmentedError<ApiType>;
      /**
       * Proposal has not been approved.
       **/
      ProposalNotApproved: AugmentedError<ApiType>;
      /**
       * Too many approvals in the queue.
       **/
      TooManyApprovals: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    utility: {
      /**
       * Too many calls batched.
       **/
      TooManyCalls: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    vesting: {
      /**
       * Amount being transferred is too low to create a vesting schedule.
       **/
      AmountLow: AugmentedError<ApiType>;
      /**
       * The account already has `MaxVestingSchedules` count of schedules and thus
       * cannot add another one. Consider merging existing schedules in order to add another.
       **/
      AtMaxVestingSchedules: AugmentedError<ApiType>;
      /**
       * Failed to create a new schedule because some parameter was invalid.
       **/
      InvalidScheduleParams: AugmentedError<ApiType>;
      /**
       * The provided vesting index exceeds the current number of vesting schedules
       **/
      InvalidVestingIndex: AugmentedError<ApiType>;
      /**
       * An overflow or underflow has occured
       **/
      MathError: AugmentedError<ApiType>;
      /**
       * No suitable schedule found
       * Perhaps the user could merge vesting schedules and try again
       **/
      NoSuitableScheduleFound: AugmentedError<ApiType>;
      /**
       * The account given is not vesting.
       **/
      NotVesting: AugmentedError<ApiType>;
      /**
       * An index was out of bounds of the vesting schedules.
       **/
      ScheduleIndexOutOfBounds: AugmentedError<ApiType>;
      /**
       * Sudo is not allowed to unlock tokens
       **/
      SudoUnlockIsDisallowed: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    xyk: {
      /**
       * Asset already exists
       **/
      AssetAlreadyExists: AugmentedError<ApiType>;
      /**
       * Asset does not exists
       **/
      AssetDoesNotExists: AugmentedError<ApiType>;
      CalculateCumulativeWorkMaxRatioMathError: AugmentedError<ApiType>;
      CalculateRewardsAllMathError: AugmentedError<ApiType>;
      CalculateRewardsMathError: AugmentedError<ApiType>;
      /**
       * Pool considting of passed tokens id is blacklisted
       **/
      DisallowedPool: AugmentedError<ApiType>;
      /**
       * Division by zero
       **/
      DivisionByZero: AugmentedError<ApiType>;
      /**
       * Asset id is blacklisted
       **/
      FunctionNotAvailableForThisToken: AugmentedError<ApiType>;
      /**
       * Insufficient input amount
       **/
      InsufficientInputAmount: AugmentedError<ApiType>;
      /**
       * Insufficient output amount
       **/
      InsufficientOutputAmount: AugmentedError<ApiType>;
      LiquidityCheckpointMathError: AugmentedError<ApiType>;
      /**
       * Liquidity token creation failed
       **/
      LiquidityTokenCreationFailed: AugmentedError<ApiType>;
      /**
       * Math overflow
       **/
      MathOverflow: AugmentedError<ApiType>;
      MultiBuyAssetCantHaveSamePoolAtomicSwaps: AugmentedError<ApiType>;
      MultiSwapCantHaveSameTokenConsequetively: AugmentedError<ApiType>;
      MultiswapShouldBeAtleastTwoHops: AugmentedError<ApiType>;
      NoRights: AugmentedError<ApiType>;
      /**
       * No such liquidity asset exists
       **/
      NoSuchLiquidityAsset: AugmentedError<ApiType>;
      /**
       * No such pool exists
       **/
      NoSuchPool: AugmentedError<ApiType>;
      /**
       * Not a promoted pool
       **/
      NotAPromotedPool: AugmentedError<ApiType>;
      /**
       * Not enought assets
       **/
      NotEnoughAssets: AugmentedError<ApiType>;
      /**
       * Not enought reserve
       **/
      NotEnoughReserve: AugmentedError<ApiType>;
      /**
       * Not enough rewards earned
       **/
      NotEnoughRewardsEarned: AugmentedError<ApiType>;
      /**
       * Unexpected failure
       **/
      NotMangataLiquidityAsset: AugmentedError<ApiType>;
      /**
       * Past time calculation
       **/
      PastTimeCalculation: AugmentedError<ApiType>;
      /**
       * Pool already Exists
       **/
      PoolAlreadyExists: AugmentedError<ApiType>;
      /**
       * Pool already promoted
       **/
      PoolAlreadyPromoted: AugmentedError<ApiType>;
      PoolIsEmpty: AugmentedError<ApiType>;
      /**
       * Asset ids cannot be the same
       **/
      SameAsset: AugmentedError<ApiType>;
      /**
       * Second asset amount exceeded expectations
       **/
      SecondAssetAmountExceededExpectations: AugmentedError<ApiType>;
      /**
       * Sold Amount too low
       **/
      SoldAmountTooLow: AugmentedError<ApiType>;
      /**
       * Trading blocked by maintenance mode
       **/
      TradingBlockedByMaintenanceMode: AugmentedError<ApiType>;
      /**
       * Unexpected failure
       **/
      UnexpectedFailure: AugmentedError<ApiType>;
      /**
       * Zero amount is not supported
       **/
      ZeroAmount: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
  } // AugmentedErrors
} // declare module
