import React from 'react'
import { Header, Footer } from '@components/organisms'

export default function withHeaderAndFooter<T>(Page: React.FC<T>) {
  return (props: any) => (
    <div className="relative">
      <Header />
      <main className="flex flex-grow justify-center items-center">
        <Page {...props} />
      </main>
      <Footer />
    </div>
  )
}
