import { cpus, arch,  homedir, userInfo, EOL} from 'os';

const osInfo = (args) => {
    if(args.length > 1) console.error('Invalid argument'); 
    switch (args[0]) {
        case '--EOL':
            console.log(JSON.stringify(EOL));
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