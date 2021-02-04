import React from 'react'

export function withPage<T>(Page: React.FC<T>) {
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
