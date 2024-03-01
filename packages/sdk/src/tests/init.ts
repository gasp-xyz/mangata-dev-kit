import { Mangata } from "../mangata";
import { signTx } from "../utils/signTx";
import { logger, setLoggerOptions } from "../utils/mangataLogger";
import { expect, it } from "vitest";
import { Address, MangataGenericEvent, MangataInstance, TokenAmount } from "../types/common";
import { v4 as uuidv4 } from "uuid";
import { Keyring } from "@polkadot/api";

setLoggerOptions({
  type: "pretty",
  hideLogPositionForProduction: false
})

export const instance = Mangata.instance(["ws://127.0.0.1:9946"])

export type ExtrinsicData = {
  data: MangataGenericEvent[];
  searchTerms: string[];
};

export const createUser = (keyring: Keyring, name?: string) => {
  const user: string = name ? name : "//testUser_" + uuidv4();
  const account = keyring.createFromUri(user);
  keyring.addPair(account);
  return account;
};

export const getExtrinsicData = (result: ExtrinsicData) => {
  const { data, searchTerms } = result;
  return data.filter((e) => {
    return (
      e.method !== null &&
      searchTerms.every((filterTerm) =>
        (
          JSON.stringify(e.event.toHuman()) +
          JSON.stringify(e.event.toHuman().data)
        ).includes(filterTerm)
      )
    );
  });
};

export const createToken = async (
  instance: MangataInstance,
  address: Address,
  amount: TokenAmount
) => {
  const api = await instance.api();
  return api.tx.sudo.sudo(api.tx.tokens.create(address, amount));
};

export const createMangataToken = async (
  instance: MangataInstance,
  address: Address,
  amount: TokenAmount
) => {
  const api = await instance.api();
  return api.tx.sudo.sudo(api.tx.tokens.mint("0", address, amount));
};

it("It should check whether instance is connected", async () => {
  const api = await instance.api()
  expect(api.isConnected).toBe(true)
})

it("It submit signed tx and wait for result", async () => {
  const api = await instance.api()

  const keyring = new Keyring({ type: "sr25519" });
  let alice = keyring.addFromUri("//Alice");
  let bob = keyring.addFromUri("//Alice");

  let tx = api.tx.tokens.transfer(bob.address, 0, 1000000000000000);

  let resp = await signTx(api, tx, alice);
  console.log(resp);

})
