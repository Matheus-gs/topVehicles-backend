import fs, { unlink } from 'node:fs/promises'
import { randomUUID } from 'node:crypto'

const databasePath = new URL('./data/data.json', import.meta.url)

class Database {
  #database = {}

  constructor() {
    fs
      .readFile(databasePath, 'utf8')
      .then(data => this.#database = JSON.parse(data))
      .catch(() => this.#persistOnFile())
  }

  async #persistOnFile() {
    await unlink(databasePath).then(() => {
      fs.writeFile(databasePath, JSON.stringify(this.#database))
    })
  }

  insert(table, data) {
    if (!data.id) data['id'] = randomUUID()

    if (Array.isArray(this.#database[table]))
      this.#database[table].push(data);
    else
      this.#database[table] = [data];

    this.#persistOnFile()

    return data.id
  }

  select(table, id) {
    const data = this.#database[table] ?? [];
    const ret = id ? [data.find(item => item.id === id)] : data;
    return ret;
  }

  update(table, data) {
    const rowIndex = this.#database[table].findIndex(row => row.id === data.id)
    if (rowIndex > -1) {
      this.#database[table][rowIndex] = data
      this.#persistOnFile()
    }
  }

  delete(table, id) {
    const rowIndex = this.#database[table].findIndex(row => row.id === id)
    if (rowIndex > -1) {
      this.#database[table].splice(rowIndex, 1)
      this.#persistOnFile()
    }
  }
}

export default Database