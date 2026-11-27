# @gesslar/lpc-language-tmgrammar-hl

TextMate grammar for LPC (Lars Pensjö C) syntax highlighting. LPC is the programming language used in MUD (Multi-User Dungeon) game development.

Covers `.c`, `.h`, and `.lpc` file extensions.

## Installation

```bash
npm install @gesslar/lpc-language-tmgrammar-hl
```

## Usage

The package ships two grammars:

- `lpc.tmLanguage.json`: the main LPC grammar (scope `source.lpc.lang-server`), which is the default export.
- `lpcdoc.injection.tmLanguage.json`: an injection grammar (scope `documentation.injection.lpc`) that adds Markdown formatting, fenced code blocks, and `@example` highlighting inside `/** */` doc comments. It's exported as `lpcdocGrammar`, with `injectTo` already set for Shiki. It includes rules from the Markdown grammar, so load `markdown` alongside it.

### Shiki (standalone)

```js
import { createHighlighter } from "shiki";
import lpcGrammar, { lpcdocGrammar } from "@gesslar/lpc-language-tmgrammar-hl";

const highlighter = await createHighlighter({
  themes: ["github-dark"],
  langs: ["markdown", lpcGrammar, lpcdocGrammar],
});

const html = highlighter.codeToHtml(code, { lang: "lpc", theme: "github-dark" });
```

### Astro / Starlight

In `astro.config.mjs`:

```js
import lpcGrammar, { lpcdocGrammar } from "@gesslar/lpc-language-tmgrammar-hl";

export default defineConfig({
  markdown: {
    shikiConfig: {
      langs: ["markdown", lpcGrammar, lpcdocGrammar],
    },
  },
  // Or, if using Starlight with Expressive Code:
  integrations: [
    starlight({
      expressiveCode: {
        shiki: {
          langs: ["markdown", lpcGrammar, lpcdocGrammar],
        },
      },
    }),
  ],
});
```

### VS Code Extension

In your extension's `package.json`:

```json
{
  "contributes": {
    "grammars": [
      {
        "language": "lpc",
        "scopeName": "source.lpc.lang-server",
        "path": "./node_modules/@gesslar/lpc-language-tmgrammar-hl/lpc.tmLanguage.json"
      },
      {
        "scopeName": "documentation.injection.lpc",
        "path": "./node_modules/@gesslar/lpc-language-tmgrammar-hl/lpcdoc.injection.tmLanguage.json",
        "injectTo": ["source.lpc.lang-server"]
      }
    ]
  }
}
```

### Direct Import

```js
import grammar from "@gesslar/lpc-language-tmgrammar-hl/lpc.tmLanguage.json" with { type: "json" };
import lpcdoc from "@gesslar/lpc-language-tmgrammar-hl/lpcdoc.injection.tmLanguage.json" with { type: "json" };
```

The raw injection file has no `name` or `injectTo`. Upstream sets those in its VS Code `package.json`, not in the grammar file. Use `lpcdocGrammar` for Shiki, or add them yourself.

Or via the default export:

```js
import grammar, { lpcdocGrammar } from "@gesslar/lpc-language-tmgrammar-hl";
```

## License

`@gesslar/lpc-language-tmgrammar-hl` is released under the [0BSD](LICENSE.txt).
