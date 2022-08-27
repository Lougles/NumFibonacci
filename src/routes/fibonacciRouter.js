const express = require('express');
const router = new express.Router();

const {asyncWrapper} = require('../../helpers/trycatchHelper');
const {getNumberController, postNumberController} = require('../controllers/fibonacciController')

router.post('/', asyncWrapper(postNumberController))
router.get('/', asyncWrapper(getNumberController))