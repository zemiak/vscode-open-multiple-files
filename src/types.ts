
/* TYPES */

interface IConfig {
  exclude: string,
  limit: number;
  defaultGlob: string;
  defaultGlobCursorPosition: number;
}

interface IContextMenuObj {
  fsPath: string;
  external: string;
  path: string;
  scheme: string;
}

/* EXPORT */

export {IConfig, IContextMenuObj};
