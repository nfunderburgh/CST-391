import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
res.send('Hello World from TypeScript!');
});

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
});