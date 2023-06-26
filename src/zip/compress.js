import { createReadStream, createWriteStream, existsSync } from 'fs';
import { createBrotliCompress } from 'zlib';

const compress = async (args) => {
    const [source, ziped] = args;
    const readStream = createReadStream(source);
    const writeStream = createWriteStream(ziped);
    const brot = createBrotliCompress();
  
    readStream.pipe(brot).pipe(writeStream);
  
    writeStream.on('error', (error) => {
      console.error('Operation failed');
    });
};

export default compress;