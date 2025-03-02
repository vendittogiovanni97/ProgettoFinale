import express from "express";
import dotenv from "dotenv";
import expressSession from "express-session";
import cors from "cors";
import expressWs from 'express-ws';

dotenv.config();

const port = process.env.PORT;

if (process.env.SESSION_SECRET === undefined) {
  throw new Error("Define SESSION_SECRET");
}

const app = express();
const appws= expressWs(app)

app.use((request, response, next) => {
  console.log(request.method, request.url);

  next();
});

app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true,
  })
);

app.use(express.json());
app.use(expressSession({
  secret: process.env.SESSION_SECRET,
  resave: true,
  rolling: true,
  saveUninitialized: false,
  cookie: {
    maxAge: 86400000,
    sameSite: 'strict',
    secure: false
  }
}))

appws.app.ws('/websocket', (ws, req, res) => {
  console.log('NEW CONNECTION');

  ws.on('open', () => {
    console.log('OPEN');
  });

  ws.on('close', (reason) => {
    console.log('CLOSE', reason);
  })

  ws.on('message', (data, isBinary) => {
    if (!isBinary) {
      const obj = JSON.parse(String(data));
      console.log('MESSAGE', obj);
      ws.send(JSON.stringify(obj))
    }
  })

  ws.on('error', (error) => {
    console.error('ERROR', error);
  })
})

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`)
})

