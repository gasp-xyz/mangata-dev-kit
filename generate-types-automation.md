In the Mangata Node repository, the **pr-automation-types.yml** process is triggered, which helps release type definitions, types, and sdk. If you want to add your own custom RPC and types, please follow these instructions:

1. In the **packages/type-definitions** directory, include **rpc** and **types**.
2. Incorporate new RPCs and types under **mTypes** and **mRpc**.
3. After that you need to add those **rpc** and **types** into **packages/types**
4. Within the **interfaces/definitions.ts** file, append new types if any changes occur
5. For new RPCs like **xyk** or **pos**, insert their RPC into either **interfaces/xyk/definitions.ts** or **interfaces/pos/definitions.ts**.
6. If there is new rpc you need to create a new folder inside **interfaces** directory like for example **rolldown** directory and inside this directory you need to create **definitions.ts** file
7. Inside the **interfaces/rolldown/definitions.ts** file, ensure to export these RPCs as defaults (refer to the **xyk** or **pos** directory for guidance)
8. These steps encompass the process of adding new RPCs and Types.
9. Subsequently, proceed to push to the branch.
10. Once the changes are committed to the branch, trigger the CI on the mangata node and it will trigger again this workflow in mangata-dev-kit.
