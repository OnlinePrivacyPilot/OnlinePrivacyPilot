const path = require('path');
const fs = require('fs');

module.exports = {
  packagerConfig: {},
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin', 'linux', 'win32'],
    }
  ],
  hooks: {
    packageAfterCopy: async (config, buildPath, electronVersion, platform, arch) => {
      var back_build = path.join(__dirname, '../OnlinePrivacyPilot_Backend/dist/');
      var front_build = path.join(__dirname, '../OnlinePrivacyPilot_Frontend/build/');
      var dst = buildPath;
      fs.cpSync(back_build, dst, {recursive: true});
      fs.cpSync(front_build, dst, {recursive: true});
    }
  }
};
