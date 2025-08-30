export default function HuggingFace() {
  return (
    <section id="huggingface" className="scroll-mt-20">
      <h1 className="text-4xl font-bold mb-6">Hugging Face</h1>
      <p className="text-lg mb-4">
        Hugging Face is a company and a platform that makes it easy for anyone to use and share AI and machine learning models, especially for things like: Chatbots, Text analysis , Image recognition , Audio and video tasks.<br /></p>
        <ul className="mb-4 list-inside list-disc space-y-1">
          <li>Translate languages</li>
          <li>Summarize text</li>
          <li>Generate images</li>
        </ul>
        <br />
        Instead of building these complex models from scratch, you can go to Hugging Face, find ready-made models, and use them directly in your code or even test them on the website.

      <h2 className="text-2xl font-semibold mt-8 mb-4">2 API Levels of Hugging Face</h2>
      <p className="mb-4 text-2xl">1. Pipelines </p>
      <p className="mb-4"> Imagine you just want to use AI to do something useful (like summarizing text, answering a question, classifying text, etc.) without writing a lot of code, we use pipelines. used to get done everyday functions. Basically, power of open source models in 2 lines of code.  </p>

      <ul className="mb-4 list-inside list-disc space-y-1">
        <li>load the model</li>
        <li> preprocess the input</li>
        <li>run the model</li>
        <li>postprocess the output</li>
      </ul>
      You just call it and get results.

      <pre className="bg-muted p-4 rounded-md mb-4 whitespace-pre-wrap">
        <code>from transformers import pipeline<br /> <br />
        summarizer = pipeline("summarization")<br />
        summary = summarizer("Long text you want to summarize.")<br />
        print(summary)
        </code>
      </pre>

      <ul className="mb-4 list-inside list-disc space-y-1">
        <li><strong>Sentiment Analysis : </strong> given a sentence, what is the emotion conveyed.</li>
        <li><strong>Classifier :</strong> Traditional m/c learning tasks</li>
        <li><strong>Named Entity Recognition : </strong> Take the sentence and tag the words whether they are people,things etc</li>
        <li><strong>Question Answering</strong> answering the question based on the given context </li>
        <li><strong>Summarization : </strong>block to text summary. </li>
        <li><strong>Translation : </strong> From one language to another. </li>
        <li><strong>Text/ image/ audio generation</strong> Generation. </li>
      </ul>

      <p className="mb-4">With just a few lines: The pipeline automatically loads a suitable model, Prepares the text (tokenizes it),Runs it through the model and Returns clean, human-readable output</p>

      <h3 className="text-2xl  mb-6">2. Tokenisers and Models</h3>
      <p className="mb-4"> These are lower level API's that provide more power and control. tokemnisers splits raw text into numbers (tokens) the model understands and Model is the neural network that makes predictions based on those numbers.</p>
      <p className=" mb-4"><b>Tokeniser:</b> Converts text → numbers → text eg : "Hello world" → [101, 7592, 2088, 102], After the model makes predictions, the tokenizer can turn numbers back into words.</p>


      <pre className="bg-muted p-4 rounded-md mb-4 whitespace-pre-wrap">
        <code>from transformers import AutoTokenizer<br /><br />

          tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")<br />
          tokens = tokenizer("Hello world")<br />
          print(tokens)<br />
        </code>
      </pre>

      <p><b>Model: </b>The deep learning part that understands or generates text.</p>

            <pre className="bg-muted p-4 rounded-md mb-4 whitespace-pre-wrap">
        <code>from transformers import AutoModelForSequenceClassification<br /><br />

          model = AutoModelForSequenceClassification.from_pretrained("bert-base-uncased")
        </code>
      </pre>

      <b>For quick use → pipelines<br />
For custom workflows → tokenizers + models</b>

<img src="/pipeline.png"></img>


    </section>
  )
}
