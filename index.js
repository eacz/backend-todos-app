const express = require('express');
const connectDB = require('./config/db')
const cors = require('cors')

const app = express()
connectDB()
app.use( cors() )
app.use(express.json({extended: true}))

const port = process.env.PORT || 4000

app.use('/api/todos', require('./routes/todo'))

app.listen(port, '0.0.0.0', () => {
    console.log(`Workinggg on port ${port}`);
});
