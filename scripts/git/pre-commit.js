#!/usr/bin/env node
// 在 commit 之前检查是否有冲突，如果有冲突就 process.exit(1)

const execSync = require('child_process').execSync

// git 对所有冲突的地方都会生成下面这种格式的信息，所以写个检测冲突文件的正则
const isConflictRegular = "^<<<<<<<\\s|^=======$|^>>>>>>>\\s"

let results;

try {
    // git grep 命令会执行 perl 的正则匹配所有满足冲突条件的文件
    results = execSync(`git grep -n -P "${isConflictRegular}"`, { encoding: 'utf-8' })
} catch (e) {
    console.log('没有发现冲突，等待 commit')
    process.exit(0)
}

if(results) {
    console.error('发现冲突，请解决后再提交，冲突文件：')
    console.error(results.trim())
    process.exit(1)
}

process.exit(0)
