import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { addDoc, collection } from 'firebase/firestore'
import {auth, db} from '../../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'

 interface createFormData {
  title: string;
  description: string;
}


export const CreateForm = () => {

  const navigate = useNavigate()

  const [ user ] = useAuthState(auth)

  const schema = yup.object().shape({
    title: yup.string().required("This field can not be empty"),
    description: yup.string().required("This field can not be empty")
  })

  const {register, handleSubmit, formState: {errors} } = useForm <createFormData> ({
    resolver: yupResolver(schema)
  })

  const postsRef = collection(db, "posts")

  const onCreatePost = async (data: createFormData)=>{
    await addDoc(postsRef, {
      // title : data.title,
      // description : data.description,
      
      ...data, // it will have saame effect as above two lines. ssince data includes both of the above two.
      username : user?.displayName,
      userId: user?.uid
    })
    navigate('/')
    
  }

  return (
    <div className='create-post-form-container' >

      <form className='create-post-form' onSubmit={handleSubmit(onCreatePost)} >
        <input type='text' placeholder='Title...' {...register("title")} />
        <p style={{color: "red"}} >{errors.title?.message}</p>
        <textarea placeholder='desc...' cols= {30} rows={10} {...register("description")} />
        <p style={{color: "red"}} >{errors.description?.message}</p>
        <input type="submit" />
      </form>
    </div>
    
 )
}
