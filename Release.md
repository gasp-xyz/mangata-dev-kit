# How to Make a Release Process

**IMPORTANT**
To contribute effectively to this monorepo, it is essential to adhere to conventional commits in a specific format, 
as illustrated below:

When working on changes for the SDK, confine your modifications solely to the packages/sdk directory. 
Likewise, if your changes pertain exclusively to types, modify only the packages/types directory. 
GitHub actions are configured to trigger based on these specific directories, 
and we aim to avoid simultaneous releases of multiple packages. 
Therefore, commits should follow this structure:
```shell
feat: add new method to query object

[only @mangata-finance/sdk]
```
In this example, we have appended a bracketed footer to the commit specifying @mangata-finance/sdk. 
This signifies that only the SDK will undergo a release using semantic-release, 
and this commit will be incorporated into the release notes for the SDK.

```shell
feat: update types

[only @mangata-finance/types]
```
Alternatively,
```shell
feat: add new rpc

[only @mangata-finance/type-definitions]
```

These examples demonstrate the correct format for commits within this monorepo.

Here is a step-by-step guide to the release process:

1. Create a branch from the main branch.
2. Make the necessary code changes within the specified package directories.
3. If you intend to generate a pre-release based on your alterations, create an rc/sdk/* (or rc/types/* or rc/definitions/*) branch from your working branch. This will activate pre-release processes using GitHub actions tailored to the specific packages you modified.
4. After confirming everything is in order, initiate a pull request (PR) to merge your changes into the main branch.
5. Following the successful merge into the main branch, the release process will be executed automatically.