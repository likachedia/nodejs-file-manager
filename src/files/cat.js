import fs from "node:fs";
import { stdout } from "node:process";


const read = async (source) => {
    try {
        const readableStream = fs.createReadStream(source);
        readableStream.on("data", (chunk) => {
            // stdout.write(chunk.toString());
            console.log(chunk.toString())
        });
        readableStream.on('error', (chunk) => {
            // stdout.write(chunk.toString());
            console.error('Operation failed')
        });
    } catch (error) {
        console.error('Operation failed')
    }

};

export { read }