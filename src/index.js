import { parseUsername } from './cliArgs/parseArgs.mjs';
// import { cpusOfOs, archOfOs, homedirOfOs, hostnameOfOs, eol } from './os/os.mjs';
import { parseLine } from './util/parse.mjs';
import { createInterface } from 'readline';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(dirname(fileURLToPath(import.meta.url)));
const username = parseUsername()[0] ?? 'Anonimouse';
const welcomeText = `Welcome to the File Manager, ${username}!`;
const goodbayText = `Thank you for using File Manager, ${username}, goodbye!`;
console.log(welcomeText);

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: ``
});
// process.cwd()
rl.prompt();
rl.on('line', async (line) => {
    switch (line.trim()) {
        case '.exit':
            rl.close();
            break;
        default:
            // sentence = line + '\n'
            // writableStream.write(sentence);
            // rl.input();
            await parseLine(line.trim());
            console.log(`You are currently in ${__dirname}`);
            break;
    }
}).on('close', () => {
    console.log(goodbayText);
    setTimeout(() => {
        process.exit(0);
    }, 100);
});

// case 'cd':          
// console.log(`You are currently in ${process.cwd()}`);
// break;
// case 'os --EOL':
// console.log(eol);
// break;
// case 'os --homedir':
// console.log(homedirOfOs);
// break;
// case 'os --username':
// console.log(hostnameOfOs);
// break;
// case 'os --architecture':
// console.log(archOfOs);
// break;
// case 'os --cpus':
// console.table(cpusOfOs);
// break;