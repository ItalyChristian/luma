# Luma

Practical courses taught by people who do the work every day.

## Requirements

- Node.js 20.9 or later
- Yarn 1.22.22 is recommended. The project includes `yarn.lock` and declares this Yarn version in `package.json`.

## Deployed version

Available here: https://luma-alpha-blond.vercel.app/

## Run locally

Clone the repository, open a terminal in the project directory, then install dependencies and start the development server:

```bash
corepack enable
yarn install --frozen-lockfile
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. No environment variables are required for the current app.

Yarn is preferred to keep dependency versions consistent with the committed lockfile. npm and pnpm can also be used, but their lockfiles are not included in the repository, so dependency resolution may differ:

```bash
# npm
npm install
npm run dev

# pnpm
pnpm install
pnpm dev
```

## Project commands

Run these from the project directory:

| Purpose                  | Yarn (recommended)               | npm             | pnpm           |
| ------------------------ | -------------------------------- | --------------- | -------------- |
| Install dependencies     | `yarn install --frozen-lockfile` | `npm install`   | `pnpm install` |
| Start development server | `yarn dev`                       | `npm run dev`   | `pnpm dev`     |
| Run lint                 | `yarn lint`                      | `npm run lint`  | `pnpm lint`    |
| Create production build  | `yarn build`                     | `npm run build` | `pnpm build`   |
| Serve production build   | `yarn start`                     | `npm start`     | `pnpm start`   |

Build before starting the production server:

```bash
yarn build
yarn start
```

The production server also listens on [http://localhost:3000](http://localhost:3000) by default. There is currently no automated test script in `package.json`.

## Key decisions

- The project uses the Next.js App Router, React, TypeScript, and Tailwind CSS.
- The project applies the principles of FDS Architecture, using feature-oriented organization and reusable domain structures for scalability. This is my architectural model; reference: [Feature-Oriented Domain Architecture for Scalable Ecosystems](https://github.com/ItalyChristian/feature-oriented-domain-architecture-for-scalable-ecosystems).
- Local prototype images are rendered with `next/image` so Next.js can optimize and serve responsive formats.
- The testimonial metrics count-up animation is triggered when the section enters the viewport and respects the operating system's reduced-motion preference.
- The prototype did not show or expose the intended animation behavior. The current metrics animation is an interpretation of how it should work, rather than a confirmed motion specification.

## Known gaps

- The contact form currently validates input and displays a success dialog, but it is not connected to an API or email service.
- The testimonial animation timing and behavior should be reviewed if a motion specification becomes available.
- Automated tests have not been set up; use the lint and build commands above to check the project.

## Approximate time spent

Approximately 12 hours of implementation work (rough estimate).

## AI tools and repository history

- GitHub Copilot in VS Code was used for implementation assistance, including the image and performance updates, the testimonial metrics animation, and this documentation.
- Copilot also helped convert the pre-existing Header component from Vanilla Extract to Tailwind CSS and assisted with the branch-history correction: a pull request comparison initially failed because `main` and `develop` had unrelated histories. Commit `c12c2c81dc1a13a106b4e50e1ffa370eca97f11a` connected the histories and resolved the `.gitignore` and README conflicts.

## Demo

https://github.com/user-attachments/assets/e2402b10-faf2-4fca-b1b0-77de647bb98f

https://github.com/user-attachments/assets/c8acbf2e-7a5b-4462-8f32-5777504a1c6b

https://github.com/user-attachments/assets/c3b55488-3f9f-477e-b8cc-67400e5406f2

<img width="1753" height="990" alt="Captura de tela 2026-11-17 140006" src="https://github.com/user-attachments/assets/157f180e-42b7-4d19-aca7-4080831b3e06" />
