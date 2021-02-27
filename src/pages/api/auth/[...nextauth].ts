import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  // Configure um ou mais provedores de autenticação
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
    // ...add more providers here
  ]

  // Um banco de dados é opcional, mas necessário para manter contas em um banco de dados
  // database: process.env.DATABASE_URL
})
