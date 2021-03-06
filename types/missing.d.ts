declare module 'is-ci' {
    const isCi: boolean;
    export = isCi;
}

declare module 'xml-escape' {
    function xmlEscape(str: string, ignore?: string): string;
    export default xmlEscape;
}

declare module 'graphlib-dot' {
    import * as graphlib from 'graphlib';
    export const write: (graph: graphlib.Graph) => string;
}

declare module 'file-system-cache' {
    interface Options {
        basePath?: string;
        ns?: string;
    }
    interface Cache {
        getSync: (key: string, defaultValue?: Object) => Object;
        setSync: (key: string, value: Object) => void;
    }
    function fileSystemCache(options: Options): Cache;
    export default fileSystemCache;
}

declare module 'find-cache-dir' {
    interface Options {
        name: string;
        files?: string[];
        cwd?: string;
        create?: boolean;
        thunk?: boolean;
    }
    function resolveFrom(options?: Options): string;
    export default resolveFrom;
}

declare module 'debug' {
    interface Formatters {
        [formatter: string]: Function;
    }

    interface Debugger {
        (formatter: any, ...args: any[]): void;

        enabled: boolean;
        log: Function;
        namespace: string;
    }

    const debug: {
        (namespace: string): debug.Debugger;
        coerce: (val: any) => any;
        disable: () => void;
        enable: (namespaces: string) => void;
        enabled: (namespaces: string) => boolean;

        names: RegExp[];
        skips: RegExp[];

        formatters: Formatters;
    };

    export default debug;
}

declare module '@wojtekmaj/babylon-walk' {
    import * as babelTypes from 'babel-types';
    export type NodeTypes =
        | babelTypes.ImportDeclaration
        | babelTypes.ExportNamedDeclaration
        | babelTypes.ExportAllDeclaration
        | babelTypes.TSImportEqualsDeclaration
        | babelTypes.CallExpression;
    export interface Visitors<V> {
        ImportDeclaration?: V;
        ExportNamedDeclaration?: V;
        ExportAllDeclaration?: V;
        TSImportEqualsDeclaration?: V;
        CallExpression?: V;
    }
    export type SimpleVisitor = (node: NodeTypes, state: any) => void;
    export function simple(node: NodeTypes, visitors: Visitors<SimpleVisitor>, state: any): void;
}
