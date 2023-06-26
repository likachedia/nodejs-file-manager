import fs from "node:fs/promises";

const list = async () => {
    const files = await fs.readdir(process.cwd());
    const data = files.map( async (file) => {
      const stat = await fs.lstat(file);
      const type = stat.isFile() ? 'file' : stat.isDirectory() ? 'directory' : 'other';
      return {name: file, type: type};
    })
    Promise.all(data).then(data => {
      console.table(data);
      console.log(`You are currently in ${process.cwd()}`);
    } ).catch(err => console.error('Operation failed'));
};

export { list } ;