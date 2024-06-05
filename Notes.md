### Create a new Next.JS app
- `npx create-next-app@latest`
- Agree to all the defaults and name the application

Once the app is created, download/install the following packages:
- `npm i openai`
- `npm i langchain @langchain/openai`
- `npm i ai`
- `npm i clsx`
- `npm i tailwind-merge`
- `npm i ts-node`
- `npm i dotenv`
- `npm i lucide-react`
- `npm i next-themes`
- `npm i react-markdown`
- `npm i @datastax/astra-db-ts`
- `npm i @upstash/redis`
Then we need to download dependencies that work in dev mode:
- `npm i -D prettier`
- `npm i -D prettier-plugin-tailwindcss`
- `npm i -D eslint-config-prettier`
And add the override dependency for langchain by going to npmjs.org to find the latest version

### Create a custom theme 
To create a custom theme that can then be imported into the project, go to ui.shadcn.com/themes.
Create the theme how you like it, copy the code, and add it to the global CSS file (remove everything after the first 3 lines and replace).
Once the global.css file is updated, update the tailwind.config.ts file so all the theme elements align when using tailwind.

### Build the website itself
