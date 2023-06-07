import VehiclesRepository from "../repositories/vehicles.repositorie.js";

class VehiclesService {
  static create(data) {
    try {
      const vehicleID = VehiclesRepository.create(data)
      return { status: true, data: vehicleID };
    } catch (err) {
      return { status: false, msg: err.toString() };
    }
  }

  static read(id) {
    try {
      const vehicleData = VehiclesRepository.read(id)
      return { status: true, data: vehicleData };
    } catch (err) {
      return { status: false, msg: err.toString() };
    }
  }

  static update(data) {
    try {
      VehiclesRepository.update(data)
      return { status: true, data: 'Successfully Updated!' };
    } catch (err) {
      return { status: false, msg: err.toString() };
    }
  }

  static delete(id) {
    try {
      VehiclesRepository.delete(id)
      return { status: true, data: 'Successfully Deleted!' };
    } catch (err) {
      return { status: false, msg: err.toString() };
    }
  }
}

export default VehiclesService 