the file to make changes for the section layout is in :
app/page.tsx

the file to add the sidebar content will be 
app/components/sidebar.tsx

```
to use grok 
from groq import Groq

MODEL = "llama-3.3-70b-versatile"

load_dotenv(override=True)
api_key = os.getenv('GROK_API_KEY')

client = Groq(
    api_key=os.environ.get("GROK_API_KEY"),
)
```

for the list to be wrapped around the doc use this 
```
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
```

if a layout error like this :

ChunkLoadError: Loading chunk app/layout failed.
(timeout: http://localhost:3000/_next/static/chunks/app/layout.js)

app/layout.tsx (24:9) @ RootLayout


  22 |     <html lang="en" suppressHydrationWarning>
  23 |       <body className={${inter.className} antialiased}>
> 24 |         <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
     |         ^
  25 |           <SidebarProvider>
  26 |             <AppSidebar />
  27 |             <SidebarTrigger className="ml-3 mt-3" />
Call Stack
12


This ChunkLoadError typically means:

✅ Next.js can’t load a JavaScript chunk (here, app/layout.js) because:
The chunk isn’t built yet
Or it was deleted / outdated
Or the dev server cache is stale
Happens very often if:
You’re running npm run dev
You recently changed the folder structure, renamed files, or switched git branches

Steps to fix it :
1️⃣ Stop the dev server
```
CTRL+C
```
2️⃣ Delete .next build cache
```
rm -rf .next
```
3️⃣ Install again 
```
npm install
```
4️⃣ Restart dev server
```
npm run dev
```

##to change the remote repository URL

 1. Check current origin
 ```
 git remote -v 
 ```
 You’ll see something like:
 ```
 origin  https://github.com/username/old-repo.git (fetch)
origin  https://github.com/username/old-repo.git (push)
 ```

 2. Change the origin
 ```
 git remote set-url origin NEW_URL
 ```

  3. Verify the change
  ```
  git remote -v
  ```