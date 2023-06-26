import { osInfo } from '../os/os.mjs';
import { list } from '../files/list.mjs';
import { resolve, isAbsolute, join } from 'path';
import { add } from '../files/add.js';
import { remove } from '../files/rm.js';
import { read } from '../files/cat.js';

export function updateCurrentPath(inputPath) {
  try {
    if (isAbsolute(inputPath)) {
      return resolve(inputPath);
    } else {
      return join(resolve(process.cwd()), inputPath);
    }
  } catch(err) {
    console.log('Invalid argument');
  }

}
const parseLine = async (args) => {
    const command = args.split(' ')[0].trim();
    const arg = args.split(' ')[1];
    if(command == 'os') {
        osInfo(arg);
    } else if(command == 'cd'){
        const newDir = updateCurrentPath(arg);
        try {
          process.chdir(newDir);
        } catch(err) {
          console.log('Invalid argument');
        }
        
    } else if(command == 'ls') {
        list()
    } else if(command == 'add') {
        add(arg)
    } else if(command == 'rm') {
      const path = updateCurrentPath(arg);
      remove(path)
    } else if(command == 'cat') {
      const path = updateCurrentPath(arg);
      read(path)
    }
};

export { parseLine }