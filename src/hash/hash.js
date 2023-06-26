import fs from "node:fs/promises";
import { createHash } from "node:crypto";
import { updateCurrentPath } from '../util/updateCurrentPath.js';


const calculateHash = async (args) => {
    if(args?.length != 1) {
        console.error('Invalid argument');
        return;
    }; 
    const sourceFile = updateCurrentPath(args[0]);
    try {
        const content = await fs.readFile(sourceFile, "utf-8");
        const hash = createHash("sha256").update(content).digest("hex");
        console.log(hash);
    } catch (e) {
        console.error('Operation failed');
    }
};

export default calculateHash;