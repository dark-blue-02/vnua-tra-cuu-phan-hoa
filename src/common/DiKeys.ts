import type { InjectionKey } from 'vue'
import type MainViewModel from '@/viewmodel/MainViewModel'

export default class DiKeys {
  static mainViewModel = Symbol('main-view-model') as InjectionKey<MainViewModel>
}