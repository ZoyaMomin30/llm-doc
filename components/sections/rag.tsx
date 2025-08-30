export default function Rag() {
  return (
    <section id="rag" className="scroll-mt-20">
      <h1 className="text-4xl font-bold mb-6">RAG and Langchain</h1>
      <p className="text-xl mb-4">
        RAG (Retrieval-Augmented Generation) is a technique used in AI to improve the accuracy and reliability of responses from a language model.
      </p>


      <ul className="mb-4 list-inside list-disc space-y-1 whitespace-normal">
        <li>
          Normally, a model like GPT answers from its <b>pre-trained</b> knowledge
          (which may be outdated or incomplete).
        </li>
        <li>
          With RAG, the model is connected to an <b>external knowledge</b> source (like a
          database, documents, or the web).
        </li>
        <li>
          When you ask a question, the system first retrieves <b>relevant information</b>
          from the <b>knowledge source</b>, and then the model uses that retrieved
          information to generate the <b>final answer</b>.
        </li>
      </ul>

       <p className="mb-4">The Key components of a RAG is </p>

      <ul className="mb-4 list-inside list-disc space-y-1 whitespace-normal">
        <li>
          <b>LLM (Large Language Model):</b> The AI “brain” that understands your question and generates answers in natural language. it is openai in our case
        </li>
        <li>
          <b>Retrieval:</b> The search step that pulls relevant info from external sources (databases, documents, web) to ground the LLM’s response.In our case, it will be Cromer, which will be used for Rag retrieval. So that is a retriever interface around something that can take vectors and can enrich your prompt.
        </li>
        <li>
          <b>Memory:</b> Stores past conversations or context so the system can give consistent and personalized answers over time. kind of a of a history of a discussion with a chatbot in some way, some memory.
        </li>
      </ul>
      <p className="mb-4">A conversation chain with RAG and memory with 4 lines of code we can create a RAG pipeline. </p>


      

      <pre className="bg-muted p-4 rounded-md mb-4 whitespace-pre-wrap">
        <code>{`# create a new Chat with GROQ
        llm = ChatGroq(temperature=0.7, model_name=MODEL, groq_api_key=os.environ.get("GROK_API_KEY"))

# set up the conversation memory for the chat
        memory = ConversationBufferMemory(memory_key='chat_history', return_messages=True)

# the retriever is an abstraction over the VectorStore that will be used during RAG
        retriever = vectorstore.as_retriever()

# putting it together: set up the conversation chain with the GPT 4o-mini LLM, the vector store and memory
        conversation_chain = ConversationalRetrievalChain.from_llm(llm=llm, retriever=retriever, memory=memory)`}</code>
      </pre>

      <br />

            <img src="rag.png" />

    </section>
  )
}
