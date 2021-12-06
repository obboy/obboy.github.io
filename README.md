# Sveltail

A project template for [Svelte](https://svelte.dev/) Apps that uses [TailwindCSS](https://tailwindcss.com/)

## Installation

Use the [degit](https://www.npmjs.com/package/degit) NPM package to download this template. It will not download the whole git history.

```bash
npx degit Mr-M1M3/sveltail project_name
```

## Usage

```bash
# First install all the dependencies
npm install # or run `yarn` if you are using yarn

# Genertate TailwindCSS and Build the svelte app for developing.
#It also creates a development server and wathces for changes in our project
npm run dev # `yarn dev` if you would like to use yarn

# Finally, if the project is ready, build your project for production
npm run build # `yarn build` for yarn users

# you can start the production server by running
npm run start # `yarn start` if yarn is your favorite
```


## Deploying to the web

### With [Vercel](https://vercel.com)

Install `vercel` if you haven't already:

```bash
npm install -g vercel
```

Then, from within your project folder:

```bash
cd public
vercel deploy --name project_name
```