## Lion Design组件使用

### 安装
在`package.json`文件的`dependencies`中增加:
    
    "@frontend/lion-design": "git+https://gitlab.alphaliongroup.com/frontend/lion-design.git#v0.1.6"

以上是通过https的方式，安装的时候按照提示操作。
目前走ssh的方式比较慢。

### 使用
    
    // import components from lib
    import { Table, Input } from '@frontend/lion-design';

    
    // import style from lib
    import '@frontend/lion-design/lib/lion-design.css';
        // or
    import '@frontend/lion-design/lib/lion-design.scss';  // recommend this
        // 该种方法会导入scss中各种Mixin等


    // 单独导入某个组件
    import Table '@frontend/lion-design/lib/table';
    import Table '@frontend/lion-design/lib/table/style/index.css';   // 建议全局引入



