const mongoose = require('mongoose');

export default function handler(req, res) {
  mongoose
  .connect('mongodb://127.0.0.1:27017/CofeeShop')
  .then(() => console.log('Connected! :)))))))))) '))
  .catch((err) => console.log("ERROR , " , err))

  return res.json({message: "api next salaaaaaam"})
} ;
