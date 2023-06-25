import { cpus, arch,  homedir, userInfo, EOL} from 'os';

const osInfo = (arg) => {
    switch (arg) {
        case '--EOL':
            console.log(EOL);
            break;
        case '--cpus':
            console.table(cpus())
            // return cpus();
            break;
        case '--homedir':
            console.log(homedir());
            // return homedir();
            break;
        case '--username':
            console.log(userInfo().username);
            // return userInfo().username;
            break;
        case '--architecture':
            console.log(arch());
            // return arch();
            break;
        default:
            console.error('Invalid argument');
            break;
    }        
};

export {osInfo}