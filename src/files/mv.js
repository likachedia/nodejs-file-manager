import fs from "fs";
import { resolve, parse } from "node:path";
import { pipeline } from "node:stream";
import { updateCurrentPath } from '../util/updateCurrentPath.js';

const mv = async (args) => {
    if(args?.length != 2) {
        console.error('Invalid argument');
        return;
    };   

    try {
        const path = updateCurrentPath(args[0]);
        const { base } = parse(path);
        const path2 = resolve(args[1], base);
        const readableStream = fs.createReadStream(path);
        const writableStream = fs.createWriteStream(path2);
        pipeline(readableStream, writableStream, () => {
            fs.unlink(path, () => {console.log(path)});
        });
        console.log(`You are currently in ${process.cwd()}`);
    } catch (error) {
        console.error('Operation failed')
    }

};

export { mv };