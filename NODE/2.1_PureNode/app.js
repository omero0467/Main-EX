import http from 'http'
import fs, { readFile } from "fs";
import path,{dirname,} from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url)
// console.log(__filename);
// console.log(dirname(__filename));

const server = http.createServer((req,res)=>{
//      CATCH PARAMS / Requests -----
    // if(req.url === '/'){
    //     fs.readFile(path.join(dirname(__filename),'public','./index.html'), (err,content)=>{
    //         if (err) throw err;
    //         res.writeHead(200, {'Content-Type':'text/html'})
    //     res.end(content);
    //     })
        
    // }
    // if(req.url === '/about'){
    //     fs.readFile(path.join(dirname(__filename),'public','./about.html'), (err,content)=>{
    //         if (err) throw err;
    //         res.writeHead(200, {'Content-Type':'text/html'})
    //     res.end(content);
    //     })
        
    // }
    // let url = req.url.slice(1)
    let filePath = path.join(dirname(__filename),'/public', req.url === '/'?'index.html':`${req.url}`);
    let extname = path.extname(filePath)
    //Build API -------
    
    if(req.url === '/api/users'){
        fs.readFile('./public/users.json',(err,content)=>{
            res.writeHead(200, { 'Content-Type':'application/json' });
            res.end(content)

        })
    }

    //SIMPLE WRITE TO DOC -------

// res.write('Hello World');

// BUILD file path dynamicly
// console.log(req.url);

let contentType = 'text/html';

switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  console.log('path is:',filePath, 'ext is:',extname, 'Content is',contentType);
// READFILE
fs.readFile(filePath,(err,content)=>{
    if(err){
        if(err.code ==='ENOENT'){
            //Page Not Found
            fs.readFile(path.join(dirname(__filename),'public','404.html'),(err,content)=>{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.end(content,'utf8')
            })
        }else {
            //Some Server ERORR
            res.writeHead(500);
        res.end(`Server Error: ${err.code}`)
        }
    } else {
        //Success
        res.writeHead(200,{'Content-Type': contentType });
        res.end(content,'utf8')
    }
})
});

const PORT = process.env.PORT || 5001

server.listen(PORT, ()=>{console.log('server runnig on port' + ' ' + PORT)})