export default {
  types: {},
  rpc: {
    pending_l2_requests_hash: {
      description: "",
      params: [
        {
          name: "chain",
          type: "Chain",
        },
        {
          name: "at",
          type: "Hash",
          isOptional: true
        }
      ],
      type: "H256"
    },
    pending_l2_requests: {
      description: "",
      params: [
        {
          name: "chain",
          type: "Chain",
        },
        {
          name: 'at',
          type: 'Hash',
          isOptional: true
        }
      ],
      type: "Vec<u8>"
    },
    verify_sequencer_update: {
      description: "",
      params: [
        {
          name: "chain",
          type: "Chain",
        },
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
    get_native_sequencer_update: {
      description: "",
      params: [
        {
          name: "chain",
          type: "Chain",
        },
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
  }
}
