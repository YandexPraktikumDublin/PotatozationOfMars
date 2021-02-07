import React from 'react'
import { Header, Footer } from '@components/organisms'
import { background } from '@images'

export default function withHeaderAndFooter<T>(Page: React.FC<T>) {
  return (props: any) => (
    <div
      className="h-screen bg-cover bg-center flex flex-col"
      style={{
        backgroundImage: `url(${background})`
      }}
    >
      <Header />
      <main className="flex flex-grow">
        <Page {...props} />
      </main>
      <Footer />
    </div>
  )
}
