const express = require('express');
const router = express.Router();

const {
  getAllCharges,
  createdNewCharges,
  changeChargesInfo,
  deleteCharges
} = require('../controllers/charges.conroller');

// Charges routes
router.get('/getAllCharges', getAllCharges);
router.post('/addedCharges', createdNewCharges);
router.patch('/updateCharges', changeChargesInfo);
router.get('/deleteCharges', deleteCharges);

module.exports = router;