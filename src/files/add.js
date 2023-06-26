import { open } from 'node:fs/promises';
import { join } from 'path';

const add = async (args) => {
    if(args.length > 1) console.error('Invalid argument');   
    const fileName = args[0];
    let filehandle;
    const path = join(process.cwd(), fileName); // or resovle?
    try {
        filehandle = await open(path, 'w');
    } catch(err){
        console.error('Operation failed');
    }finally {
        await filehandle?.close();
    }
}

export { add }