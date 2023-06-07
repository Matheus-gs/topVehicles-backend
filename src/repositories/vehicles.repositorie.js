import Database from "../database/index.js";

const db = new Database();

class VehiclesRepository {
  static create(data) {
    return db.insert('vehicles', data)
  }

  static read(id) {
    return db.select('vehicles', id)
  }

  static update(data) {
    db.update('vehicles', data)
  }

  static delete(id) {
    db.delete('vehicles', id)
  }
}

export default VehiclesRepository