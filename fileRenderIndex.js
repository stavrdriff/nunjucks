const nunjucks = require('nunjucks');

const user = require('./user.json');

const fs = require('fs');

nunjucks.configure('views', { autoescape: true });
let index = nunjucks.render('pages/index.njk', user);

fs.writeFileSync('output/index.html', index);




