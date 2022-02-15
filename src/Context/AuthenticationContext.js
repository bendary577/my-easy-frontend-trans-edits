import React, { useState, useEffect} from 'react'

const AuthenticationContext = React.createContext()

const AuthenticationProvider = ({children}) =>  {

  const [username, setUserName] = useState(null);
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState(null);
  const [avatar, setAvatar] = useState(null);

  useEffect(()=>{
    sessionStorage.setItem('username', JSON.stringify(username));
  },[username])

  useEffect(()=>{
    sessionStorage.setItem('avatar', JSON.stringify(userId));
  },[avatar])

  useEffect(()=>{
    sessionStorage.setItem('avatar', JSON.stringify(avatar));
  },[avatar])

  useEffect(()=>{
    sessionStorage.setItem('token', JSON.stringify(token));
  },[token])

    return (
      <AuthenticationContext.Provider
        value={{
            username,
            setUserName,
            userId,
            setUserId,
            token,
            setToken,
            avatar,
            setAvatar
        }}
      >
        {children}
      </AuthenticationContext.Provider>
    )
  }


export default AuthenticationContext

export { AuthenticationProvider }