import { addWeightEntrySuccess } from "@/redux/features/userWeightEntrySlice"
import { axiosClient } from "@/util/interceptors"

export const GetProfile = async () => {
  try {
    const response = await axiosClient.get('/user_profile')
    console.log(response)
    if (response.status === 200) {
      console.log('userprofile response', response.data)
      return response.data
    }
  } catch (error) {
    console.log('error in client', error)
  }
}

export interface WeightEntryListRequest {
  offset: number;
  limit: number;
  username: string;
}
export const listWeightEntries = async ({ offset, limit, username }: WeightEntryListRequest) => {

  try {
    console.log('offset', offset)
    const response = await axiosClient.get(`/user_weight_entries?limit=${limit}?offset=${offset}?username=${username}`)
    console.log(response)
    if (response.status === 200) {
      console.log('good response', response.data)
      return response.data
    }
  } catch (error) {
    if (error === 404) {
      console.log('404')
      return []
    }
    console.log('error in client', error)
  }
}

export interface WeightEntryCreateRequest {
  username: string;
  weight_kg: number;
  weight_lb: number;
  notes: string;
}
export const createWeightEntry = async (body: WeightEntryCreateRequest) => {

  try {
    const response = await axiosClient.post('/user_weight_entries', body)
    console.log(response)
    if (response.status === 200) {
      console.log('good response', response.data)
      return response.data
    }
  } catch (error) {
    if (error === 404) {
      console.log('404')
      return []
    }
    console.log('error in client', error)
  }
}
