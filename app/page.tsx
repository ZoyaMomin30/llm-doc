import type { Metadata } from "next"
import Introduction from "@/components/sections/introduction"
import HuggingFace from "@/components/sections/huggingface"
import ComponentsSection from "@/components/sections/components-section"

export const metadata: Metadata = {
  title: "Data Science Documentation",
  description: "Complete documentation for our library",
}

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl space-y-16">
      <div id="introduction" className="scroll-mt-20">
        <Introduction />
      </div>
      <HuggingFace />
      <ComponentsSection />
    </main>
  )
}
