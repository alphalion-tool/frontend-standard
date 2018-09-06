# AlphaLion前端开发规范

![AlphaLion](/static/images/markdown/alphalion.png)

## 通用前端

### 目录命名
普通目录采用小写驼峰式。
如：`myDirName`    
针对特殊目录，如路由目录，则用首字母大写驼峰式

### js文件命名
普通采用首字母小写驼峰式，如果导出的是实例，则用首字母大写驼峰式

### css, scss 文件命名
同js命名

### html命名
同上


### HTML部分

#### 语法
- 缩进使用soft tab（4个空格）；    
- 嵌套的节点应该缩进；
- 在属性上，使用双引号，不要使用单引号；
- 属性名全小写，用中划线做分隔符；
- 不要在自动闭合标签结尾处使用斜线（HTML5 规范 指出他们是可选的）；
- 不要忽略可选的关闭标签，例：</li> 和 </body>。

#### 属性顺序

属性应该按照特定的顺序出现以保证易读性；

- `class`    
- `id`    
- `name`
- `data-*`
- `src`, `for`, `type`, `href`, `value` , `max-length`, `max`, `min`, `pattern`
- `placeholder`, `title`, `alt`
- `aria-*`, `role`
- `required`, `readonly`, `disabled`    
- `on*`

class是为高可复用组件设计的，所以应处在第一位；    
id更加具体且应该尽量少使用，所以将它放在第二位。


#### boolean属性

boolean属性指不需要声明取值的属性，XHTML需要每个属性声明取值，但是HTML5并不需要；    

boolean属性的存在表示取值为true，不存在则表示取值为false。


### CSS, SCSS部分

#### 缩进
使用soft tab(4个空格)

#### 分号
每个属性声明末尾都要加分号。

#### 空格

以下几种情况不需要空格：

- 属性名后
- 多个规则的分隔符','前
- !important '!'后
- 属性值中'('后和')'前
- 行末不要有多余的空格

以下几种情况需要空格：

- 属性值前
- 选择器'>', '+', '~'前后
- '{'前
- !important '!'前
- @else 前后
- 属性值中的','后
- 注释'/*'后和'*/'前


#### 空行

以下几种情况需要空行：

- 文件最后保留一个空行
- '}'后最好跟一个空行，包括scss中嵌套的规则
- 属性之间需要适当的空行，具体见属性声明顺序

#### 换行

以下几种情况不需要换行：

- '{'前

以下几种情况需要换行：

- '{'后和'}'前
- 每个属性独占一行
- 多个规则的分隔符','后

#### 注释

注释统一用`/* */`（scss中也不要用'//'），具体参照右边的写法；

缩进与下一行代码保持一致；

可位于一个代码行的末尾，与代码间隔一个空格。


#### 引号

最外层统一使用双引号；

url的内容要用引号；

属性选择器中的属性值需要引号。

    .element:after {
        content: "";
        background-image: url("logo.png");
    }

    li[data-type="single"] {
        ...
    }

#### 命名

采用BEM规则


#### 属性声明顺序

相关的属性声明按右边的顺序做分组处理，组之间需要有一个空行。

    // 下面是推荐的属性的顺序
    [
        [
            "display",
            "visibility",
            "float",
            "clear",
            "overflow",
            "overflow-x",
            "overflow-y",
            "clip",
            "zoom"
        ],
        [
            "table-layout",
            "empty-cells",
            "caption-side",
            "border-spacing",
            "border-collapse",
            "list-style",
            "list-style-position",
            "list-style-type",
            "list-style-image"
        ],
        [
            "-webkit-box-orient",
            "-webkit-box-direction",
            "-webkit-box-decoration-break",
            "-webkit-box-pack",
            "-webkit-box-align",
            "-webkit-box-flex"
        ],
        [
            "position",
            "top",
            "right",
            "bottom",
            "left",
            "z-index"
        ],
        [
            "margin",
            "margin-top",
            "margin-right",
            "margin-bottom",
            "margin-left",
            "-webkit-box-sizing",
            "-moz-box-sizing",
            "box-sizing",
            "border",
            "border-width",
            "border-style",
            "border-color",
            "border-top",
            "border-top-width",
            "border-top-style",
            "border-top-color",
            "border-right",
            "border-right-width",
            "border-right-style",
            "border-right-color",
            "border-bottom",
            "border-bottom-width",
            "border-bottom-style",
            "border-bottom-color",
            "border-left",
            "border-left-width",
            "border-left-style",
            "border-left-color",
            "-webkit-border-radius",
            "-moz-border-radius",
            "border-radius",
            "-webkit-border-top-left-radius",
            "-moz-border-radius-topleft",
            "border-top-left-radius",
            "-webkit-border-top-right-radius",
            "-moz-border-radius-topright",
            "border-top-right-radius",
            "-webkit-border-bottom-right-radius",
            "-moz-border-radius-bottomright",
            "border-bottom-right-radius",
            "-webkit-border-bottom-left-radius",
            "-moz-border-radius-bottomleft",
            "border-bottom-left-radius",
            "-webkit-border-image",
            "-moz-border-image",
            "-o-border-image",
            "border-image",
            "-webkit-border-image-source",
            "-moz-border-image-source",
            "-o-border-image-source",
            "border-image-source",
            "-webkit-border-image-slice",
            "-moz-border-image-slice",
            "-o-border-image-slice",
            "border-image-slice",
            "-webkit-border-image-width",
            "-moz-border-image-width",
            "-o-border-image-width",
            "border-image-width",
            "-webkit-border-image-outset",
            "-moz-border-image-outset",
            "-o-border-image-outset",
            "border-image-outset",
            "-webkit-border-image-repeat",
            "-moz-border-image-repeat",
            "-o-border-image-repeat",
            "border-image-repeat",
            "padding",
            "padding-top",
            "padding-right",
            "padding-bottom",
            "padding-left",
            "width",
            "min-width",
            "max-width",
            "height",
            "min-height",
            "max-height"
        ],
        [
            "font",
            "font-family",
            "font-size",
            "font-weight",
            "font-style",
            "font-variant",
            "font-size-adjust",
            "font-stretch",
            "font-effect",
            "font-emphasize",
            "font-emphasize-position",
            "font-emphasize-style",
            "font-smooth",
            "line-height",
            "text-align",
            "-webkit-text-align-last",
            "-moz-text-align-last",
            "-ms-text-align-last",
            "text-align-last",
            "vertical-align",
            "white-space",
            "text-decoration",
            "text-emphasis",
            "text-emphasis-color",
            "text-emphasis-style",
            "text-emphasis-position",
            "text-indent",
            "-ms-text-justify",
            "text-justify",
            "letter-spacing",
            "word-spacing",
            "-ms-writing-mode",
            "text-outline",
            "text-transform",
            "text-wrap",
            "-ms-text-overflow",
            "text-overflow",
            "text-overflow-ellipsis",
            "text-overflow-mode",
            "-ms-word-wrap",
            "word-wrap",
            "-ms-word-break",
            "word-break"
        ],
        [
            "color",
            "background",
            "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader",
            "background-color",
            "background-image",
            "background-repeat",
            "background-attachment",
            "background-position",
            "-ms-background-position-x",
            "background-position-x",
            "-ms-background-position-y",
            "background-position-y",
            "-webkit-background-clip",
            "-moz-background-clip",
            "background-clip",
            "background-origin",
            "-webkit-background-size",
            "-moz-background-size",
            "-o-background-size",
            "background-size"
        ],
        [
            "outline",
            "outline-width",
            "outline-style",
            "outline-color",
            "outline-offset",
            "opacity",
            "filter:progid:DXImageTransform.Microsoft.Alpha(Opacity",
            "-ms-filter:\\'progid:DXImageTransform.Microsoft.Alpha",
            "-ms-interpolation-mode",
            "-webkit-box-shadow",
            "-moz-box-shadow",
            "box-shadow",
            "filter:progid:DXImageTransform.Microsoft.gradient",
            "-ms-filter:\\'progid:DXImageTransform.Microsoft.gradient",
            "text-shadow"
        ],
        [
            "-webkit-transition",
            "-moz-transition",
            "-ms-transition",
            "-o-transition",
            "transition",
            "-webkit-transition-delay",
            "-moz-transition-delay",
            "-ms-transition-delay",
            "-o-transition-delay",
            "transition-delay",
            "-webkit-transition-timing-function",
            "-moz-transition-timing-function",
            "-ms-transition-timing-function",
            "-o-transition-timing-function",
            "transition-timing-function",
            "-webkit-transition-duration",
            "-moz-transition-duration",
            "-ms-transition-duration",
            "-o-transition-duration",
            "transition-duration",
            "-webkit-transition-property",
            "-moz-transition-property",
            "-ms-transition-property",
            "-o-transition-property",
            "transition-property",
            "-webkit-transform",
            "-moz-transform",
            "-ms-transform",
            "-o-transform",
            "transform",
            "-webkit-transform-origin",
            "-moz-transform-origin",
            "-ms-transform-origin",
            "-o-transform-origin",
            "transform-origin",
            "-webkit-animation",
            "-moz-animation",
            "-ms-animation",
            "-o-animation",
            "animation",
            "-webkit-animation-name",
            "-moz-animation-name",
            "-ms-animation-name",
            "-o-animation-name",
            "animation-name",
            "-webkit-animation-duration",
            "-moz-animation-duration",
            "-ms-animation-duration",
            "-o-animation-duration",
            "animation-duration",
            "-webkit-animation-play-state",
            "-moz-animation-play-state",
            "-ms-animation-play-state",
            "-o-animation-play-state",
            "animation-play-state",
            "-webkit-animation-timing-function",
            "-moz-animation-timing-function",
            "-ms-animation-timing-function",
            "-o-animation-timing-function",
            "animation-timing-function",
            "-webkit-animation-delay",
            "-moz-animation-delay",
            "-ms-animation-delay",
            "-o-animation-delay",
            "animation-delay",
            "-webkit-animation-iteration-count",
            "-moz-animation-iteration-count",
            "-ms-animation-iteration-count",
            "-o-animation-iteration-count",
            "animation-iteration-count",
            "-webkit-animation-direction",
            "-moz-animation-direction",
            "-ms-animation-direction",
            "-o-animation-direction",
            "animation-direction"
        ],
        [
            "content",
            "quotes",
            "counter-reset",
            "counter-increment",
            "resize",
            "cursor",
            "-webkit-user-select",
            "-moz-user-select",
            "-ms-user-select",
            "user-select",
            "nav-index",
            "nav-up",
            "nav-right",
            "nav-down",
            "nav-left",
            "-moz-tab-size",
            "-o-tab-size",
            "tab-size",
            "-webkit-hyphens",
            "-moz-hyphens",
            "hyphens",
            "pointer-events"
        ]
    ]

#### 颜色

颜色16进制用小写字母；

颜色16进制尽量用简写。


#### 属性简写

属性简写需要你非常清楚属性值的正确顺序，而且在大多数情况下并不需要设置属性简写中包含的所有值，所以建议尽量分开声明会更加清晰；

margin 和 padding 相反，需要使用简写；

常见的属性简写包括：

- font
- background
- transition
- animation

#### 媒体查询

尽量将媒体查询的规则靠近与他们相关的规则，不要将他们一起放到一个独立的样式文件中，或者丢在文档的最底部，这样做只会让大家以后更容易忘记他们。

    .element {
        ...
    }

    .element-avatar{
        ...
    }

    @media (min-width: 480px) {
        .element {
            ...
        }

        .element-avatar {
            ...
        }
    }

#### SCSS相关

提交的代码中不要有 @debug；

声明顺序：

- @extend
- 不包含 @content 的 @include
- 包含 @content 的 @include
- 自身属性
- 嵌套规则

@import 引入的文件不需要开头的'_'和结尾的'.scss'；

嵌套最多不能超过5层；

@extend 中使用placeholder选择器；

去掉不必要的父级引用符号'&'。


    /* not good */
    @import "_dialog.scss";

    /* good */
    @import "dialog";


    /* not good */
    .element {
        & > .dialog {
            ...
        }
    }

    /* good */
    .element {
        > .dialog {
            ...
        }
    }



### JS部分
#### 缩进
使用soft tab(4个空格)


#### 单行长度

不要超过300



#### 分号

建议均带上分号。


如不全带上，至少以下几种情况后需加分号：

- 变量声明
- 表达式
- return
- throw
- break
- continue
- do-while


#### 空格

以下几种情况不需要空格：

- 对象的属性名后
- 前缀一元运算符后
- 后缀一元运算符前
- 函数调用括号前
- 无论是函数声明还是函数表达式，'('前不要空格
- 数组的'['后和']'前
- 对象的'{'后和'}'前
- 运算符'('后和')'前

以下几种情况需要空格：

- 二元运算符前后
- 三元运算符'?:'前后
- 代码块'{'前
- 下列关键字前：else, while, catch, finally
- 下列关键字后：if, else, for, while, do, switch, case, try, catch, finally, with, return, typeof
- 单行注释'//'后（若单行注释和代码同行，则'//'前也需要），多行注释'*'后
- 对象的属性值前
- for循环，分号后留有一个空格，前置条件如果有多个，逗号后留一个空格
- 无论是函数声明还是函数表达式，'{'前一定要有空格
- 函数的参数之间

#### 空行

以下几种情况需要空行：

- 变量声明后（当变量声明在代码块的最后一行时，则无需空行）
- 注释前（当注释在代码块的第一行时，则无需空行）
- 代码块后（在函数调用、数组、对象中则无需空行）
- 文件最后保留一个空行


#### 换行

换行的地方，行末必须有','或者运算符；

以下几种情况不需要换行：

- 下列关键字后：else, catch, finally
- 代码块'{'前

以下几种情况需要换行：

- 代码块'{'后和'}'前
- 变量赋值后

    

        // not good
        var a = {
            b: 1
            , c: 2
        };

        x = y
            ? 1 : 2;

        // good
        var a = {
            b: 1,
            c: 2
        };

        x = y ? 1 : 2;
        x = y ?
            1 : 2;

        // no need line break with 'else', 'catch', 'finally'
        if (condition) {
            ...
        } else {
            ...
        }

        try {
            ...
        } catch (e) {
            ...
        } finally {
            ...
        }

        // not good
        function test()
        {
            ...
        }

        // good
        function test() {
            ...
        }

        // not good
        var a, foo = 7, b,
            c, bar = 8;

        // good
        var a,
            foo = 7,
            b, c, bar = 8;



#### 单行注释

双斜线后，必须跟一个空格；

缩进与下一行代码保持一致；

可位于一个代码行的末尾，与代码间隔一个空格。


#### 多行注释

最少三行, '*'后跟一个空格，具体参照右边的写法；

建议在以下情况下使用：

- 难于理解的代码段
- 可能存在错误的代码段
- 浏览器特殊的HACK代码
- 业务逻辑强相关的代码

        /*
         *
         */

#### 文档注释

各类标签@param, @method等请参考usejsdoc和JSDoc Guide；

建议在以下情况下使用：

- 所有常量
- 所有函数
- 所有类


#### 引号

最外层统一使用单引号。


#### 变量命名

- 标准变量采用驼峰式命名（除了对象的属性外，主要是考虑到cgi返回的数据）
- 'ID'在变量名中全大写
- 'URL'在变量名中全大写
- 'Android'在变量名中大写第一个字母
- 'iOS'在变量名中小写第一个，大写后两个字母
- 常量全大写，用下划线连接
- 构造函数，大写第一个字母

#### 变量声明

一个函数作用域中所有的变量声明尽量提到函数首部，用一个var声明，不允许出现两个连续的var声明。


#### 函数

无论是函数声明还是函数表达式，'('前不要空格，但'{'前一定要有空格；

函数调用括号前不需要空格；

立即执行函数外必须包一层括号；

不要给inline function命名；

参数之间用', '分隔，注意逗号后有一个空格。


#### 数组、对象

对象属性名不需要加引号；

对象以缩进的形式书写，不要写在一行；

数组、对象最后不要有逗号。

    // not good
    var a = {
        'b': 1
    };

    var a = {b: 1};

    var a = {
        b: 1,
        c: 2,
    };

    // good
    var a = {
        b: 1,
        c: 2
    };


#### 括号

下列关键字后必须有大括号（即使代码块的内容只有一行）：if, else, for, while, do, switch, try, catch, finally, with。

    // not good
    if (condition)
        doSomething();

    // good
    if (condition) {
        doSomething();
    }


#### null

适用场景：

- 初始化一个将来可能被赋值为对象的变量
- 与已经初始化的变量做比较
- 作为一个参数为对象的函数的调用传参
- 作为一个返回对象的函数的返回值

不适用场景：

- 不要用null来判断函数调用时有无传参
- 不要与未初始化的变量做比较


#### undefined

永远不要直接使用undefined进行变量判断；

使用typeof和字符串'undefined'对变量进行判断。

这样，可以避免未声明的变量导致程序中断。


    // not good
    if (person === undefined) {
        ...
    }

    // good
    if (typeof person === 'undefined') {
        ...
    }


#### jshint

用'===', '!=='代替'==', '!='；

for-in里一定要有hasOwnProperty的判断；

不要在内置对象的原型上添加方法，如Array, Date；

不要在内层作用域的代码里声明了变量，之后却访问到了外层作用域的同名变量；

变量不要先使用后声明；

不要在一句代码中单单使用构造函数，记得将其赋值给某个变量；

不要在同个作用域下声明同名变量；

不要在一些不需要的地方加括号，例：delete(a.b)；

不要使用未声明的变量（全局变量需要加到.jshintrc文件的globals属性里面）；

不要声明了变量却不使用；

不要在应该做比较的地方做赋值；

debugger不要出现在提交的代码里；

数组中不要存在空元素；

不要在循环内部声明函数；

不要像这样使用构造函数，例：new function () { ... }, new Object；


#### 杂项

默认设置tab会自动变成4个空格

不要在一处使用多个tab或space；

换行符统一用'LF'；

对上下文this的引用只能使用'_this', 'that', 'self'其中一个来命名；

行尾不要有空白字符；

switch的falling through和no default的情况一定要有注释特别说明；

不允许有空的代码块。



### React及相关部分

#### React组件
- 采用es6的方式来写组件, class XX extends Component { }
- 文件名用大写驼峰式
- 组件实例的命名（实例化）则用小写驼峰式 `const reservationItem = <ReservationCard />;`
- Dom片段里的属性值用双引号
- 在自关闭标签前添加一个空格
- 书写propTypes，规定每个可接受属性的类型，并对propTypes加以jsdoc说明
- 参数的key用首字母小写的驼峰方式  (<Foo dataA="xx" />)
- 当props的值为字面值true时，可以省略`={true}`
- 如果dom片段多于一行，需要加上`()`；如果只是一行，那么可以省略`()`
- 如果组件没有children时，则写成自关闭标签。`<Foo></Foo>` => `<Foo />`
- 当组件有多个props是，自关闭标签需要另起一行。

        // bad
        <Foo
          bar="bar"
          baz="baz" />

        // good
        <Foo
          bar="bar"
          baz="baz"
        />

- 组件内的Handler函数，用箭头函数方式声明，省去在contrusctor中bind过程
- 父子组件传递props时，如果是数据的话，则加上`data`前缀，如果是事件回调则加上`on`前缀，其他则按照意义来命名
- 不建议在生命周期内使用复杂度为O(n2)及以上介的算法。
- 只能通过以下2种方法设置组件内部状态：
        
        1, 通过父组件`render`方法，改变子组件的props
        2, 通过子组件的`setState`方法   

- 一般情况下不允许出现addEventListener
- 每个文件只包含一个组件；
    如果是无状态的组件，允许一个文件包含多个组件

#### 组件内函数的顺序
- static静态方法
- constructor
- getChildContext
- componentWillMount
- componentDidMount
- componentWillReceiveProps
- shouldComponentUpdate
- componentWillUpdate
- componentDidUpdate
- componentWillUnmount
- 点击回调或者事件回调 比如 handleClickSubmit() 或者 handleChangeDescription()
- getter函数
- render函数中用到的渲染方法 比如 renderSelectReason() 或者 renderFooterContent()
- render

#### 组件声明
大组件内部，建议用函数的方式拆分更多小的无状态组件。

    // 有状态组件
    class R extends Component {
        // ...
    }

    // 无状态组件，推荐
    function Content ({ name, className }) {
        // 其他计算
        return <div className={className}>name</div>;
    }
    
    // 无状态组件，箭头函数式
    const Content = ({ name, className }) => (<div className={className}>name</div>);

#### 公共组件
公共组件分为基础公共组件及业务公共组件。      

- 基础公共组件，不可涉及到数据请求，redux绑定，允许做一些简单逻辑上的处理。（放置位置在`js/components`）
- 业务公共组件，可以加入数据请求。(`js/routes/Work/components`或者某个路由里的`components`目录)

在业务变化时，在基础功能组件不变的情况下，只新增或者修改业务公共组件即可满足业务

#### 高阶组件
善用高阶组件来更好的完成需求

如下举例：页面展示的内容是通过异步请求的，要求在请求是loading Spinner，等数据完成后，显示得到的数据

    // 定义一个高阶组件

    function withLoadingSpinner(Component) {
      return function EnhancedComponent({ isLoading, ...props }) {
        if (!isLoading) {
          return <Component { ...props } />;
        }

        return <LoadingSpinner />;
      };
    }

    // 使用

    const ListItemsWithLoadingIndicator = withLoadingSpinner(ListItems);

    <ListItemsWithLoadingIndicator
      isLoading={props.isLoading}
      list={props.list}
    />


[recompose](https://github.com/acdlite/recompose)提供了一些高阶函数
(HOC最终返回的是一个新的ReactComponent)

#### 装饰器
增强功能。


#### 带有业务逻辑的样式名管理

使用classnames模块来管理


    import classNames from 'classnames'

    var buttonClasses = classNames(
      'button',
      {
        'warning': isRemoveButton
      },
    );

    <button className={buttonClasses} />

#### redux方面
redux按照路由模块去区分，通过异步的方式导入。可以参考已有的路由


#### 模块
使用`import / export`来做模块加载导出，不使用非标准模块写法

`import / export` 后面采用花括号{ }引入模块的写法时，须在花括号内左右各保留一个空格

#### jsdoc方面

[es2015 class doc写法](http://usejsdoc.org/howto-es2015-classes.html)
[es2015 modules doc写法](http://usejsdoc.org/howto-es2015-modules.html)
