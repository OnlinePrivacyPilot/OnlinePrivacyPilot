# OnlinePrivacyPilot

## 🛠️ Build environment
### 🐧 GNU/Linux

*Tested on: Ubuntu 22.04*

The following instructions are suitable for Debian-like GNU/Linux distributions, please adapt them to your needs.

Install curl, git and virtualenv (Python) :
```bash
sudo apt install -y curl git virtualenv
```

Install latest (current) version of NodeJS (*tested with 18.16.0 LTS & 20.3.0 Current*), more info [here](https://nodejs.org/en/download/package-manager) :
```bash
curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash - &&\
sudo apt install -y nodejs
```

Install Google Chrome : 
```bash
curl https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb -o chrome.deb
sudo dpkg -i chrome.deb
```

### 🪟 Windows

- Install git : https://git-scm.com/download/win
- Install latest (current) version of NodeJS (*tested with 18.16.0 LTS & 20.3.0 Current*) : https://nodejs.org/en/download/current
- Install Google Chrome : https://www.google.com/chrome/

- Install Python : https://www.python.org/downloads/ . During the step of installation process make sure you select the option "**Add python.exe to PATH**".

## 🛠️ Build the OnlinePrivacyPilot

Clone the repository :
```bash
git clone https://github.com/OnlinePrivacyPilot/OnlinePrivacyPilot
cd OnlinePrivacyPilot
```

Install dependencies :
```bash
npm install
```

Build the application :
```bash
npm run make-all
```

The output will be available in `out/` folder.