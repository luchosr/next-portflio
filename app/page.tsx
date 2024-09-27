import Intro from '@/components/Intro'
import { MDXRemote } from 'next-mdx-remote/rsc'
import React from 'react'

export default function Home() {
  const content = `# This is a markdown heading`
  return (
    <section className='py-24'>
      <div className='container max-w-3xl'>
        <Intro />
        <MDXRemote source={content} />
      </div>
    </section>
  )
}
