// Incorrect metro.config.js
const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const {resolver} = await getDefaultConfig(__dirname);
  return {
    ...getDefaultConfig(__dirname),
    resolver: {
      ...resolver,
      sourceExts: [...resolver.sourceExts, '.myExtension'], //Typo or incorrect path here
    },
  };
})();


// Correct metro.config.fixed.js
const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const {resolver} = await getDefaultConfig(__dirname);
  return {
    ...getDefaultConfig(__dirname),
    resolver: {
      ...resolver,
      sourceExts: [...resolver.sourceExts, '.myExtension'],
    },
  };
})();