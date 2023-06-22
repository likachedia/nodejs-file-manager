import { osInfo } from '../os/os.mjs';

const parseLine = async (args) => {
    console.log(args, 'from parse 0');
    const x = typeof args.split(' ')[0] == 'string';
    const firstArg = args.split(' ')[0].trim();
    console.log(`firstarg is${firstArg}and`);
    if(firstArg == 'os') {
        console.log(args.split('')[0], 'from parse');
        osInfo(args.split(' ')[1]);
    } else {
        console.log(args.split('')[1], '3');
    }
};

export { parseLine }