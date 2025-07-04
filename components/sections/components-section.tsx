export default function ComponentsSection() {
  return (
    <section id="components" className="scroll-mt-20">
      <h1 className="text-4xl font-bold mb-6">Components</h1>
      <p className="text-xl mb-4">
        Our library provides a set of reusable components to help you build your application faster. Here&apos;s an
        overview of some key components:
      </p>


       <h2 className="text-2xl font-semibold mt-8 mb-4">Button</h2>
      <p className="mb-4">
        The Button component is a versatile and customizable button that can be used for various actions in your
        application.
      </p>
      <pre className="bg-muted p-4 rounded-md mb-4">
        <code>{`import { Button } from '@our-company/package';

<Button variant="primary" onClick={() => console.log('Clicked!')}>
  Click me
</Button>`}</code>
      </pre>


      <h2 className="text-2xl font-semibold mt-8 mb-4">Card</h2>
      <p className="mb-4">The Card component is used to display content in a box with a consistent style.</p>
      <pre className="bg-muted p-4 rounded-md mb-4">
        <code>{`import { Card, CardHeader, CardContent } from '@our-company/package';

<Card>
  <CardHeader>Card Title</CardHeader>
  <CardContent>This is the card content.</CardContent>
</Card>`}</code>
      </pre>

    </section>
  )
}
