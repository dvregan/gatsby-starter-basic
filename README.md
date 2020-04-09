# Gatsby Starter Basic

A simple starter package for quickly spinning up a Gatsby site with some extra development tools.

## What's included?

- React Helmet and basic site metadata
- Theme UI
- Storybook
- Jest & React Testing Library

## How to Use

To get started on a brand new Gatsby project using this starter, run:

```bash
$ npx gatsby new my-project https://github.com/dvregan/gatsby-starter-basic
```

### Commands

- `npm run develop`: Run Gatsby development site on http://localhost:8000
- `npm run storybook`: Run Storybook component development environment at http://localhost:6006
- `npm run lint`: Run ESLint
- `npm run format`: Run Prettier
- `npm run test`: Run Jest unit tests
- `npm run build`: Build the production version of the Gatsby site.

NOTE: Husky is also installed in this project, and configured to automatically run the lint and format scripts on commit, and the test script on push. To disable this feature, simply remove the `husky` config block from `package.json` and `npm uninstall husky`.
