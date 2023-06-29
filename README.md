# 🔒🔎 OnlinePrivacyPilot

# 🛠️ Build as 🐋 Docker image
## Environment preparation 
Install at least **Docker Engine** (https://docs.docker.com/engine/install/) or **Docker Desktop** 
(https://docs.docker.com/desktop/) if you want.

If you are using Windows, make sure you are running the WSL 2 based engine, more info 
[here](https://docs.docker.com/desktop/wsl/).

## 🛠️ Build OnlinePrivacyPilot
Clone the repository :
```bash
git clone https://github.com/OnlinePrivacyPilot/OnlinePrivacyPilot
cd OnlinePrivacyPilot
```

Build the docker image :
```bash
docker build --rm --no-cache -t opp:latest .
```

Create a new container :
```bash
docker run --rm -d -p 3000:3000/tcp -p 5000:5000/tcp opp:latest
```

OnlinePrivacyPilot is now available via the following URL : http://127.0.0.1:3000

# 🛠️ Build as an Electron App
## Environment preparation 
### 🐧 GNU/Linux

*Tested on: Ubuntu 22.04*

The following instructions are suitable for Debian-like GNU/Linux distributions, please adapt them 
to your needs.

Install curl, git and virtualenv (Python) :
```bash
sudo apt install -y curl git virtualenv
```

Install latest (current) version of NodeJS (*tested with 18.16.0 LTS & 20.3.0 Current*), more info 
[here](https://nodejs.org/en/download/package-manager) :
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

For all commands, please use Powershell.

- Install git : https://git-scm.com/download/win
- Install latest (current) version of NodeJS (*tested with 18.16.0 LTS & 20.3.0 Current*) : 
https://nodejs.org/en/download/current
- Install Google Chrome : https://www.google.com/chrome/

- Install Python : https://www.python.org/downloads/ . During the step of installation process make 
sure you select the option "**Add python.exe to PATH**".

- Install Virtualenv:
```bash
py.exe -m pip install virtualenv
```

## 🛠️ Build OnlinePrivacyPilot

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