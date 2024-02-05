import fs from "node:fs/promises";

function compareByType( a, b ) {
  if ( a.type < b.type && a.name < b.name){
    return -1;
  }
  if ( a.type > b.type && a.name > b.name){
    return 1;
  }
  return 0;
}

function compare( a, b ) {
  if ( a.name < b.name ){
    return -1;
  }
  if ( a.name > b.name ){
    return 1;
  }
  return 0;
}

const list = async () => {
    const files = await fs.readdir(process.cwd(), {withFileTypes: true});
    const dirArr = [];
    const fileArr = [];
    files.forEach(async file => {
      file.isDirectory() ? dirArr.push(file) : fileArr.push(file);
    })

    const data1 = dirArr.map( async (file) => {
      return {name: file.name, type: 'directory'};
    })
    const data2 = fileArr.map( async (file) => {
      return {name: file.name, type: 'file'};
    })
    const sorted = [...data1.sort(compare),...data2.sort(compare)];
    Promise.all(sorted).then(data => {
      console.table(data);
      console.log(`You are currently in ${process.cwd()}`);
    } ).catch(err => console.error('Operation failed'));
};

export { list } ;