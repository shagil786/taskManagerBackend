import React from 'react'
import { useAuthContext } from '../context/AuthContext'

const AuthUserImage = () => {
  const { authUser } = useAuthContext()

  if (!authUser?.profilePic) {
    return null
  }

  const optimizedImage = optimizeImage(authUser.profilePic)

  return (
    <img
      src={optimizedImage}
      alt={`${authUser.firstname}'s profile picture`}
      className='w-10 h-10 rounded-full object-cover'
    />
  )
}

const optimizeImage = (imageUrl) => {
  return imageUrl
}

export default AuthUserImage