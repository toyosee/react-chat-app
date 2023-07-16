const express = require("express");
const cors = require("cors");
const axios = require('axios');


const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "5750b369-b515-45d8-8fd0-c62376205641" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    if (e.response && e.response.status) {
      return res.status(e.response.status).json(e.response.data);
    } else {
      // Handle other error cases
      console.log('Error:', e); // Output the error to the console for further inspection
      return res.status(500).json({ error: 'An error occurred' });
    }
  }
});

app.listen(3001);

