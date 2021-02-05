import React from 'react'

export default function withHeaderAndFooter<T>(Page: React.FC<T>) {
  return (props: T) => (
    <>
      <header />
      <main>
        <Page {...props} />
      </main>
      <footer />
    </>
  )
}
