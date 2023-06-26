import fs from "node:fs";
import { updateCurrentPath } from '../util/updateCurrentPath.js';

const read = async (args) => {
    if(args.length > 1) console.error('Invalid argument');   
    const path = updateCurrentPath(args[0]);
    try {
        const readableStream = fs.createReadStream(path);
        readableStream.on("data", (chunk) => {
            console.log(chunk.toString())
        });
        readableStream.on('error', (error) => {
            console.error('Operation failed')
        });
    } catch (error) {
        console.error('Operation failed')
    }

};

export { read }