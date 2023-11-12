import express, { Request, Response } from 'express';

const app = express();
//using port 3000
const port = 3000;
//runs a get request for a given url
app.get('/', (req: Request, res: Response) => {
//message printed to web page   
res.send('Hello World from TypeScript!');
});
//bind and list to connection on port #
app.listen(port, () => {
//prints message to console
console.log(`Example app listening at http://localhost:${port}`)
});