# [Git flow](http://nvie.com/posts/a-successful-git-branching-model/)

**[集中式工作流](http://blog.jobbole.com/76847/)**

**[功能分支工作流](http://blog.jobbole.com/76857/)**

**[Gitfow工作流](http://blog.jobbole.com/76867/)**

---------------------------------------------------

根据[Vincent Driessen](http://nvie.com/about/)的文章描述，git flow 的工作流程图如下：

![Vincent Driessen git flow](static/images/markdown/gitflow/git-flow.png)

git flow 的主要分支有两个，master和trunk。这两个分支是长期维护的，并且这两个分支的代码应该是同步的。另外使用其他的临时性分支来进行项目的开发维护。

我们自己的流程与上图提到的流程略有不同。以下是详细的描述：

![Git flow inside](static/images/markdown/gitflow/git-flow-inside.svg)

## 1. master 主分支

master分支具有所有的历史版本。主要用于版本的管理。每一次发版之后，都会基于此次发版在master上建立一个tag，用于版本的跟踪。

- master 上的代码永远是稳定的。

- 不直接向master push 代码。

## 2. trunk 功能集成分支

trunk分支主要用于开发管理，作为功能的集成分支。当有新的功能需求时，从trunk 分支检出一个功能分支进行开发。

## 3. 临时性分支

    dev-

    release-

    hotfix-

    test-

## 4. 测试(test)分支 & 功能开发(dev)分支

在新建功能分支之前，需要先创建一个上游的test分支。基于trunk创建并检出一个新的分支，作为新功能开发的测试分支。同时再基于test分支创建一个功能开发分支。

- 测试分支从trunk分支检出

- 基于test分支创建功能开发分支。不直接在test分支上做提交。

- test分支测试完毕之后上线，从test 合并回trunk分支。

- test分支为保护分支，从功能分支合并到test分支需要做code review。

    推荐命名规范：**test-[功能模块名称]**

        # 如果以这种方式检出，需要提交到远程仓库，并在gitlab上设置为保护分支，
        # 建议直接从gitlab上创建并检出分支。
        $git checkout -b test-tradeEntry trunk

    在创建测试分支的时候，需要设置为保护分支，建议从gitlab直接创建，并设置为保护分支。然后再checkout

    ![点击跳转分支管理页面](static/images/markdown/gitflow/branch-select.jpg)

    点击跳转分支管理页面

    ![点击跳转分支管理页面](static/images/markdown/gitflow/branch-new.jpg)

    点击创建新分支

    ![点击创建新分支](static/images/markdown/gitflow/branch-test.png)

    选择新建的分支

    ![选择新建的分支](static/images/markdown/gitflow/branch-test-setting.png)

    打开新分支的设置页面

    ![打开新分支的设置页面](static/images/markdown/gitflow/branch-test-setting-choice.png)

    设置分支为保护分支

    ![设置分支为保护分支](static/images/markdown/gitflow/branch-test-protect.png)

与此同时，从测试分支检出功能开发分支（dev）：

- 功能分支从 test 分支检出

- 必须合并回test

- 命名避免使用 master, trunk, release-*, or hotfix-* 。

    推荐命名规范：**dev-[功能模块名称]**

        # 也可以像创建test分支一样在gitlab上创建功能分支。如果使用命令行的方式则进行如下的操作

        $ git checkout test-tradeEntry

        $ git checkout -b dev-tradeEntry test-tradeEntry

        # 同时把在本地创建的分支推送到远程仓库
        $ git push --set-upstream origin dev-tradeEntry

此时开发的分支就建立好了。 我们在本地开始开发，如果是多人协同进行一个功能的开发的话，建议再基于dev-tradeEntry在本地检出自己开发的分支进行开发feature-tradeEntry-lsy，然后再合并到dev-tradeEntry分支上。

推荐命名规范： **feature-[功能模块名称/与dev功能模块名一致]-[开发者姓名]**

        $git checkout -b feature-tradeEntry-lsy dev-tradeEntry

开发完成需要合并：

        $ git checkout dev-tradeEntry

        $ git pull

        $ git merge --no-ff feature-tradeEntry-lsy （--no-ff no fast forward 会产生新的提交记录。）

        $ git push origin dev-tradeEntry

开发完成，需要提交测试 dev -> test:

由于需要做code review 。 合并的操作并不由开发者直接操作，而是发起一个Pull Request， 在gitlab 为Merge Request。当通过code review 之后，即可进行合并。

进入gitlab dev分支页面，创建一个合并请求：

![选择合并请求分支](static/images/markdown/gitflow/dev-create-merge.png)

创建合并请求

![创建合并请求](static/images/markdown/gitflow/dev-merge.png)

合并之后即可进行提测。测试期间产生的bug，在开发本地修改合并到dev之后，再同步dev代码到test分支上进行下一轮测试，如此循环往复直到测试验收通过。

测试完成，需要上线合并 test -> trunk:

        $ git checkout trunk

        $ git pull

        $ git merge --no-ff test-tradeEntry （--no-ff no fast forward 会产生新的提交记录。）

        $ git branch -d test-tradeEntry

        $ git push origin trunk

## 5. 预发布(release)分支

- release 从 trunk 检出

- 必须合并回 trunk 以及合并到 master

- 命名惯例： release-*

预发布分支用于进行发布前的集成回归，可以基于此进行bug的修改。修改完成后，合并回trunk以及master， 并且在master 上打一个tag，同时进行上线。可以在push master的时候设置钩子进行发布的构建。

    $git checkout -b release-1.2 trunk

在确认没有问题之后，可以合并到master分支：

    $ git checkout master

    $ git pull

    $ git merge --no-ff release-1.2

    # 对合并生成的新节点，做一个标签

    $ git tag -a 1.2

再合并回trunk 分支：

    $ git checkout trunk

    $ git pull

    $ git merge --no-ff release-1.2

    $ git branch -d release-1.2

## 6. bug修改(fixbug)分支

如果线上发布的版本需要紧急修复，可以直接从master上检出一个hotfix的分支，用于bug 修改。

- 从master 检出

- 必须合并回master

- 必须合并到trunk

- 命名惯例： hotfix-*

        $ git checkout -b hotfix-1.2.1 master

        #修改完毕之后合并回master

        $ git checkout master

        $ git pull

        $ git merge --no-ff hotfix-1.2.1

        $ git tag -a 1.2.1

        #合并到trunk

        $ git checkout trunk

        $ git pull

        $ git merge --no-ff hotfix-1.2.1

        $ git branch -d hotfix-1.2.1

**注意：**当在进行bug fix 的时候如果有一个release 正在发版，则应该把hotfix合并到release上，而不是trunk。

## 7. 基于master 的 tag

    git tag -a 0.1 -m "Initial public release" master

    git push --tags
