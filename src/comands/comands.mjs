
const rules = (comand, arg) => {
    switch (comand) {
        case 'os':
            rl.close();
            break;
        case 'rn':
            rl.close();
            break;
        case 'cat':
            rl.close();
            break;
        case 'ls':
            rl.close();
            break;
        case 'cat':
            rl.close();
            break;
        case 'add':
            rl.close();
            break;
        case '.exit':
            rl.close();
        break;
        default:
            rl.prompt();
            break;
    }
}