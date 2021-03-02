import getOgImage from '@/lib/getOgImage'

import SEO from '@/components/SEO'

const User = ({ user, ogImage }) => {
  return (
    <>
      <SEO title={user} image={ogImage} />

      <div>{/* ... */}</div>
    </>
  )
}

export default User

export async function getStaticPaths() {
  return {
    paths: [{ params: { user: 'solrachix' } }],
    fallback: 'blocking'
  }
}

export async function getStaticProps({ params: { user } }) {
  const ogImage = await getOgImage({
    path: `/moveit?user=${user}&url=${process.env.NEXTAUTH_URL}/user/${user}`
  })

  console.log(ogImage)
  return {
    props: { user, ogImage }
  }
}
