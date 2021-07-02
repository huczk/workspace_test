const path = require("path");
/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  watchFolders: [path.resolve(__dirname, "../../")],
  resolver: {
    extraNodeModules: {
      // src: path.resolve(__dirname, "src"),
      clients: path.resolve(__dirname, "src", "clients"),
    },
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
