import React from "react";

const element = <h1 className="greeting">Hello jsx!</h1>
// 打印后会发现 就是 createElement 形式的对象
console.log(element)
export default class jsxStyle extends React.Component {
    render() {
        return (
        <div>
            {
            // jsx 仅仅是 createElement() 方法的语法糖(简化语法)
            // jsx 与 createElement 的关系就是相互转换的关系
            // jsx 对开发来说更友好，createElement 对于程序来说更好一些运行
            // jsx 语法
            // const element = {
            //  <h1 className="greeting">
            //   Hello jsx!
            //  </h1>
            // }

            // jsx 语法被 @babel/preset-react 插件编译为 createElement() 方法
            // createElement()
            // const element = React.createElement(
                // 'h1'
                // {className: 'greeting'}
                // 'hello jsx!'
            // )

            // jsx 转换了 createElement，那么更深的去看，createElement 转换成了什么？
            // 转换成了 react元素 这样的东西
            // react 元素是一个js对象，用来描述你希望在屏幕上看到的内容
            // const element = {
            //  type: 'h1',
            //  props: {
            //      className: 'greeting',
            //      children: 'hello jsx'
            //  }
            // }
            }
        </div>
        )
    }
}