@echo off
start node node_modules/@angular/cli/bin/ng serve --port 4203 --proxy-config proxy.conf.js
start node node_modules/.bin/json-server --watch db.json
