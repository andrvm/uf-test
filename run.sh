#!/usr/bin/env bash
node_modules/@angular/cli/bin/ng serve --port 4203 --proxy-config proxy.conf.js & node_modules/.bin/json-server --watch db.json
