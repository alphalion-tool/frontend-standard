## Javascript、React编码规范

### 基本规范
- 每个文件只包含的一个 React 组件（关联紧密的组件可以使用[命名空间的形式]）    
- 使用ES6    

### 命名规范
- 如果是配置config/actions/reducers/module等为小驼峰方式
- 扩展名为`.js`    
- 组件文件名：为大驼峰命名法，如 `MyComponent.js`
- 组件命名与文件名一致
- 引用命名：React组件使用大驼峰命名法，HTML标签、组件实例使用小驼峰命名法
    
        // bad
        const reservationCard = require('./ReservationCard');

        // good
        const ReservationCard = require('./ReservationCard');

        // bad
        const ReservationItem = <ReservationCard />;

        // good
        const reservationItem = <ReservationCard />;

        // HTML tag
        const myDivElement = <div className="foo" />;
        React.render(myDivElement, mountNode);
- 带有命名空间的组件    
    如果有多个关联子组件，使用命名空间编写。如

            MyFormComponent
            MyFormComponent.Row
            MyFormComponent.Input 

### 组件声明
- 组件通过class方式来创建

### 属性
#### 属性命名 
- React组件的属性使用小驼峰命名法
- `class` => `className` , `for` => `htmlFor`

#### 传递给HTML的属性
- 自定义属性，要添加`data-`前缀

#### 属性设置
- 组件内的属性需加上`propTypes`校验[propTypes种类](http://jamestw.logdown.com/posts/257890-257890-reactjs-prop)

#### 属性对齐方式
- 属性较少时可以行内排列；
- 属性较多时每行一个属性，闭合标签单独成行

        
        // bad - aligning attributes after the tag
        <input type="text"  
               value={this.state.newDinosaurName}
               onChange={this.inputHandler.bind(this, 'newDinosaurName')} />

        // good
        <input  
          type="text"
          value={this.state.newDinosaurName}
          onChange={this.inputHandler.bind(this, 'newDinosaurName')}
         />

#### 行内迭代
- 运算逻辑简单的直接使用行内迭代。    

        return (
          <div>
            {this.props.data.map(function(data, i) {
              return (<Component data={data} key={i} />)
            })}
            </div>
        );

#### 运用条件表达式 
    
    // 条件判断
    render() {
      <div class="search-results-container">
        {this.props.isGrid
          ? <SearchResultsGrid />
          : <SearchResultsList />}
      </div>
    }

    // 条件判断
    render() {
      <div class="search-results-list">
        {!!this.props.isSoftSort && <SoftSortBanner />}
      </div>
    }


### 其他代码格式

#### 注释
- 组件之间的注释用`{}`包裹

        var content = (
            <Nav>
              {/* child comment, put {} around */}
              <Person
                /* multi
                   line
                   comment */
                name={window.isLoggedIn ? window.name : ''} // end of line comment
              />
            </Nav>
        );

#### 引号使用
- HTML/React标签属性用`"`
- JS中使用单引号`'`

        // bad
        <Foo bar='bar' />

        // good
        <Foo bar="bar" />

        // bad
        <Foo style={{ left: "20px" }} />

        // good
        <Foo style={{ left: '20px' }} />

        // JavaScript Expression
        const person = <Person name={window.isLoggedIn ? window.name : ''} />;

        // HTML/JSX
        const myDivElement = <div className="foo" />;
        const app = <Nav color="blue" />;
        const content = (
          <Container>
            {window.isLoggedIn ? <Nav /> : <Login />}
          </Container>
        );


#### 多行JSX使用()包裹，有组件嵌套时使用多行模式
     // bad
      return (<div><ComponentOne /><ComponentTwo /></div>);

      // good
      var multilineJsx = (  
        <header>
          <Logo />
          <Nav />
        </header>
      );

      // good
      return (
        <div>
          <ComponentOne />
          <ComponentTwo />
        </div>
      );

#### 单行JSX省略`()`
      var singleLineJsx = <h1>Simple JSX</h1>;  

      // good, when single line
      render() {
        const body = <div>hello</div>;
        return <MyComponent>{body}</MyComponent>;
      }

#### 自闭合标签
所有元素标签必须闭合。如果没有子元素建议自闭合标签。在`/`钱留一个空格    

    // bad
    <Logo></Logo>
    <Logo/>

    // very bad
    <Foo                 />

    // bad
    <Foo
     />

    // good
    <Logo />


#### 组件内部
- 不要使用下划线命名React组件方法

        // bad
        React.createClass({
            _onClickSubmit() {
              // do stuff
            }

            // other stuff
        });

        // good
        React.createClass({
            onClickSubmit() {
              // do stuff
            }

            // other stuff
        });
- 按照生命周期顺序写组件的方法、属性
- 方法（属性）之间空一行
- `render()`始终放在最后
- 自定义方法放在React API之后，放下`render()`之前

#### 避免使用array index作为属性`key`。
    
    // bad
    {todos.map((todo, index) =>
      <Todo
        {...todo}
        key={index}
      />
    )}

    // good
    {todos.map(todo => (
      <Todo
        {...todo}
        key={todo.id}
      />
    ))}

#### 定义那些非必须的props的默认值

    // bad
    function SFC({ foo, bar, children }) {
      return <div>{foo}{bar}{children}</div>;
    }
    SFC.propTypes = {
      foo: PropTypes.number.isRequired,
      bar: PropTypes.string,
      children: PropTypes.node,
    };

    // good
    function SFC({ foo, bar }) {
      return <div>{foo}{bar}</div>;
    }
    SFC.propTypes = {
      foo: PropTypes.number.isRequired,
      bar: PropTypes.string,
    };
    SFC.defaultProps = {
      bar: '',
      children: null,
    };


#### ref使用ref callbacks

    // bad
    <Foo
      ref="myRef"
    />

    // good
    <Foo
      ref={(ref) => { this.myRef = ref; }}
    />

    #### 在constuctor中将event handlers 或 bind至this  
    // bad
    class extends React.Component {
        onClickDiv() {
          // do stuff
        }

        render() {
          return <div onClick={this.onClickDiv.bind(this)} />
        }
    }

      // good
    class extends React.Component {
        constructor(props) {
          super(props);
        }

        onClickDiv = () => {
          // do stuff
        }

        render() {
          return <div onClick={this.onClickDiv} />
        }
      }


### Immutable的使用
Immutable的使用，目前将一些必要的类、函数封装在`src/js/utils/immutable.js`文件中    



### eslint rules
- [arrow-parens](http://eslint.org/docs/rules/arrow-parens)



### 参考资料
- [airbnb react](https://github.com/airbnb/javascript/tree/master/react)
