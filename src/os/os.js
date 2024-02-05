import { arch,  homedir, userInfo, EOL} from 'os';
import { cpusInfo } from './cpus.js';

const osInfo = (args) => {
    if(args.length > 1) console.error('Invalid argument'); 
    switch (args[0]) {
        case '--EOL':
            console.log(JSON.stringify(EOL));
            break;
        case '--cpus':
            console.table(cpusInfo());
            break;
        case '--homedir':
            console.log(homedir());
            break;
        case '--username':
            console.log(userInfo().username);
            break;
        case '--architecture':
            console.log(arch());
            break;
        default:
            console.error('Invalid argument');
            break;
    }        
};

export {osInfo}