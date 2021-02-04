import React from 'react';

export const withPage: React.FC<any> = (Page: React.FC, props: object) => {
  return (
    <>
      <header />
      <main>
        <Page { ...props }/>
      </main>
      <footer />
    </>
  )
}
