type Brand<Type, Name> = Type & { readonly __brand: Name };

export type Trader = Brand<string, "trader">;

export enum TraderAction {
  OPEN_POSITION,
  CLOSE_POSITION,
}

export type LastTraderActions = {
  [key: Trader]: TraderAction;
};
