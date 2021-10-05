const tracker = [
  {
    filename: './scenes/MosaikHeer.scn',
    updater: require('./version-control/scene-version-updater')
  },
  'package-lock.json',
  'package.json',
];

module.exports = {
  bumpFiles: tracker,
  packageFiles: tracker
};
