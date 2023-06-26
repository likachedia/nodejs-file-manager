import fs from "node:fs/promises";

const remove = async (path) => {
    try {
        await fs.rm(path);
    } catch (e) {
       console.error('Operation failed');
    }
};

export { remove }