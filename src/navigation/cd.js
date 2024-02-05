import { updateCurrentPath } from '../util/updateCurrentPath.js';

const cd = async (args) => {
    if(args.length > 1) console.error('Invalid argument');
    const path = updateCurrentPath(args[0]);
    try {
        process.chdir(path);
      } catch(err) {
        console.log('Invalid argument');
    }
}

export { cd }