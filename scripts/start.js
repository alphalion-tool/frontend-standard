
const fs = require('fs');
const path = require('path');

// 判断是否已经存在 pre-commit，不存在就读取 pre-commit.sh 并写入
if (!fs.existsSync('.git/hooks/pre-commit')) {
    if(!fs.existsSync('.git/hooks/')) {
        fs.mkdirSync('.git/hooks/');
    }

    let preCommitFile = fs.readFileSync(path.join(__dirname, './git/pre-commit.js'));

    fs.writeFileSync('.git/hooks/pre-commit', preCommitFile, {
        encoding: 'utf8',
        mode: 0o777
    });

    console.log(' hooks inject done ')
}