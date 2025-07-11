export default function ComponentsSection() {
  return (
    <section id="components" className="scroll-mt-20">
      <h1 className="text-4xl font-bold mb-6">Sorting Values</h1>
      <p className="text-xl mb-4">
        After our data has been cleaned and ready to analyse. The next of the few important steps that we go for is Data sorting.
      </p>

       <h2 className="text-2xl font-semibold mt-8 mb-4">Button</h2>
      <p className="mb-4">
        This refers to the analysing of the data based on their values being largest, smallest or average, which refers to the calculations of Maximum, Minimum, Aggregate or etc.
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
