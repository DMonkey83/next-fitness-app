import { userSuccess } from "@/redux/features/userSlice";
import { RootState } from "@/redux/store";
import { axiosClient } from "@/util/interceptors";
import { useDispatch, useSelector } from "react-redux";
import { redirect } from 'next/navigation'

export default async function Home() {
  // const user = useSelector((state: RootState) => state.user);
  // const dispatch = useDispatch();

  try {
    const response = await axiosClient.get('/user_profile')
    if (response.status === 200) {
      // dispatch(userSuccess(response.data))
    } else {
      redirect('/login')
    }
  } catch (error) {
    redirect('/login')
  }


  return (
    <main >
    </main>
  )
}
