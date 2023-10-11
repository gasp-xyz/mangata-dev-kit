import { Mangata } from "../mangata";
import { expect, it } from "vitest";
import { Address, MangataGenericEvent, MangataInstance, TokenAmount } from "../types/common";
import { v4 as uuidv4 } from "uuid";
import { Keyring } from "@polkadot/api";

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