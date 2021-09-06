const nunjucks = require('nunjucks');
const user = require('./user.json');
const fs = require('fs');

nunjucks.configure('views', { autoescape: true });
let outString = nunjucks.render('hello.njk', user);
fs.writeFileSync('output/hello.html', outString);
