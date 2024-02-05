import { promisify } from "node:util";
import { pipeline } from "node:stream";
import { createBrotliDecompress } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";

const decompress = async (args) => {
    const [source, ziped] = args;
    const readStream = createReadStream(source);
    const writableStream = createWriteStream(ziped);
    const unzipStream = createBrotliDecompress();

    const pipe = promisify(pipeline);

    try {
        await pipe(readStream, unzipStream, writableStream);
    } catch (e) {
        console.log('Operation failed');
    }
};

export default decompress;