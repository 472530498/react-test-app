import React from 'react';
// import Button from "element-react/src/button";
import {Button, Input, Select, Form} from 'element-react';

class PageOne extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                name: '',
                region: '',
                date1: null,
                date2: null,
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }
        };
    }

    onSubmit(e) {
        e.preventDefault();
    }

    onChange(key, value) {
        this.setState(state => {
            state.form[key] = value;
        })
        this.forceUpdate();
    }

    componentDidMount() {
        console.log(this.props.location.query.name)
        console.info('form componentDidMount')
    }

    componentWillUnmount() {
        console.info('form componentWillUnmount')
    }

    render() {
        return (
            <Form model={this.state.form} labelWidth="80" onSubmit={this.onSubmit.bind(this)}>
                <Form.Item label="活动名称">
                    <Input value={this.state.form.name} onChange={this.onChange.bind(this, 'name')}></Input>
                </Form.Item>
                <Form.Item label="活动区域">
                    <Select value={this.state.form.region} placeholder="请选择活动区域">
                        <Select.Option label="区域一" value="shanghai"></Select.Option>
                        <Select.Option label="区域二" value="beijing"></Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" nativeType="submit">立即创建</Button>
                    <Button>取消</Button>
                </Form.Item>
            </Form>
        )
    }
}

export {PageOne}
