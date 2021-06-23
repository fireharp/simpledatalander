'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-0b5548c5.js');

/*
 Stencil Client Patch Esm v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["deckgo-highlight-code.cjs",[[1,"deckgo-highlight-code",{"language":[513],"highlightLines":[513,"highlight-lines"],"lineNumbers":[516,"line-numbers"],"terminal":[513],"editable":[4],"theme":[513],"revealProgress":[1025,"reveal-progress"],"themeStyle":[32],"languagesToLoad":[32],"loaded":[32],"highlightRows":[32],"load":[64],"reveal":[64],"hide":[64],"revealAll":[64],"hideAll":[64],"nextHighlight":[64],"prevHighlight":[64]},[[4,"prismLanguageLoaded","languageLoaded"]]]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;