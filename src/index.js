import { parseUsername } from './cliArgs/parseArgs.mjs';
import { parseLine } from './util/parse.mjs';
import { createInterface } from 'readline';
import { fileURLToPath } from 'url';
import { dirname, resolve, parse } from 'path';
import { exit } from 'process';
import { homedir } from 'os';

process.chdir(homedir());

const username = parseUsername()[0] ?? 'Anonimouse';
const welcomeText = `Welcome to the File Manager, ${username}!`;
const goodbayText = `Thank you for using File Manager, ${username}, goodbye!`;
console.log(welcomeText);
console.log(`You are currently in ${process.cwd()}`);
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    // prompt: ``
});
// process.cwd()
// rl.prompt();
rl.on('line', async (line) => {
    switch (line.trim()) {
        case '.exit':
            rl.close();
            break;
        default:
            await parseLine(line.trim());
            console.log(`You are currently in ${process.cwd()}`);
            break;
    }
}).on('close', () => {
    console.log(goodbayText);
    process.nextTick(() => exit())
});