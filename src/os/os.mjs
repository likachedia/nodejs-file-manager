import { cpus, arch,  homedir, userInfo, EOL} from 'os';

const osInfo = (arg) => {
    console.log(arg)
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
            console.log('defaulte texst');
            break;
    }        
};

// const cpusOfOs = await cpusInfo();
// const archOfOs =  arch();
// const homedirOfOs = homedir();
// const hostnameOfOs = userInfo().username;
// const eol = `${EOL}`;
export {osInfo}