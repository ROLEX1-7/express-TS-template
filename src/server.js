import express from "express";
const app = express();
const PORT = 3002;
app.get('/', (req, res) => {
    res.send("pong");
});
app.listen(PORT, () => { console.log(`listening on PORT ${PORT}`); });
//# sourceMappingURL=server.js.map