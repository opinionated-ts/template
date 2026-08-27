# @opinionated-ts/template

A ready-to-use TypeScript project template powered by
[`@opinionated-ts/config`](https://github.com/opinionated-ts/config) — a
shared set of opinionated tooling defaults focused on performance, code
quality, and developer experience.

This template is designed to let you start building without spending time on
repetitive project setup. It bundles the tools and local automation that make a
modern TypeScript workflow fast, consistent, and low-friction.

## When to use this template?

Use this template when you want to:

- Move fast without sacrificing code quality
- Keep a consistent developer experience across repositories
- Avoid repetitive TypeScript tooling setup
- Standardize linting, formatting, and type-checking with clear defaults
- Start from a modern Bun-first setup that is ready to use

The stack prioritizes:

- Performance — fast linting, formatting, and validation
- Code quality — strong type checking and lint rules
- Developer experience — zero-friction setup and consistent workflows
- Modern tooling — up-to-date standards and best practices

> [!NOTE]
> This template is designed primarily for Bun environments. The workflow
> validations and tool integrations are optimized for Bun's runtime and package
> manager.

## What's included

### Local automatic validations

| Category           | Tool                                          | Description                                                           |
| ------------------ | --------------------------------------------- | --------------------------------------------------------------------- |
| **Type checking**  | [TypeScript](https://www.typescriptlang.org/) | Applied together with Oxlint via `typeCheck`/`typeAware`              |
| **Linter**         | [Oxlint](https://oxc.rs/)                     | Fast linting, pre-configured                                          |
| **Formatter**      | [Oxfmt](https://oxc.rs/)                      | Fast formatting, pre-configured                                       |
| **Spellchecking**  | [cspell](https://cspell.org/)                 | Pre-configured for English/Spanish                                    |
| **Commit linting** | [commitlint](https://commitlint.js.org/)      | Enforces [Conventional Commits](https://www.conventionalcommits.org/) |
| **Git hooks**      | [lefthook](https://lefthook.dev/)             | Wired up locally (`pre-commit`, `commit-msg`, `pre-push`)             |

### Remote automation support

The underlying config package also supports CI and release automation for
projects that need it:

| Category    | Tool                                                     | Description                                |
| ----------- | -------------------------------------------------------- | ------------------------------------------ |
| **CI/CD**   | [GitHub Actions](https://github.com/features/actions)    | Automated validation and release pipelines |
| **Release** | [Semantic Release](https://semantic-release.gitbook.io/) | Automated versioning and publishing        |

All template configurations extend `@opinionated-ts/config` directly — see
[opinionated-ts/config](https://github.com/opinionated-ts/config) for the
shared defaults and the recommended overrides available for each tool.

## How the workflow works

A few checks run automatically at key moments in the development cycle:

- Before a commit, changed files are formatted, type-checked, and linted
  automatically (`pre-commit`, via [Oxfmt](https://oxc.rs/) and
  [Oxlint](https://oxc.rs/)).
- When a commit message is written, it is validated against a consistent format
  (`commit-msg`, via [commitlint](https://commitlint.js.org/)).
- Before a push, the test suite runs and dependencies are scanned for known
  vulnerabilities; either failure blocks the push (`pre-push`, via `bun test`
  and `bun audit`).

These checks run automatically as part of `git commit` and `git push` — no
manual steps required.

## Getting started

### 1. Create your repo

Click **Use this template** above, or:

```bash
git clone https://github.com/opinionated-ts/template my-project
cd my-project
rm -rf .git && git init
```

### 2. Install dependencies

```bash
bun install
```

### 3. Install git hooks

```bash
bun hooks:install
```

### 4. Edit package metadata

Update `package.json` so releases and CI point to your project:

- `name`: your package name.
- `repository.url`: your repo's URL.

```json
{
  "name": "your-project-name",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/your-username/your-repo.git"
  }
}
```

## Why start from this template?

Instead of setting up TypeScript tooling from scratch, this template gives you a
ready-made baseline that is opinionated by design:

- A consistent setup across projects
- No boilerplate configuration to maintain
- Fast local validations built in
- A clear default workflow for teams and solo developers

If you want a fast path to a clean TypeScript setup with strong defaults, this is
the quickest way to get there.

## Related projects

- [`@opinionated-ts/config`](https://github.com/opinionated-ts/config) — shared
  tooling defaults used by this template
