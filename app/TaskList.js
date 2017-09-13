/**
 * Created by apple on 2017/9/13.
 */
import  { createElement, Component } from 'tinyreact'
export default class TaskList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.list.map((element) => {
                        return (<li
                            style={{ textDecoration: element.status === 'done' ? 'line-through' : 'none'}}
                            onClick={ e => this.props.changeStatus(element)}
                        >{element.value}</li>)
                    })}
                </ul>
            </div>
        )
    }
}