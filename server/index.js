const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());



const { getCompliment, getFortune, addFortune, deleteFortune, updateFortune } = require('./controller')








app.get("/api/compliment", getCompliment);

app.get('/api/fortune', getFortune)

app.post('/api/post', addFortune)

app.delete('/api/delete/:id', deleteFortune)

app.put('api/put/:id', updateFortune)



app.listen(4000, () => console.log("Server running on 4000"));
