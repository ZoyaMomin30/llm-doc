export default function MethodsApi() {
  return (
    <section>
      <h3 className="text-xl font-semibold mt-6 mb-2">Methods</h3>
      <h4 className="text-lg font-semibold mt-4 mb-2">doSomething()</h4>
      <pre className="bg-muted p-4 rounded-md mb-4">
        <code>{`async doSomething(): Promise<Result>`}</code>
      </pre>
      <p className="mb-4">Performs an action and returns a result.</p>
      <h4 className="text-lg font-semibold mt-4 mb-2">Returns</h4>
      <p className="mb-4">A Promise that resolves to a Result object.</p>
    </section>
  )
}
