
## GIT使用说明

### 1, git commit message 格式

格式为：`<type>(<scope>): <subject>`

#### type可选为：

- feat   `feature，新功能`
- fix       `bug fix，修复bug`
- docs      `document，文档`
- style     `格式化，标点等` 
- refactor  `重构`
- perf      `性能`
- test      `测试`
- build     `build`
- chore     `杂事，维护性的东西`
- revert    `revert`

#### scope为：
scope为模块。比如说我在修改TimeTick，则为TimeTick

#### subject为：
commit的内容


#### 举例

`git commit -m 'feat(TimeTick): Add TimeTick module'`

`git commit -m 'fix(TimeTick): 修复TimeTick中table表格展示问题'`

`git commit -m 'docs(README): 新增REAMED-git'`

`git commit -m 'build: 2017-08-09部署'`

`git commit -m 'test(App): 添加app测试模块'`

`git commit -m 'style(TimeTick): 修改TimeTick的内容格式，符合eslint规则'`

`git commit -m 'refactor(TimeTick): 重构TimeTick模块'`


#### 生成changelog
使用[conventional-changelog](https://github.com/conventional-changelog/conventional-changelog)来生成changelog
        
    conventional-changelog -p angular -i CHANGELOG.md -s


### 2, git 常用操作
- 查看文件的所有提交
    
    git log --follow filename
    