import React from 'react'
import ContentCards from '../ContentCards/ContentCards'
import Filter from './Filter/Filter'

const Content = () => {
  return (
    <main>
        <section>
            <Filter/>
        </section>
        <section>
            <ContentCards/>
        </section>
    </main>
  )
}

export default Content