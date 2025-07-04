export default function Introduction() {
  return (
    <section id="introduction">
      <h1 className="mb-6 text-4xl font-bold">Welcome to Data Science Documentation</h1>
      <p className="mb-4">
        This is a documentation site that will help you go from beginner to intermediate level. It will cover major aspects and contents revolving around Data Science. Lets get started !
      </p>
      <h2 className="mb-4 mt-8 text-2xl font-semibold">Features</h2>
      <ul className="mb-4 list-inside list-disc space-y-1">
        <li>Clean and minimal design</li>
        <li>Dark mode toggle with system preference detection</li>
        <li>Responsive layout</li>
        <li>Easy navigation with shadcn sidebar</li>
        <li>Built with Next.js App Router</li>
        <li>Smooth scrolling navigation</li>
        <li>Single-page documentation format</li>
      </ul>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">Getting Started</h2>
      <p className="mb-4">
        To get started with our documentation, please navigate through the sections using the sidebar on the left.
        Here&apos;s a quick overview of the available sections:
      </p>
      <ul className="mb-4 list-inside list-disc space-y-1">
        <li>
          <strong>Getting Started</strong>: Learn how to install and set up our library
        </li>
        <li>
          <strong>Components</strong>: Explore the available components and how to use them
        </li>
        <li>
          <strong>API Reference</strong>: Detailed information about our API and its methods
        </li>
      </ul>
      <p className="mb-4">
        If you have any questions or need further assistance, don&apos;t hesitate to reach out to our support team.
      </p>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">Contributing</h2>
      <p className="mb-4">
        We welcome contributions to our documentation. If you find any errors or have suggestions for improvement,
        please open an issue or submit a pull request on our GitHub repository.
      </p>

      
    </section>
  )
}
