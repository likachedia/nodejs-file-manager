import { open } from 'node:fs/promises';
import { join } from 'path';

const add = async (fileName) => {
    let filehandle;
    const path = join(process.cwd(), fileName);
    try {
        filehandle = await open(path, 'w');
    } catch(err){
        console.error('Operation failed')
    }finally {
        await filehandle?.close();
    }
}

export { add }