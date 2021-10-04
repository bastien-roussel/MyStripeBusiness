const app = require("./app");

var hostname = process.env.HOST;
var port = process.env.PORT;

app.listen(port, () => {
    console.log(`Adresse serveur : http://${hostname}:${port}`);
});