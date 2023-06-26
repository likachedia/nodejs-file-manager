import fs from "node:fs";
import { updateCurrentPath } from '../util/updateCurrentPath.js';
import { resolve } from "node:path";
import { pipeline } from "node:stream";

const read = async (args) => {
    if(args?.length != 2) {
        console.error('Invalid argument');
        return;
    };   

    try {
        const path = updateCurrentPath(args[0]);
        const { base } = resolve(path);
        const path2 = resolve(args[1], base);
        const readableStream = fs.createReadStream(path);
        const writableStream = fs.createWriteStream(path2);
        pipeline(readableStream, writableStream);
        console.log(`You are currently in ${process.cwd()}`);
    } catch (error) {
        console.error('Operation failed')
    }

};

export { read }