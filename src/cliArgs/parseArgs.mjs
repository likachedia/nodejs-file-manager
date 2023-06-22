const parseUsername = () => {
    return process.argv.filter((arg, index) => arg.includes('--username'))
    .map(arg => arg.split('=')[1]);
};

const parseArgs = (cliArg) => {
    
}

export {
    parseUsername,
    parseArgs,
}