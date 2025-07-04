export default function TypesApi() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Types</h2>
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
