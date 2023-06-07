import assert from 'assert'
import VehiclesService from '../services/vehicles.service.js';

describe('Veículos', function (fakeUUID = "c57555ec-7b44-4410-a81e-c5aa5dcc2185") {
  describe('#create()', function () {
    it('Should insert a new vehicle data on our database', function () {

      const data = {
        "placa": "ABC-1234",
        "chassi": "ABCDFEGHIJKLMNOP",
        "renavam": "1234567891011",
        "modelo": "Onix",
        "marca": "Chevrolet",
        "ano": "2018"
      }

      const vehicleCreate = VehiclesService.create(data)

      assert.equal(vehicleCreate.status, true)
      VehiclesService.delete(vehicleCreate.data)
    });
  });
  describe('#read()', function () {
    it('Should return some vehicle data', function () {
      const vehicleList = VehiclesService.read()
      assert.notEqual(vehicleList.data.length, 0)
    });
  });
  describe('#update()', function () {
    it('Should update vehicle data', function () {

      const beforeUpdateData = {
        "placa": "ABC-1234",
        "chassi": "ABCDFEGHIJKLMNOP",
        "renavam": "1234567891011",
        "modelo": "Onix",
        "marca": "Chevrolet",
        "ano": "2018",
        "id": fakeUUID
      }

      const afterUpdateData = {
        "placa": "ABC-1234",
        "chassi": "ABCDFEGHIJKLMNOP",
        "renavam": "1234567891011",
        "modelo": "Golf GTI",
        "marca": "Volkswagen",
        "ano": "2022",
        "id": fakeUUID
      }

      VehiclesService.create(beforeUpdateData)
      VehiclesService.update(afterUpdateData)

      const updatedVehicle = VehiclesService.read(fakeUUID)
      assert.notDeepStrictEqual(updatedVehicle.data, beforeUpdateData)
    });
  });
  describe('#delete()', function () {
    it('Should delete vehicle data', function () {
      const vehicleBeforeDelete = VehiclesService.read(fakeUUID)
      
      VehiclesService.delete(fakeUUID)
      
      const vehicleAfterDelete = VehiclesService.read(fakeUUID)

      assert.notEqual(vehicleBeforeDelete.data, vehicleAfterDelete.data)
    });
  });
});
