import Intro from '@/components/Intro'
import RecentPosts from '@/components/RecentPosts'
import React from 'react'

export default function Home() {
  return (
    <section className='py-24'>
      <div className='container max-w-3xl'>
        <Intro />
        <RecentPosts />
      </div>
    </section>
  )
}
