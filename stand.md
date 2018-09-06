
## 模块编写：
以module User为例，目录结构如下

    User
    |--- components  // 组件，包括搜索块、此模块的弹框编辑操作等
    |       |--- UserQuery.js 用户搜索块内容
    |       |--- UserEditModal.js  用户弹窗编辑界面
    |       |--- UserForm.js   // form界面
    |       |--- UserPanel.js  // panel界面
    |       |--- UserAwesomeCell.js // 表格中的cell (仅用在当前页面中，如果超过两个，则放在jscom/components/table/cell中)
    |
    |--- config  // 配置项，用于数据处理，比如说表格配置，表单配置，表格网络数据处理等 
    |       |--- form.js  // 主要用于放置表单配置，以及部分数据映射关系
    |       |--- table.js  // 主要放置表格配置、部分数据映射关系、表格数据预处理等
    |       |--- export.js  // 用于表格中 导出配置
    |
    |--- containers  
    |       |--- User.js  // 用户模块容器页，用于渲染搜索、表单、表格等
    |
    |--- modules
    |       |--- action.js  // redux action，网络请求直接调用jscom/services模块接口
    |       |--- reducer.js  // redux reducer
    |       
    |--- index.js  // 路由等入口配置

### Query组件编写
- 拥有展开，折叠，清空等功能。(如果确定只在一行展示，且所有的搜索条件不可多选，则去除展开折叠功能)
- 使用immutable存储query中的数据 

        import { IMap } from 'jscom/utils/immutable';

        // state 
        this.setState({
            querys: new IMap({})
        })

- 使用`immutableInject`
    
        import { immutableInject } from 'jscom/utils/decorators';

        @immutableInject
        class User extends Component

- 如需结合location.query，则使用shallowEqual判断前后次是不是不同，然后去重设当前的state
    
        import shallowEqual from 'shallowEqual';

        componentWillReceiveProps (nextProps) {
            if (shallowEqual(nextProps.location.query), this.props.location.query) {
                this.setState({
                    // xxxx
                })
            }
        }

### Container容器组件编写
- props参数声明以及对应的注释
- 左侧，右侧，底部边框为`20px`
- 支持分页
- 使用`immutableInject`
- 表格数据预处理，均需要为驼峰式，需要预处理的数据有`日期`, `数量`, `价格`, `时间`, `symbols`, `各种type映射` 等，同时需要保留原字段内容
- 链接跳转需要用`jscom/utils/window`下的接口
- 网络请求用redux完成
- 该模块代码里不能有数据复杂处理逻辑，复杂逻辑放置在config目录下
- 用到的常量在`jscom/config/constants`目录中声明好
- 组件内部书写顺序: `'static-methods', 'type-annotations', 'lifecycle', 'refresize', 'everything-else', 'handleing', 'rendering'`
    
    说明：不推荐在组件里声明变量属性，存放render中需要的值，如果说需要，则放在静态变量之下，constrcutor之上，同时加上在行尾加上 // eslint-disable-line react/sort-comp，如果使用了flow，则不用加该注释

- 如果是bool参数，命名优先考虑`has|is`，如`isLoading`, `hasTotal`
- 设置ref的函数命名方式为`refxxSet`, 如`refBodySet`等
- 如果需要eslint-disable，只能使用单行模式，不可使用全局，或者某个函数块。如：
    
        xxx your code xxxx;  // eslint-disable-line no-use-before-define
- flexlayout layout, 
