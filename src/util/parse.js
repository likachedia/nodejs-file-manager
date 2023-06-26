import { osInfo } from '../os/os.js';
import { list } from '../files/list.js';
import { add } from '../files/add.js';
import { remove } from '../files/rm.js';
import { read } from '../files/cat.js';
import { commands } from '../comands/comands.js';
import { cd } from '../navigation/cd.js';
import { up } from '../navigation/up.js';
import compress from '../zip/compress.js';
import decompress from '../zip/decompress.js';
import calculateHash from '../hash/hash.js';
import rename from '../files/rn.js';
import { cp } from '../files/cp.js';

const parseLine = async (args) => {
    const [command, ...arg] = args.includes('\'') ? args.split('\'').filter(entry => entry.trim() != '') : args.split(' ');
    switch(command.trim()) {
      case commands.os:
        osInfo(arg);
        break;
      case commands.add:
        add(arg);
        break;
      case commands.ls:
        list();
        break;
      case commands.cd:
        cd(arg);
        break;
      case commands.rm:
        remove(arg)
        break;     
      case commands.cat:
        read(arg);
        break;
      case commands.compress:
        compress(arg);
        break;
      case commands.decompress:
        decompress(arg);
          break;
      case commands.hash:
        calculateHash(arg);
        break;
      case commands.rn:
          rename(arg);
          break;
      case commands.up:
            up();
            break;
      case commands.cp:
        cp(arg);
        break;         
      default: 
        console.log('Invalid argument');
        break;             
    }
  console.log(`You are currently in ${process.cwd()}`);
};

export { parseLine }