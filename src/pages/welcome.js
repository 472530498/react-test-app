import React from 'react';
// import Button from "element-react/src/button";
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
        this.props.history.push('/form')
        // this.context.router.push('/path')
        // this.props.location = '/form'
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
}

export {Welcome}
