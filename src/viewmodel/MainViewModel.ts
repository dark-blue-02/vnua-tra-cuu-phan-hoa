import { type ResponseResult, ResponseState, handleApiCall } from '@/common/ResponseResult'
import type { Weapon } from '@/model/model/Weapon'
import { weaponRepository } from '@/model/repo/WeaponRepository'
import { ref, type Ref } from 'vue'

export default class MainViewModel {
  #count = ref(0)
  #weaponList: Ref<ResponseResult<Weapon[]>> = ref({ state: ResponseState.LOADING })
  #repository = weaponRepository

  get count() {
    return this.#count.value
  }

  get weaponList() {
    return this.#weaponList.value
  }

  increment = () => this.#count.value++

  getWeaponList = async () => {
    await handleApiCall({
      ref: this.#weaponList,
      apiCall: () => this.#repository.getWeaponList()
    })
  }
}
