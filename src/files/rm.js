import fs from "node:fs/promises";
import { updateCurrentPath } from '../util/updateCurrentPath.js';

const remove = async (args) => {
    if(args.length > 1) console.error('Invalid argument');   
    const path = updateCurrentPath(args[0]);
    try {
        await fs.rm(path);
    } catch (e) {
       console.error('Operation failed');
    }
};

export { remove }