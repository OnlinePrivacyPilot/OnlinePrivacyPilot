# syntax=docker/dockerfile:1
   
FROM node:slim
RUN apt update
RUN apt install -y git virtualenv curl
RUN curl https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb -o chrome.deb
RUN apt install -y ./chrome.deb; apt install -fy
RUN npm install -g serve

USER node
WORKDIR /app
RUN git clone https://github.com/OnlinePrivacyPilot/OnlinePrivacyPilot_Backend
WORKDIR /app/OnlinePrivacyPilot_Backend
RUN virtualenv .venv
RUN . .venv/bin/activate && pip install -e . && pip install gunicorn && python3 scripts/holehe_ignorant_import.py

WORKDIR /app
RUN git clone https://github.com/OnlinePrivacyPilot/OnlinePrivacyPilot_Frontend
WORKDIR /app/OnlinePrivacyPilot_Frontend
RUN npm install
RUN npm run build

CMD ["/bin/bash", "-c", ". /app/OnlinePrivacyPilot_Backend/.venv/bin/activate;gunicorn --bind 0.0.0.0:5000 --daemon opp.rest_api:app; serve build"]
EXPOSE 3000 5000
