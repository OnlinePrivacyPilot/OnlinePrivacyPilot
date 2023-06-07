const path = require('path');
const fs = require('fs');

module.exports = {
  packagerConfig: {},
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
  ],
  hooks: {
    packageAfterCopy: async (config, buildPath, electronVersion, platform, arch) => {
      var src_back = path.join(__dirname, 'OnlinePrivacyPilot_Backend/dist/');
      var src_front = path.join(__dirname, 'OnlinePrivacyPilot_Frontend/build/');
      var dst = buildPath;
      fs.cpSync(src_back, dst, {recursive: true});
      fs.cpSync(src_front, dst, {recursive: true});
    }
  }
};
