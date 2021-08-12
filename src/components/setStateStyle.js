import React from "react";

export default class setStateStyle extends React.Component {
    state = {
        count: 1
    }

    handleClick = () => {
        // 1.1
        // 此处更新 setState
        // 注意：异步更新数据的！！！
        this.setState({
            // 1 + 1
            count: this.state.count + 1
        })
        console.log("count1", this.state.count) // 1

        // 注意：使用该语法时，后面的 setState() 不要依赖于前面的 setState()
        // 原因：因为 setState 是异步的，上面代码中可以看出，即使是 setState 执行了，
        //      打印的还是 1，那么后面再执行 setState，相当于还是 1 + 1
        this.setState({
            // 1 + 1
            count: this.state.count + 1
        })
        console.log("count2", this.state.count) // 1
        
        // 注意：当然，是可以多次调用 setState(),但只会触发一次重新渲染
        //      以下 render 中打印验证
        // 原因：为什么这么做呢？其实是为了性能的考虑，如果 setState 一次，就 render 一次，那么性能是很差的
        //      所以，会把多次调用的 setState 汇总合并，最后一次性的把结果渲染的页面上，只 render 一次。这样的性能会高很多

        // 1.2
        // 上面的异步问题如果依赖前面的 setState会出现异步问题
        // 那么，推荐使用 setState((state, props) => {})
        // 参数state：表示最新的state
        // 参数props：表示最新的props
        // 注意：这种语法也是异步更新state的
        this.setState((state, props) => {
            // 此时 state 是默认值
            return {
                // 1 + 1
                count: state.count + 1  // 2
            }
        })
        // 那么 setState((state, props) => {}) 与 this.setState({}) 有什么区别呢？
        // 这个语法跟上面的语法的区别是参数是个回调函数，而回调函数中的参数state实际上表示的是最新的状态的
        // 什么意思呢？就是调用两次 setState 的时候，第一次state是默认值，但第二次就不是默认值了，而是上一次setState之后的值
        this.setState((state, props) => {
            // 这次 state 是拿到调用之后的结果
            console.log('第二次调用',state)
            // 此时 state 的值是上面 setState 之后的值
            return {
                // 2 + 1
                count: state.count + 1  // 3
            }
        })

        // 1.3 第二个参数
        // 在状态更新（页面完成重新渲染）后立即执行某个操作
        // setState(undater,[callback])
        this.setState((state, props) => {
            return {
                // 1 + 1
                count: state.count + 1 // 2
            }
        },() => {
            console.log("状态更新完成：", this.state.count) // 2
        })
    }
    render() {
        console.log("render-----")
        return (
        <div>
            <h1>计数器：{this.state.count}</h1>
            <button onClick = {this.handleClick}>加1</button>
        </div>
        )
    }
}