import React from 'react';
import {Button} from 'element-react';

class Welcome extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello,  {this.state.isToggleOn ? 'ON' : 'OFF'}</h1>
                <Button type="primary" onClick={this.handleClick.bind(this, '刘谦')}>点击填写表单</Button>
            </div>
        );
    }

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // 为了在回调中使用 `this`，这个绑定是必不可少的
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick(name) {
        console.log(this)
        console.log(name)
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
        this.props.history.push({pathname : '/form/33', query: {name: '李老师'}, xx: {}})
        // this.context.router.push('/path')
        // this.props.location = '/form'
    }

    componentDidMount() {
        console.info('welcome componentDidMount')
    }

    componentWillUnmount() {
        console.info('welcome componentWillUnmount')
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.info('在最近一次渲染输出（提交到 DOM 节点）之前调用')
        return null;
    }

    static getDerivedStateFromProps(props, state) {
        console.info('初始挂载及后续更新时都会被调用')
        return state
    }
}

export {Welcome}
