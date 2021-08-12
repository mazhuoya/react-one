import React from "react";
import SetStateStyle from "../components/setStateStyle"

export default class styleReactPrinciple extends React.Component {
    render() {
        return (
        <div><div>3. react 原理入门</div>
            {/* 查看时可注释掉所有，一个一个查看 */}
            <SetStateStyle /> {/* setState 的方法说明 */}
        </div>
        )
    }
}