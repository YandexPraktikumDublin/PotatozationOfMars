import React from 'react'
import { Header, Footer } from '@components/organisms'
import { background, start } from '@images'

export default function withHeaderAndFooter<T>(Page: React.FC<T>) {
  return (props: any) => {
    const backgroundImage =
      props.location.pathname === '/' ? `url(${start})` : `url(${background})`
    return (
      <div
        className="h-screen bg-cover bg-center flex flex-col"
        style={{
          backgroundImage: backgroundImage
        }}
      >
        <Header />
        <main className="flex flex-grow h-auto">
          <Page {...props} />
        </main>
        <Footer />
      </div>
    )
  }
}
