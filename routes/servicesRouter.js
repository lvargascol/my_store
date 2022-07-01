const express = require('express');
const ServicesService = require('../services/servicesServices');
const { validatorHandler } = require('../middlewares/validatorHandler');
const { createServiceSchema, updateServiceSchema, findOneServiceSchema } = require('../schemas/serviceSchema');

const router = express.Router();
const service = new ServicesService();

router.get('/', async (req,res) => {
  const services = await service.find();
  res.status(200).json(services);
});

router.get('/:id',
  validatorHandler(findOneServiceSchema,'params'),
  async (req,res,next) => {
    try {
      const { id } = req.params;
      const oneService = await service.findOne(id);
      res.status(200).json(oneService);
      } catch (error) {
        next(error);
    }
  }

);

router.post('/',
validatorHandler(createServiceSchema,'body'),
async (req,res, next) => {
  try {
    const body = req.body;
    const newService = await service.create(body);
    res.json(newService);
  } catch (error) {
    next(error);
  }

});

router.put('/:id', async (req,res) => {
  const {id} = req.params;
  const body = req.body;
  const newService = await service.update(id,body);
  res.json(newService);
});

router.patch('/:id',
  validatorHandler(findOneServiceSchema,'params'),
  validatorHandler(updateServiceSchema,'body'),
  async (req,res, next) => {
    try {
      const {id} = req.params;
      const body = req.body;
      const newService = await service.update(id,body);
      res.json(newService);
    } catch (error) {
      next(error);
    }
});

router.delete('/:id',
validatorHandler(findOneServiceSchema,'params'),
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
