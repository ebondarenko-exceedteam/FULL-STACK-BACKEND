const Charges = require('../../db/models/charges/index');

module.exports.getAllCharges = (req, res, next) => {
  Charges.find().then(result => {
    res.send({data: result});
  });
};

module.exports.createdNewCharges = (req, res, next) => {
  const charges = new Charges(req.body);
  charges.save().then(result => {
    Charges.find().then(result => {
      res.send({data: result})
    }).catch(error => res.send(error))
  }).catch(err => console.log(err));
};

module.exports.changeChargesInfo = (req, res, next) => {
  Charges.updateOne({_id: req.body._id}, req.body, () => {
    Charges.find().then(result => {
      res.send({data: result})
    }).catch(error => res.send(error))
  });
};

module.exports.deleteCharges = (req, res, next) => {
  Charges.deleteOne({_id: req.query._id}, () => {
    Charges.find().then(result => {
      res.send({data: result})
    }).catch(error => res.send(error))
  });
};