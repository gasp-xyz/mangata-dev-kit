export default {
  types: {},
  rpc: {
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
}