# AGENTS.md

## Code Review Rules

- Do not review or comment on `*.tmLanguage.json` files. They are vendored
  verbatim from upstream
  ([jlchmura/lpc-language-server](https://github.com/jlchmura/lpc-language-server/tree/main/syntaxes))
  by the sync-grammar script and are never edited here. Problems in them
  belong upstream.
- Review everything else normally: `index.js`, `package.json`, the README,
  and the workflows.
