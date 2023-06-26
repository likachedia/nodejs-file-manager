import { cpus } from 'os';

export const cpusInfo = () => {
    return cpus().map(cpu => ( {model: cpu.model, 'clock rate': cpu.speed}));
}