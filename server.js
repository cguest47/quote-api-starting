const express = require('express');
const expressRouter = require('./router');
const app = express();

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

// Use the expressRouter for this main path
app.use('/api/quotes', expressRouter);

// type in "localhost:4001" and test
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});