const express = require('express');
const ServicesService = require('../services/servicesServices');

const router = express.Router();
const service = new ServicesService();

router.get('/', async (req,res) => {
  const services = await service.find();
  res.status(200).json(services);
});

router.get('/:id', async (req,res) => {
  const { id } = req.params;
  const oneService = await service.findOne(id);
  res.status(200).json(oneService);
});

router.post('/', async (req,res) => {
  const body = req.body;
  const newService = await service.create(body);
  res.json(newService);
});

router.put('/:id', async (req,res) => {
  const {id} = req.params;
  const body = req.body;
  const newService = await service.update(id,body);
  res.json(newService);
});

router.patch('/:id', async (req,res) => {
  try {
    const {id} = req.params;
    const body = req.body;
    const newService = await service.update(id,body);
    res.json(newService);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
});

router.delete('/:id', async (req,res) => {
  try {
    const {id} = req.params;
    const deleted = await service.delete(id);
    res.json(deleted);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
});


module.exports = router;
