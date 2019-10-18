declare module NodeJS {
  interface Global {
    HermesInternal: any;
  }
}

declare var global: NodeJS.Global;
