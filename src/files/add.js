import { open } from 'node:fs/promises';
import { join } from 'path';

const add = async (args) => {
    if(args?.length != 1) {
        console.error('Invalid argument');
        return;
    };  
    let filehandle;
    const path = join(process.cwd(), args[0]);
    try {
        filehandle = await open(path, 'w');
    } catch(err){
        console.error('Operation failed');
    }finally {

        await filehandle?.close();
    }
}

export { add }