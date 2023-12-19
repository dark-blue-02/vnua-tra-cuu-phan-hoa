import axios from 'axios'
import type Weapon from '../model/Weapon'

class WeaponRepository {
  private get url() {
    return 'http://localhost:8080/api/'
  }

  async getWeaponList() {
    return await axios.get<Weapon[]>(`${this.url}weaponlist`)
  }
}

export const weaponRepository = new WeaponRepository()
