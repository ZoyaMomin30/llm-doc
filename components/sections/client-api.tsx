export default function ClientApi() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Client</h2>
      <p className="mb-4">The main class for interacting with our API.</p>
      <h3 className="text-xl font-semibold mt-6 mb-2">Constructor</h3>
      <pre className="bg-muted p-4 rounded-md mb-4">
        <code>{`new Client(config: ClientConfig)`}</code>
      </pre>
      <p className="mb-4">Creates a new instance of the Client class.</p>
      <h4 className="text-lg font-semibold mt-4 mb-2">Parameters</h4>
      <ul className="list-disc list-inside mb-4">
        <li>
          <code>config</code>: An object containing the client configuration
        </li>
      </ul>
    </section>
  )
}
