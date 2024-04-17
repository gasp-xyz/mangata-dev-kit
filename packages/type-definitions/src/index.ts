import { OverrideBundleDefinition } from "@polkadot/types/types";

export const mTypes = {
  ShufflingSeed: {
    seed: "H256",
    proof: "H512"
  },
  MultiSignature: {
    _enum: {
      Ed25519: 'Ed25519Signature',
      Sr25519: 'Sr25519Signature',
      Ecdsa: 'EcdsaSignature',
      Eth: 'EcdsaSignature',
    }
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
  L1Update: {
    pendingDeposits: "Vec<Deposit>",
    pendingCancelResolutions: "Vec<CancelResolution>",
    pendingWithdrawalResolutions: "Vec<WithdrawalResolution>",
    pendingL2UpdatesToRemove: "Vec<L2UpdatesToRemove>",
  },
  Deposit: {
    requestId: "RequestId",
    depositRecipient: "[u8; 20]",
    tokenAddress: "[u8; 20]",
    amount: "U256",
    timeStamp: "U256"
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
    timeStamp: "U256"
  },
  WithdrawalResolution: {
    requestId: "RequestId",
    l2RequestId: "u128",
    status: "bool",
    timeStamp: "U256"
  },
  L2UpdatesToRemove: {
    requestId: "RequestId",
    l2UpdatesToRemove: "Vec<u128>",
    timeStamp: "U256"
  }
};

export const mRpc = {
  xyk: {
    calculate_buy_price: {
      description:
        "Calculates and returns sold_token_amount while providing bought_token_amount and respective reserves",
      params: [
        {
          name: "input_reserve",
          type: "Balance"
        },
        {
          name: "output_reserve",
          type: "Balance"
        },
        {
          name: "sell_amount",
          type: "Balance"
        }
      ],
      type: "Balance"
    },
    calculate_sell_price: {
      description:
        "Calculates and returns bought_token_amount while providing sold_token_amount and respective reserves",
      params: [
        {
          name: "input_reserve",
          type: "Balance"
        },
        {
          name: "output_reserve",
          type: "Balance"
        },
        {
          name: "sell_amount",
          type: "Balance"
        }
      ],
      type: "Balance"
    },
    get_burn_amount: {
      description:
        "Returns amounts of tokens received by burning provided liquidity_token_amount in pool of provided token ids",
      params: [
        {
          name: "first_asset_id",
          type: "TokenId"
        },
        {
          name: "second_asset_id",
          type: "TokenId"
        },
        {
          name: "liquidity_asset_amount",
          type: "Balance"
        }
      ],
      type: "(Balance,Balance)"
    },
    calculate_sell_price_id: {
      description:
        "Same as calculate_sell_price, but providing token_id instead of reserves. Reserves are fetched by function.",
      params: [
        {
          name: "sold_token_id",
          type: "TokenId"
        },
        {
          name: "bought_token_id",
          type: "TokenId"
        },
        {
          name: "sell_amount",
          type: "Balance"
        }
      ],
      type: "Balance"
    },
    calculate_buy_price_id: {
      description:
        "Same as calculate_buy_price, but providing token_id instead of reserves. Reserves are fetched by function.",
      params: [
        {
          name: "sold_token_id",
          type: "TokenId"
        },
        {
          name: "bought_token_id",
          type: "TokenId"
        },
        {
          name: "buy_amount",
          type: "Balance"
        }
      ],
      type: "Balance"
    },
    calculate_rewards_amount: {
      description:
        "Calculate rewards amount of liquidity token id for the user",
      params: [
        {
          name: "user",
          type: "AccountId"
        },
        {
          name: "liquidity_asset_id",
          type: "TokenId"
        }
      ],
      type: "Balance"
    },
    calculate_balanced_sell_amount: {
      description:
        "Calculates how much amount x we need to swap from total_amount, so that after y = swap(x), the resulting balance equals (total_amount - x) / y = pool_x / pool_y - the resulting amounts can then be used to `mint_liquidity` with minimal leftover after operation",
      params: [
        {
          name: "total_amount",
          type: "Balance"
        },
        {
          name: "reserve_amount",
          type: "Balance"
        }
      ],
      type: "Balance"
    },
    get_max_instant_unreserve_amount: {
      description: "Instant unreserve amount",
      params: [
        {
          name: "user",
          type: "AccountId"
        },
        {
          name: "liquidity_asset_id",
          type: "TokenId"
        }
      ],
      type: "Balance"
    },
    get_max_instant_burn_amount: {
      description: "",
      params: [
        {
          name: "user",
          type: "AccountId"
        },
        {
          name: "liquidity_asset_id",
          type: "TokenId"
        }
      ],
      type: "Balance"
    },
    is_sell_asset_lock_free: {
      description: "",
      params: [
        {
          name: "path",
          type: "Vec<TokenId>"
        },
        {
          name: "input_amount",
          type: "Balance"
        }
      ],
      type: "Option<bool>"
    },
    is_buy_asset_lock_free: {
      description: "",
      params: [
        {
          name: "path",
          type: "Vec<TokenId>"
        },
        {
          name: "input_amount",
          type: "Balance"
        }
      ],
      type: "Option<bool>"
    },
    get_tradeable_tokens: {
      description: "",
      params: [],
      type: "Vec<RpcAssetMetadata<TokenId>>"
    },
    get_liq_tokens_for_trading: {
      description: "",
      params: [],
      type: "Vec<TokenId>"
    }
  },
  pos: {
    calculate_native_rewards_amount: {
      description: "Calculates amount of available native rewards",
      params: [
        {
          name: "account",
          type: "AccountId"
        },
        {
          name: "liquidity_token",
          type: "TokenId"
        }
      ],
      type: "Balance"
    },
    calculate_3rdparty_rewards_amount: {
      description: "Calculates amount of available 3rdparty rewards",
      params: [
        {
          name: "account",
          type: "AccountId"
        },
        {
          name: "liquidity_token",
          type: "TokenId"
        },
        {
          name: "rewards_token",
          type: "TokenId"
        }
      ],
      type: "Balance"
    },
    calculate_3rdparty_rewards_all: {
      description: "Calculates all amount of available 3rdparty rewards",
      params: [
        {
          name: "account",
          type: "AccountId"
        }
      ],
      type: "Vec<(TokenId, TokenId, Balance)>"
    }
  },
  rolldown: {
    pending_updates_hash: {
      description: "",
      params: [
        {
          name: "at",
          type: "Hash",
          isOptional: true
        }
      ],
      type: "H256"
    },
    pending_updates: {
      description: "",
      params: [
        {
          name: 'at',
          type: 'Hash',
          isOptional: true
        }
      ],
      type: "Vec<u8>"
    },
    verify_pending_requests: {
      description: "",
      params: [
        {
          name: "hash",
          type: "H256"
        },
        {
          name: "request_id",
          type: "u128"
        },
        {
          name: 'at',
          type: 'Hash',
          isOptional: true
        }
      ],
      type: "bool"
    },
    get_native_l1_update: {
      description: "",
      params: [
        {
          name: "hex_payload",
          type: "String"
        },
        {
          name: 'at',
          type: 'Hash',
          isOptional: true
        }
      ],
      type: "Option<L1Update>"
    }
  },
  metamask: {
    get_eip712_sign_data: {
      description: "Returns eip712 compatible SignedData V4 struct",
      params: [
        {
          name: "call",
          type: "String"
        },
      ],
      type: "String"
    }
  }
};

export const mangataTypesBundleForPolkadotApps: OverrideBundleDefinition = {
  types: [
    {
      minmax: [0, undefined],
      types: mTypes
    }
  ],
  rpc: mRpc
};
