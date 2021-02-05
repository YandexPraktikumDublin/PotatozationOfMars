import React from 'react'
import { Header, Footer } from '@components/organisms'
import { background } from '@images'

export default function withHeaderAndFooter<T>(Page: React.FC<T>) {
  return (props: T) => (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{
        backgroundImage: `url(${background})`
      }}
    >
      <Header />
      <main>
        <Page {...props} />
      </main>
      <Footer />
    </div>
  )
}
