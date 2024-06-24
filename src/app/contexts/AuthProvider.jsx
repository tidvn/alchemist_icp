import { createContext, useEffect, useMemo, useState } from 'react'

import * as api from '../libs/api'
import { getSiteUrl } from '../libs/links'

export const AuthContext = createContext(null)

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const initialize = async () => {
      const isLoggedIn = Boolean(window.TheAlchemistJS?.currentUser?.ID)

      if (isLoggedIn) {
        setUser(window.TheAlchemistJS.currentUser)
      }
    }

    initialize().catch(console.error)
  }, [])

  const signIn = async ({ email, password }) => {
    await api.signIn({ email, password })

    // setUser(window.TheAlchemistJS.currentUser)

    // TODO: Improve this
    window.location.href = getSiteUrl('/social')
  }

  const signUp = async (data) => {
    await api.signUp(data)
  }

  const signOut = async () => {
    await api.signOut()

    setUser(null)

    if (window.TheAlchemistJS) {
      window.TheAlchemistJS.currentUser = null
    }

    // TODO: Improve this!
    window.location.href = '/vn'
  }

  const value = useMemo(
    () => ({
      user,
      signIn,
      signUp,
      signOut,
    }),
    [user],
  )

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
