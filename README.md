# @gesslar/lpc-language-tmgrammar-hl

TextMate grammar for LPC (Lars Pensjö C) syntax highlighting. LPC is the programming language used in MUD (Multi-User Dungeon) game development.

Covers `.c`, `.h`, and `.lpc` file extensions.

## Installation

```bash
npm install @gesslar/lpc-language-tmgrammar-hl
```

## Usage

### Shiki (standalone)

```js
import { createHighlighter } from "shiki";
import lpcGrammar from "@gesslar/lpc-language-tmgrammar-hl";

const highlighter = await createHighlighter({
  themes: ["github-dark"],
  langs: [lpcGrammar],
});

const html = highlighter.codeToHtml(code, { lang: "lpc", theme: "github-dark" });
```

### Astro / Starlight

In `astro.config.mjs`:

```js
import lpcGrammar from "@gesslar/lpc-language-tmgrammar-hl";

export default defineConfig({
  markdown: {
    shikiConfig: {
      langs: [lpcGrammar],
    },
  },
  // Or, if using Starlight with Expressive Code:
  integrations: [
    starlight({
      expressiveCode: {
        shiki: {
          langs: [lpcGrammar],
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
        "scopeName": "source.lpc",
        "path": "./node_modules/@gesslar/lpc-language-tmgrammar-hl/lpc.tmLanguage.json"
      }
    ]
  }
}
```

### Direct Import

```js
import grammar from "@gesslar/lpc-language-tmgrammar-hl/lpc.tmLanguage.json" with { type: "json" };
```

Or via the default export:

```js
import grammar from "@gesslar/lpc-language-tmgrammar-hl";
```

## License

`@gesslar/lpc-language-tmgrammar-hl` is released under the [0BSD](LICENSE.txt).
