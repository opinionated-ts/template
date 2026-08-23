# ts-template

A ready-to-use TypeScript project template, pre-configured with
[`@opinionated-ts/config`](https://github.com/opinionated-ts/config) —
opinionated tooling for performance, code quality, and developer
experience, so you can start writing code instead of configuring tools.

## What's included

| Category           | Tool                                          |                                                                       |
| ------------------ | --------------------------------------------- | --------------------------------------------------------------------- |
| **Type checking**  | [TypeScript](https://www.typescriptlang.org/) | Applied together with Oxlint via `typeCheck`/`typeAware`              |
| **Linter**         | [Oxlint](https://oxc.rs/)                     | Fast linting, pre-configured                                          |
| **Formatter**      | [Oxfmt](https://oxc.rs/)                      | Fast formatting, pre-configured                                       |
| **Spellchecking**  | [cspell](https://cspell.org/)                 | Pre-configured for English/Spanish                                    |
| **Commit linting** | [commitlint](https://commitlint.js.org/)      | Enforces [Conventional Commits](https://www.conventionalcommits.org/) |
| **Git hooks**      | [lefthook](https://lefthook.dev/)             | Wired up out of the box (`pre-commit`, `commit-msg`, `pre-push`)      |

All configs extend `@opinionated-ts/config` directly — see
[opinionated-ts/config](https://github.com/opinionated-ts/config) for
what each one does and how to override it.

This template is designed with Bun as the recommended package manager
and runtime.

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

## How the workflow works

A few checks run automatically at key points in the development cycle:

- **Before a commit**, changed files are formatted, type-checked, and
  linted automatically (`pre-commit`, via [Oxfmt](https://oxc.rs/) and
  [Oxlint](https://oxc.rs/)).
- **When a commit message is written**, it's validated against a
  consistent format (`commit-msg`, via
  [commitlint](https://commitlint.js.org/)).
- **Before a push**, the test suite runs and dependencies are scanned
  for known vulnerabilities; either failure blocks the push
  (`pre-push`, via `bun test` and `bun audit`).

These checks run automatically as part of `git commit` and `git push`
— no manual steps required.
