set NODE_ENV=dev;
node ./node_modules/nodemon/bin/nodemon --exec babel-node --inspect=0.0.0.0 --presets @babel/preset-env src/index.js
