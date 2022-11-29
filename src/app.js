"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const routers_1 = __importDefault(require("./routers"));
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use('/api/doors', routers_1.default.DoorRouter);
app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
