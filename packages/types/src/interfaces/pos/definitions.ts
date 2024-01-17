export default {
  types: {},
  rpc: {
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
  }
}