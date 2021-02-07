import React from 'react'
import { Header, Footer } from '@components/organisms'
import { background } from '@images'

export default function withHeaderAndFooter<T>(Page: React.FC<T>) {
  return (props: any) => (
    <div
      className="relative h-screen bg-cover bg-center bg-no-repeat flex flex-col"
      style={{
        backgroundImage: `url(${background})`
      }}
    >
      <div className="hidden absolute inset-0 bg-black opacity-50 dark:block" />

      <Header />
      <main className="relative flex flex-grow">
        <Page {...props} />
      </main>
      <Footer />
    </div>
  )
}
