import express from 'express';
const app = express();
const port = process.env.PORT || 8000;
app.get('/', (req, res) => {
    res.send('its connected today nigga!');
});
app.listen(port, () => {
    console.log('Server is up and connected today ' + port);
});
//# sourceMappingURL=index.js.map