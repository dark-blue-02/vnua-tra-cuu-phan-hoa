import type { AxiosResponse } from 'axios'
import type { Ref } from 'vue'

export type ResponseResult<T> = {
  state: ResponseState
  data?: T
  error?: Error
}

export enum ResponseState {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

export async function handleApiCall<T>(arg: {
  ref: Ref<ResponseResult<T>>
  apiCall: () => Promise<AxiosResponse<T, any>>
}) {
  arg.ref.value = {
    state: ResponseState.LOADING
  }

  await arg
    .apiCall()
    .then((response) => {
      arg.ref.value = {
        state: ResponseState.SUCCESS,
        data: response.data
      }
    })
    .catch((error) => {
      arg.ref.value = {
        state: ResponseState.ERROR,
        error: error
      }
    })
}
