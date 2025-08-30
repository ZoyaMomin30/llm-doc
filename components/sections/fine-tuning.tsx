export default function Finetuning() {
  return (
    <section id="fine_tuning">
      <h1 className="text-4xl font-bold mb-6">Fine Tuning  </h1>
      <p className="text-xl mb-4">Fine-tuning is the process of taking a pre-trained model (like GPT, BERT, ResNet, etc.) and training it further on a smaller, task-specific dataset so that it performs better on your problem. Instead of training a model from scratch (which takes huge data + time + cost), we reuse knowledge from a large pre-trained model and just “adapt” it.</p>
      <h3 className="text-xl font-semibold mt-6 mb-2">ClientConfig</h3>
      <pre className="bg-muted p-4 rounded-md mb-4">
        <code>{`interface ClientConfig {
  apiKey: string;
  environment: 'production' | 'development';
}`}</code>
      </pre>
      <h3 className="text-xl font-semibold mt-6 mb-2">Result</h3>
      <pre className="bg-muted p-4 rounded-md mb-4">
        <code>{`interface Result {
  id: string;
  data: any;
  timestamp: number;
}`}</code>
      </pre>
      <p className="mt-4">
        For more detailed information about specific components and their props, please refer to the Components section.
      </p>
    </section>
  )
}
