import grammar from './lpc.tmLanguage.json' with { type: 'json' }
import lpcdoc from './lpcdoc.injection.tmLanguage.json' with { type: 'json' }

// Upstream declares injectTo in its VS Code package.json, not in the grammar
// file, so add it (and a name) here for Shiki.
export const lpcdocGrammar = {
  ...lpcdoc,
  name: 'lpcdoc',
  injectTo: ['source.lpc.lang-server'],
}

// Shiki registers a language by its name, which upstream sets to "LPC", so
// add the lowercase id most configs use.
export default {
  ...grammar,
  aliases: ['lpc'],
}
