## CSS编码规范

### 书写规范
按照sass预处理，以及BEM模式来书写，同时需要控制层级。建议在3层以内。block的命名用`-`字符。    
    
    .section-auth{}   // auth块
    .section-work{}  // work块
    .block{}    // 块
    .block__element{}  // 块 + 元素
    .block__element--modifier{}    // 块 + 元素 + 修饰符
    比如说一个TAB块，以及对应的tab样式可以简单写成:
        .tab{}
        .tab__tab1{}
        .tab__tab1--active{}
        也可以写为 
        .tab{
            &__tab1{

                &--active{

                }
            }
        }
    比如说在menu的某个item里面有个icon
    .menu__item1__icon   // 按钮
    .menu__item1__icon-new  // 新建按钮

    针对动画
    动画的keyframes统一加上animate，多个字母在一起请用下划线连接在一起。其次再加上模块 + 动画名称，如animate-account-enter-in

    sass变量、函数、混合宏命名采用连字符方式：
        css-y方式。如nav-theme-color, nav-theme-bg-color
    单词可缩写尽量用缩写的。如section为sec, background为bg，如果没有通用的缩写代替的话，建议用原单词。
    section为sec
        


### 用的第三方资源
- purecss(在css/lib/purecss目录中，不过对前缀已经修改了)    

### css 常用关键词
- 布局类：header, footer, container, main, content, aside, page, section      
- 包裹类：wrap, inner    
- 区块类：region, block, box    
- 结构类：hd, bd, ft, top, bottom, left, right, middle, col, row, grid, span    
- 列表类：list, item, field    
- 主次类：primary, secondary, sub, minor    
- 大小类：s, m, l, xl, large, small    
- 状态类：active, current, checked, hover, fail, success, warn, error, on, off    
- 导航类：nav, prev, next, breadcrumb, forward, back, indicator, paging, first, last
- 交互类：tips, alert, modal, pop, panel, tabs, accordion, slide, scroll, overlay, mask
- 星级类：rate, star
- 分割类：group, seperate, divider
- 等分类：full, half, third, quarter
- 表格类：table, tr, td, cell, row
- 图片类：img, thumbnail, original, album, gallery
- 语言类：cn, en
- 论坛类：forum, bbs, topic, post
- 方向类：up, down, left, right
- 其他语义类：btn, close, ok, cancel, switch; link, title, info, intro, more, icon; form, label, search, contact, phone, date, email, user; view, loading...


### sass中的特殊符号    
- &    
    见[link](https://seesparkbox.com/foundry/how_to_use_ampersands_to_simplifiy_your_sass)
- @at-root     
    见[link](http://alwaystwisted.com/articles/2014-03-08-using-sass-33s-at-root-for-piece-of-mind)    


### BEM相关文章
- [More Transparent UI Code with Namespaces](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/)     
- 命名空间有：(具有全局性、可复用的) 

        p-: page
            .p-trade{}
            .p-accounts
            .p-auth
    
        o-: 
            .o-layout{}

        c-: Component Namespaces.
            .c-modal{} 
            .c-modal__title{}
            .c-modal__content{}
            .c-btn{}
            .c-modal--wide
            .c-modal--small
            .c-page-foot
            .c-page-head

        u-: Utility Namespaces
            .u-clearfix{} 
            .u-font-size-large
            .u-text-center{}
            .u-vertical-center{}
            .u-flex-1{}
            .u-hidden{}


        s-: scope  定义新的作用域
            .s-cms-content{}
            .s-trade-title{}
            .s-auth-title

        t-: theme
            .t-light{}

        _: hack
            ._c-footer-mobile{}

        qa-: for QA team
            .qa-error-login{}

### css简写指南
- animation:    
    [link](http://www.w3school.com.cn/cssref/pr_animation.asp)
- background:    
    [link](http://www.jianshu.com/p/fa07c2606380)

### 优秀UI
- [blueprint](http://blueprintjs.com/docs/#overview)    
- 