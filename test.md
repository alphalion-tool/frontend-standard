
## 测试方案

### 组成部分
- karma
    [karma](http://karma-runner.github.io/1.0/index.html)
- jasmine
    [jasmine](https://jasmine.github.io/)，行为驱动的测试框架，[文档](https://jasmine.github.io/2.5/introduction)
- enzyme
    [enzyme](https://github.com/airbnb/enzyme)，操作React组件
    

        `mount`, `shallow`, `render`3个方法，使用条件：
        - Always begin with shallow
        - If componentDidMount or componentDidUpdate should be tested, use mount
        - If you want to test component lifecycle and children behavior, use mount
        - If you want to test children rendering with less overhead than mount and you are not interested in lifecycle methods, use render

### 目录说明
- `test`放置了些测试时会用到的一些插件等
- `__test__`，实际测试脚本放置的位置

### 编写说明
- 如果当前目录只有一个文件且确定不会增加文件，那么可直接创建`xx.test.js`，如果不确定则先创建`__test__`目录，然后在该目录中创建`xx.test.js`


### 运行
npm run test


### 测试的分类
#### 单元测试
- 公共组件，如`App`, `Container`, `Modal`等

#### UI测试
- 模块测试
    单个模块的测试，比如说Transaction模块，分为搜索块、数据处理展示块等方面。搜索块的交互：输入，输出，搜索，折叠等情况。
- 页面测试
    单个模块在页面中展示的正确性测试，以及与其他模块联动的测试。



### Jasmine的一些技巧
#### describe
- describe为正常测试
- xdescribe为需要跳过的测试（即有该标志的直接跳过）
- fdescribe为需要做特别的测试（即除了带该标志的测试进行测试，其他测试都不会运行）

#### it （与describe类似）
- it
- xit
- fit

### 编写测试
#### describe 与 it的描述内容
- `describe`：模块名 + 组件
- `it`描述为测试的测试点
如下：
    
        describe('Ledgers > Transactions > ', () => {
            it('render nav success', () => {});

            it('input account & suggest success', () => {});

            // ....
        })


#### Component 及 经过装饰器封装的Component

- `enzyme`对于经过封装的Component处理起来不是很理想，所以建议`mount/shallow`时，使用未经封装的Component，里面额外需要的props，context可以使用参数传递进去（比如说针对redux, intl这2个处理的Component）
- 参见Transaction中的测试case