import { resolve, isAbsolute} from 'path';

export function updateCurrentPath(inputPath) {
    try { 
        let path;  
        if(inputPath.includes('\'') || inputPath.includes('\"')) {
            path = inputPath.replace(/['"]+/g, '');
        } else { path = inputPath};     
      
        if (isAbsolute(inputPath)) {
        return resolve(inputPath);
      } else {
        return resolve(process.cwd(), inputPath);
      }
    } catch(err) {
      console.log('Invalid argument');
    }
  
  }