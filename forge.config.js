const path = require('path');
const fs = require('fs');

module.exports = {
  packagerConfig: {},
  rebuildConfig: {},
  makers: [
    {
      name: '@rabbitholesyndrome/electron-forge-maker-portable',
      config: {}
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        icon: "../OnlinePrivacyPilot_Frontend/public/logo512.png"
      },
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
