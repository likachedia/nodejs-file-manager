import { updateCurrentPath } from '../util/updateCurrentPath.js';
import { resolve } from 'path';

const up = async () => {
    const path = resolve(process.cwd(), '../')
    try {
        process.chdir(path);
      } catch(err) {
        console.log('Invalid argument');
    }
}

export { up }