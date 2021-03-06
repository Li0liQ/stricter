import * as appRoot from 'app-root-path';
import * as path from 'path';
import { ConfigFile } from './../types';

export default (configPath?: string): ConfigFile => {
    if (configPath) {
        return {
            filePath: configPath,
            config: require(configPath),
        };
    }

    const rootDir = appRoot.toString();
    const defaultConfigPath = path.join(rootDir, 'stricter.config.js');

    return {
        filePath: defaultConfigPath,
        config: require(defaultConfigPath),
    };
};
