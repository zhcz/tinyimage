import { Suspense } from "react"
import Image from "next/image"

import { Editor } from "@/components/editor"
import { Icons } from "@/components/icons"

export default async function IndexPage() {
  return (
    <section className="container flex h-full flex-col items-center gap-16  pb-8 md:flex-row">
      {/* Hero */}
      {/* group top-0 mt-16 flex flex-col items-center justify-center px-1 py-6 md:sticky md:mt-0 md:px-4 */}
      <div className="group top-0 flex flex-col items-center justify-center px-1 md:sticky md:mt-0 md:px-4">
        
        <div className="flex flex-col items-center justify-center md:mt-0 md:w-96">
          <h1 className="w-80 animate-fade-in-up text-center text-4xl font-bold md:text-start md:text-3xl lg:text-5xl" style={{ display: 'none' }}>
            <span className="bg-gradient-to-br from-neutral-700 to-neutral-900 bg-clip-text text-transparent dark:from-neutral-50 dark:to-neutral-300">
              Fast Image Optimization Tool
            </span>
            <br></br>
            <span className="bg-gradient-to-br from-neutral-400 to-neutral-600 bg-clip-text text-transparent">
              For Web and Social Media
            </span>
            <span className="inline-block">
              <Icons.BxsZap className="flex text-muted-foreground group-hover:animate-tada"></Icons.BxsZap>
            </span>
          </h1>
        </div>
      </div>

      {/* Content */}
      <Suspense
        fallback={
          <div className="flex flex-col items-center justify-center">
            <p>Loading...</p>
          </div>
        }
      >
        <Editor></Editor>
      </Suspense>
    </section>
  )
}
