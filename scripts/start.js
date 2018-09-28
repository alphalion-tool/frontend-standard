
const fs = require('fs');
const path = require('path');


function hookInject (filename) {
    if (!fs.existsSync('.git/hooks/' + filename)) {
        if(!fs.existsSync('.git/hooks/')) {
            fs.mkdirSync('.git/hooks/');
        }

        let preCommitFile = fs.readFileSync(path.join(__dirname, './git/' + filename + '.js'));

        fs.writeFileSync('.git/hooks/' + filename, preCommitFile, {
            encoding: 'utf8',
            mode: 0o777
        });

        console.log(filename + ' inject done ')
    }
}



hookInject('pre-commit');
hookInject('commit-msg');