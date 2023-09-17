'use client'
import { RootState } from "@/redux/store"
import { axiosClient } from "@/util/interceptors"
import { UserSlice, userProfileSuccess } from "@/redux/features/userSlice"
import { ChangeEvent, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetProfile, WeightEntryCreateRequest, listWeightEntries } from "./accountApi"
import { WeightUnit } from "@/util/enum-types"
import { redirect } from "next/navigation"
import Link from "next/link"
import { addWeightEntrySuccess } from "@/redux/features/userWeightEntrySlice"

export default function Account() {
  const [showForm, setShowForm] = useState<boolean>(false)
  const [weightEntry, setWeightEntry] = useState<WeightEntryCreateRequest>()
  const user = useSelector((state: RootState) => state.user)
  const weightEntries = useSelector((state: RootState) => state.userWeightEntry)
  const dispatch = useDispatch();
  const setUserProfile = async () => {
    const user = await GetProfile()
    if (user) {
      dispatch(userProfileSuccess(user))
    } else {
    }
  }

  useEffect(() => {
    setUserProfile()
  }, [])


  const handleListEntries = async () => {
    const response = await listWeightEntries({ limit: 20, offset: 1, username: user.username })

    console.log('entries', response)
  }

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('inputs', e.target.weight_kg.value, e.target.notes.value)
    setWeightEntry({
      weight_kg: parseInt(e.target?.weight_kg?.value) || 0,
      notes: e.target.notes.value,
      username: user.username,
      weight_lb: parseInt(e.target?.weight_lb?.value) || 0,
    })
    try {
      const response = await axiosClient.post('user_weight_enries', weightEntry)
      console.log('response entry', response)
      if (response.status === 200) {
        console.log('resonse', response.data)
        dispatch(addWeightEntrySuccess(response.data))
      }
    } catch (error) {
      console.log(error)
    }
  }

  const renderForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        {
          user.preferred_unit === WeightUnit.Kilograms ? (
            <>
              <label htmlFor="weight_kg">Weight (kg)</label>
              <input name="weight_kg" type="number" id="weight_kg" />
            </>
          ) : (<>
            <label htmlFor="weight_lb">Weight (lb)</label>
            <input name="weight_lb" type="number" id="weight_lb" />
          </>)
        }
        <label htmlFor="notes">Notes</label>
        <textarea name="notes" id="notes" />
        <div>
          <button type="submit">Add Entry</button>
        </div>
      </form>
    )
  }

  return (
    <div>
      <div>
        <h1>
          Hi {user.username}
        </h1>
        <p>{user.gender} - age: {user.age}</p>
        <p>height :{user.height_cm}cm ({user.height_ft_in}ft)</p>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div>
        {weightEntries?.length > 0 && weightEntries[0].weight_entry_id ? (
          <button onClick={handleListEntries}>Workout Plans</button>
        ) : (
          <div>
            <p>Add a new entry</p>
            <button onClick={() => setShowForm(true)}>add new weight entry</button>
            {showForm && renderForm()}
          </div>
        )}
        <button onClick={() => { }}>Update Profile</button>
        {user.username ? (
          <button onClick={() => { }}>Logout</button>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </div>
    </div >
  )
}


