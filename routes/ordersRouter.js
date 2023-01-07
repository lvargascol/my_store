const express = require('express');
const OrdersService = require('../services/ordersService');
const { validatorHandler } = require('../middlewares/validatorHandler');
const { createOrderSchema, updateOrderSchema, findOneOrderSchema, addItemSchema } = require('../schemas/orderSchema');

const router = express.Router();
const service = new OrdersService();

router.get('/',
async (req,res, next) => {
  try {
    const orders = await service.find();
    res.json(orders);
  } catch(error) {
    next(error);
  }
});

router.get('/:id',
validatorHandler(findOneOrderSchema,'params'),
async (req,res, next) => {
  try {
    const { id } = req.params;
    const order = await service.findOne(id);
    res.json(order);
  } catch(error) {
    next(error);
  }
});

router.post('/',
validatorHandler(createOrderSchema,'body'),
async (req,res, next) => {
  try {
    const body = req.body;
    const newOrder = await service.create(body);
    res.json(newOrder);
  } catch (error) {
    next(error);
  }
});

router.post('/add-item',
validatorHandler(addItemSchema,'body'),
async (req,res, next) => {
  try {
    const body = req.body;
    const newItem = await service.addItem(body);
    res.json(newItem);
  } catch (error) {
    next(error);
  }
});



router.patch('/:id',
validatorHandler(findOneOrderSchema,'params'),
validatorHandler(updateOrderSchema,'body'),
async (req,res, next) => {
  try {
    const {id} = req.params;
    const body = req.body;
    const updated = await service.update(id,body);
    res.json(updated);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id',
validatorHandler(findOneOrderSchema,'params'),
async (req,res, next) => {
  try {
    const {id} = req.params;
    const deleted = await service.delete(id);
    res.json(deleted);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

