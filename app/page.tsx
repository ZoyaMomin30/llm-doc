import type { Metadata } from "next"
import Introduction from "@/components/sections/introduction"
import HuggingFace from "@/components/sections/huggingface"
import Rag from "@/components/sections/rag"
import FineTuning from "@/components/sections/fine-tuning"

export const metadata: Metadata = {
  title: "LLM Engineering Documentation",
  description: "Complete documentation for our library",
}

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl space-y-16">
      <div id="introduction" className="scroll-mt-20">
        <Introduction />
      </div>
      <HuggingFace />
      <Rag />
      <FineTuning />
    </main>
  )
}
