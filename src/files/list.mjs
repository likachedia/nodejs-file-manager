import fs from "node:fs/promises";
import { resolve, dirname  } from 'node:path';

const list = async () => {
    const files = await fs.readdir(process.cwd());
    const data = files.map( async (file) => {
      const stat = await fs.lstat(file);
      const type = stat.isFile() ? 'file' : stat.isDirectory() ? 'directory' : 'other';
      return {name: file, type: type};
    })
    Promise.all(data).then(data => console.table(data)).catch(err => console.error(err));
};

export { list } ;