import React from 'react'
import { Header, Footer } from '@components/organisms'
import { background } from '@images'

export default function withHeaderAndFooter<T>(Page: React.FC<T>) {
  return (props: T) => (
    <div
      className="bg-cover bg-center flex flex-col"
      style={{
        backgroundImage: `url(${background})`
      }}
    >
      <Header />
      <main className='min-h-screen'>
        <Page {...props} />
      </main>
      <Footer />
    </div>
  )
}
