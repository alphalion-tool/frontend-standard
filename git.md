
## GIT使用说明

### 1, git commit message 格式

格式为：
    
    <type>(<scope>): <subject>

    [optional body]
    
    [optional footer]

具体理解为：

    其中type可选为：
    feat      `feature，新功能`
    fix       `bug fix，修复bug`
    docs      `document，文档`
    style     `格式化，标点等` 
    refactor  `重构`
    perf      `性能`
    test      `测试`
    build     `build`
    chore     `杂事，维护性的东西`
    revert    `revert`

    其中scope为：
    scope为涉及到的模块。比如说我在修改AccountList，则为AccountList

    其中subject为：
    该commit的简短描述

    其中body为：
    该commit的详细描述

    其中footer为：
    该commit尾部信息，如fixes issue #1，用于关闭github的某个issue
    

#### 举例

`git commit -m 'feat(AccountList): Add AccountList module'`

`git commit -m 'fix(AccountList): 修复AccountList中table表格展示问题'`

`git commit -m 'docs(README): 更新REAMED.md'`

`git commit -m 'build: 2017-08-09部署'`

`git commit -m 'test(App): 添加app测试模块'`

`git commit -m 'style(AccountList): 修改AccountList的内容格式，符合eslint规则'`

`git commit -m 'refactor(AccountList): 重构AccountList模块'`

    git commit -m 'fix(Company): 修复Company模块的bug

    更改Company查询接口
    修改Company数据处理函数
    修复Company搜索块组件参数传递

    fixes issue #111
    fixes issue #121
    fixes issue #122'


#### 生成changelog
使用[conventional-changelog](https://github.com/conventional-changelog/conventional-changelog)来生成changelog
        
    conventional-changelog -p angular -i CHANGELOG.md -s

#### Related
- [conventionalcommits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/)
- [CommitLint](https://github.com/marionebl/commitlint)
- [husky](https://github.com/typicode/husky) for git hooks


### 2, git 常用操作
- 查看文件的所有提交
    
    git log --follow filename
    