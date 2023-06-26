import fs from "node:fs/promises";
import { existsSync } from "node:fs";
import { parse, join } from "node:path";
import { updateCurrentPath } from '../util/updateCurrentPath.js';

const rename = async (args) => {
    if(args?.length !== 2) {
        console.error('Invalid argument');
        return;
    };
    const odlFileName = updateCurrentPath(args[0]);
    const newFileName = join(parse(odlFileName).dir, args[1]);

    try {
        if (!existsSync(newFileName)) await fs.rename(odlFileName, newFileName);
        else {
            console.error("Operation failed");
        }
    } catch (e) {
        console.error("Operation failed");
    }
};

export default rename;