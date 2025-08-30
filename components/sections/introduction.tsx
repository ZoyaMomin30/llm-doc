export default function Introduction() {
  return (
    <section id="introduction">
      <h1 className="mb-6 text-4xl font-bold">Welcome to LLM Engineering Documentation</h1>
      <p className="mb-4">
        This is a documentation site that will help you go from beginner to intermediate level. It will cover major aspects and contents revolving around LLM Engineering. Lets dive right in!
      </p>
      <h2 className="mb-4 mt-8 text-2xl font-semibold">The topics that will be covered in here will be:</h2>
      <ul className="mb-4 list-inside list-disc space-y-1">
        <li>Introduction</li>

      </ul>
      <h2 className="mb-4 mt-8 text-2xl font-semibold">Setting up the environment</h2>
      <p className="mb-4">
        Its better to create a virtual environment and to run things there: 
        Run the following commands in your terminal and work in jupyter lab. 
      </p>
      <pre className="bg-muted p-4 rounded-md mb-4">
        <code>cd &lt; path &gt;</code>
        <br></br>
        <code>python -m venv venv</code>
        <br></br>
        <code>source venv/bin/activate</code>
        <br></br>
        <code>jupyter lab</code>
      </pre>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">What is an LLM?</h2>
      <p className="mb-4">
      A Large Language Model is a type of artificial intelligence model trained on huge amounts of text data to understand and generate human language. Think of it as an know it all model. Examples include ChatGPT, GPT-4, Claude, Gemini, etc. They learn patterns, grammar, facts, reasoning, and even some creativity from text data. They use advanced neural networks (usually transformer architectures) which we will cover in further lessons.
      </p>

      {/* <p>Read the data. </p>

      <pre className="bg-muted p-4 rounded-md mb-4">
        <code>import pandas as pd</code>
        <br></br>
        <code>df = pd.read_csv('path_to_file')</code>
      </pre> */}

      <h2 className="mb-4 mt-8 text-2xl font-semibold">Prompts</h2>
      <p className="mb-4">
        A prompt is nothing but a command that we give to the LLM model. which breaks it down into its own language, understands it and responds accordingly. <br /></p>
      <h2 className="mb-4 mt-8 text-2xl font-semibold">There are 2 types of prompts:</h2>
      <ul className="mb-4 list-inside list-disc space-y-1">
        <li><strong>System Prompt:</strong> Explains the context of the conversation here, tells what task it will be performing overall. Makes the LLM model understand what role it will be playing. e.g. : what tone they should be using, specify if there is any exception they need to know, specify if there are constraints to topics they need to reply to etc.</li>
        <pre className="bg-muted p-4 rounded-md mb-4 whitespace-pre-wrap">
        <code>system_prompt="you are a movie booking system. Reply to the questions politely and clearly. if the user is not ready to book let them know about discounts and other movies. Ask if they have cars with them so let them know about Parking availability. "</code>
      </pre>
      <br />
        <li><strong>User Prompt:</strong> The actual user conversation that the LLM needs to reply to. </li>
        <pre className="bg-muted p-4 rounded-md mb-4 whitespace-pre-wrap">
        <code>user_prompt="Which movies are available for tuesday 12pm"</code>
      </pre>
      </ul>
      <p className="mb-4">
        When AI receives a message it describes it using a python list of dictionary. 
      </p>
      <pre className="bg-muted p-4 rounded-md mb-4 whitespace-pre-wrap">
        <code>[<br />
          &#123;"role"&#125;:"system", &#123;"content"&#125;:"system message goes here"<br />
          ]</code>
      </pre>

      <div>
        <h2 className="text-2xl"><b>3 Dimensions of LLM Engineering</b></h2>
      </div>
      <br />
      <strong className="text-lg">1. Models:</strong> : Think of models as the brains that learn to understand and generate language.These are trained on huge amounts of text so they can: Answer questions, Write stories, Translate text, Summarize documents and many more things. 

      <ul className="mb-4 list-inside list-disc space-y-1">
        <li><b>Open-source</b> e.g LLaMA</li>
        <li><b>Closed-source</b></li>
        <li><b>Multimodal</b></li>
        <li><b>Architecture</b></li>
        In Hugging Face, you can find these models and even smaller specialized ones.
      </ul>

      <strong className="text-lg">2. Tools:</strong> :Tools are software libraries, frameworks, or services that help developers and data scientists work with models.
            <ul className="mb-4 list-inside list-disc space-y-1">
        <li><b>HuggingFace :</b>  Lets you easily load and run LLMs.</li>
        <li><b>Langchain :</b>  Helps you build chatbots or apps that combine LLMs with other data (like your database or APIs).</li>
        <li><b>Gradio</b></li>
        <li><b>Modal</b></li>
        <li><b>Vector databases (like Pinecone, Chroma):</b> Help LLMs remember and search through large collections of text (for Retrieval-Augmented Generation, or RAG).</li>
        <li>OpenAI Python/JS SDK: Directly talk to OpenAI models in your code.</li>
        These tools make life easier: instead of writing everything from scratch, you can just plug things in and start building.
      </ul>

        <strong className="text-lg">3. Techniques:</strong> :Techniques are methods or strategies that help us: Make LLMs better, Adapt them to new tasks, Use them more efficiently. We use these techniques with the LLM's to get more accurate models according to the requirements if out task.  
        <ul className="mb-4 list-inside list-disc space-y-1">
        <li><b>Fine-tuning:</b> Continue training a model on special data so it becomes better at a specific task (e.g., legal text, medical text).</li>
        <li><b>Prompt engineering:</b> Writing the best possible instructions or questions to get the model to do what you want.</li>
        <li><b>RAG (Retrieval-Augmented Generation):</b> Combine the model with a search over external documents to give better answers.</li>
        <li><b>Distillation:</b> Make smaller, faster models that behave similarly to big ones.</li>
        <li><b>Few-shot & zero-shot learning:</b> Teach the model new tasks with very few (or no) examples by crafting clever prompts.</li>
      </ul>
    </section>
  )
}
