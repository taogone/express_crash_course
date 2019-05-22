const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })

app.listen(PORT, () => console.log(`Server is started on port ${PORT}`));