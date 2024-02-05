import { parseUsername } from './cliArgs/parseArgs.js';
import { parseLine } from './util/parse.js';
import { createInterface } from 'readline';
import { exit } from 'process';
import { homedir } from 'os';

process.chdir(homedir());

const username = parseUsername()[0] ?? 'Anonymous';
const welcomeText = `Welcome to the File Manager, ${username}!`;
const goodbyeText = `Thank you for using File Manager, ${username}, goodbye!`;
console.log(welcomeText);
console.log(`You are currently in ${process.cwd()}`);
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: ``
});
rl.prompt();
rl.on('line', async (line) => {
    switch (line.trim()) {
        case '.exit':
            rl.close();
            break;
        default:
            await parseLine(line.trim());
            break;
    }
}).on('close', () => {
    console.log(goodbyeText);
    process.nextTick(() => exit())
});