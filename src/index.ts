import bodyParser from "body-parser";
import { Config } from "./Config";
import { Database } from "./Database";
import express from "express";
import { hsmWalletRoutes } from "./routes/hsmWalletRoutes";
import http from "http";
import { HsmWalletService } from "./services/HsmWalletService";

const config = new Config();
const db = new Database(config);

HsmWalletService.init(config, db);

const app = express();
app.set("config", config);
app.set("router", express.Router());
app.set("db", db);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(hsmWalletRoutes(app));

const server = http.createServer(app);
server.listen(config.PORT);

server.on("error", (e) => {
  console.log("Error starting server", e);
});

server.on("listening", () => {
  console.log("Key-management API started on port", config.PORT);
});

