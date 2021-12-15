const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const Schema = mongoose.Schema;
const chargesScheme = new Schema({
  date: String,
  where: String,
  howMany: Number,
});

const uri = 'mongodb+srv://ebondarenko-exceedteam:Restart987@cluster0.5337u.mongodb.net/Accountig_Charges?retryWrites=true&w=majority';

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const Charges = mongoose.model('charges', chargesScheme);

app.get('/getAllCharges', (req, res) => {
  Charges.find().then(result => {
    res.send({data: result});
  })
});

app.post('/addedCharges', (req, res) => {
  const charges = new Charges(req.body);
  charges.save().then(result => {
    Charges.find().then(result => {
      res.send({data: result})
    }).catch(error => res.send(error))
  }).catch(err => console.log(err));
});

app.delete('/deleteCharges', (req, res) => {
  Charges.deleteOne({_id: req.query._id}, () => {
    Charges.find().then(result => {
      res.send({data: result})
    }).catch(error => res.send(error))
  });
});

app.listen(8800, () => {
  console.log('Server started on port 8800...');
});