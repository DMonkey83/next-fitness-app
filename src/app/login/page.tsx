'use client'
import { userSuccess } from "@/redux/features/userSlice"
import { RootState } from "@/redux/store"
import { axiosClient } from "@/util/interceptors"
import { redirect } from "next/navigation"
import { ChangeEvent, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' })
  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user)
  async function login(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault()
    setFormData({
      username: event.target.username.value,
      password: event.target.password.value
    })
    try {
      if (event.target.username.value !== '') {
        const response = await axiosClient.post('users/login', formData)
        if (response.status === 200) {
          console.log('resonse', response.data.data.access_token)
          axiosClient.defaults.headers.common['Authorization'] = `Bearer ${response.data.data.access_token}`
          dispatch(userSuccess(response.data.data.user))
        }

      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    console.log(user)
    if (user.username) { redirect('/account') }
  }, [user])
  return (<div>
    <form onSubmit={login}>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" id="username" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" />
      <button type="submit">Login</button>
    </form>
  </div>)
}
