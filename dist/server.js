"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var PORT = 4000;
var app = express_1.default();
app.get('/', function (req, res) {
    res.send('Hello XRP!');
});
app.listen(process.env.PORT || PORT, function () {
    console.log("Listening on port " + (process.env.PORT || PORT) + "...");
});
