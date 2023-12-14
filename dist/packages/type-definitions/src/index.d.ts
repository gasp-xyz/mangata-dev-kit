import { OverrideBundleDefinition } from "@polkadot/types/types";
export declare const TEST = "THIS IS A TEST";
export declare const mTypes: {
    ShufflingSeed: {
        seed: string;
        proof: string;
    };
    Header: {
        parentHash: string;
        number: string;
        stateRoot: string;
        extrinsicsRoot: string;
        digest: string;
        seed: string;
        count: string;
    };
    RpcAssetMetadata: {
        tokenId: string;
        decimals: string;
        name: string;
        symbol: string;
    };
    TokenId: string;
};
export declare const mRpc: {
    xyk: {
        calculate_buy_price: {
            description: string;
            params: {
                name: string;
                type: string;
            }[];
            type: string;
        };
        calculate_sell_price: {
            description: string;
            params: {
                name: string;
                type: string;
            }[];
            type: string;
        };
        get_burn_amount: {
            description: string;
            params: {
                name: string;
                type: string;
            }[];
            type: string;
        };
        calculate_sell_price_id: {
            description: string;
            params: {
                name: string;
                type: string;
            }[];
            type: string;
        };
        calculate_buy_price_id: {
            description: string;
            params: {
                name: string;
                type: string;
            }[];
            type: string;
        };
        calculate_rewards_amount: {
            description: string;
            params: {
                name: string;
                type: string;
            }[];
            type: string;
        };
        calculate_balanced_sell_amount: {
            description: string;
            params: {
                name: string;
                type: string;
            }[];
            type: string;
        };
        get_max_instant_unreserve_amount: {
            description: string;
            params: {
                name: string;
                type: string;
            }[];
            type: string;
        };
        get_max_instant_burn_amount: {
            description: string;
            params: {
                name: string;
                type: string;
            }[];
            type: string;
        };
        is_sell_asset_lock_free: {
            description: string;
            params: {
                name: string;
                type: string;
            }[];
            type: string;
        };
        is_buy_asset_lock_free: {
            description: string;
            params: {
                name: string;
                type: string;
            }[];
            type: string;
        };
        get_tradeable_tokens: {
            description: string;
            params: never[];
            type: string;
        };
        get_liq_tokens_for_trading: {
            description: string;
            params: never[];
            type: string;
        };
    };
    pos: {
        calculate_native_rewards_amount: {
            description: string;
            params: {
                name: string;
                type: string;
            }[];
            type: string;
        };
        calculate_3rdparty_rewards_amount: {
            description: string;
            params: {
                name: string;
                type: string;
            }[];
            type: string;
        };
        calculate_3rdparty_rewards_all: {
            description: string;
            params: {
                name: string;
                type: string;
            }[];
            type: string;
        };
    };
};
export declare const mangataTypesBundleForPolkadotApps: OverrideBundleDefinition;
