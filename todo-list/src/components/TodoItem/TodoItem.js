import React, { Component } from 'react';
import styles from './TodoItem.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);

class TodoItem extends Component {
    
    shouldComponentUpdate(nextProps,nextState){
        return this.props.done !== nextProps.done;
    }
    //최적화를 위해 done이 수정될때만 컴포넌트를 리랜더링 한다.

    render() {

        const {done,children,onToggle,onRemove} = this.props;

        return (
            <div className={cx('todo-item')} onClick={onToggle}>
                <input className={cx('tick')} type="checkbox" checked={done} readOnly/>
                <div className={cx('text',{done})}>{children}</div>
                <div className={cx('delete')} onClick={(e)=>{
                        onRemove();
                        e.stopPropagation();
                        //부모태그에 이미 클릭 작업이 있어 중복 되지 않기 위해 stopPropagation을 해준다
                    }
                }>[지우기]</div>
            </div>
        );
    }
}

export default TodoItem;