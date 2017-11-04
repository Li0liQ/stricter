export interface CosmiConfig {
    filepath: string;
    config: {
        [prop: string]: any;
    };
}

export enum Level {
    WARNING = 'warning',
    ERROR = 'error',
}

export interface RuleUsage {
    include?: string;
    exclude?: string;
    level?: Level;
}

export interface Config {
    root: string;
    rulesDir?: string;
    rules: {
        [ruleName: string]: RuleUsage | RuleUsage[];
    };
}

export enum RuleRequirement {
    NONE = 'none',
    CONTENTS = 'contents',
    AST = 'ast',
}

export interface RuleApplicationResult {
    messages: string[];
}

export interface RuleApplicationResults {
    [filePath: string]: RuleApplicationResult;
}

export interface RuleDefinition {
    requirement: RuleRequirement;
    onFile: (fileData: FileData) => RuleApplicationResult;
    onProject: () => RuleApplicationResult;
}

export interface RuleDefinitions {
    [ruleName: string]: RuleDefinition;
}

export interface FileToRule {
    [fileName: string]: RuleDefinitions;
}

export interface FileData {
    ast?: any;
    contents?: string;
}

export interface FileToData {
    [fileName: string]: FileData;
}