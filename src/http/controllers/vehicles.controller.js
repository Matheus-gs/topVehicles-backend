import express from "express";
import VehiclesService from "../../services/vehicles.service.js";
import responseStatus from "../../utils/response.util.js";

const VehiclesController = express.Router();

VehiclesController.post('/vehicles', (req, res) => {
  const data = VehiclesService.create(req.body)
  responseStatus(data.status, res)
  res.json(data)
})

VehiclesController.get('/vehicles', (req, res) => {
  const data = VehiclesService.read()
  responseStatus(data.status, res)
  res.json(data)
})

VehiclesController.get('/vehicles/:id', (req, res) => {
  const data = VehiclesService.read(req.params.id)
  responseStatus(data.status, res)
  res.json(data)
})

VehiclesController.put('/vehicles', (req, res) => {
  const data = VehiclesService.update(req.body)
  responseStatus(data.status, res)
  res.json(data)
})

VehiclesController.delete('/vehicles/:id', (req, res) => {
  const data = VehiclesService.delete(req.params.id)
  responseStatus(data.status, res)
  res.json(data)
})

export default VehiclesController;
