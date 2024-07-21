import React from 'react'
import useLogout from '../hooks/useLogout'

const LogoutButton = () => {
    const { loading, logout } = useLogout()
  return (
    <div className='mt-auto'>
			{!loading ? (
				<button className='text-white bg-red-500 hover:bg-red-700 transition duration-300 ease-in-out py-2 px-4 rounded'
                onClick={logout}>Logout</button> ) : (
				<span className='loading loading-spinner'></span>
			)}
		</div>
  )
}

export default LogoutButton