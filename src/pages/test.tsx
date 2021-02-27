import { useEffect } from 'react'
import { useSession, signIn, signOut } from 'next-auth/client'
import { useGlobal } from '@/contexts/Global'

export default function Component() {
  const { NavBar } = useGlobal()
  const [session, loading] = useSession()

  useEffect(() => {
    NavBar.set(false)
    console.log(session?.user)
  }, [session])

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
