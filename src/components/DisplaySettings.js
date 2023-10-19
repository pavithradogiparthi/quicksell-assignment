import React from 'react';
import "../App.css"
const Display = (props)=>{
    return (
        <div className="dialog-box-wrap" >
            <div className = "dialog-box">
                <div className="feild">
                    <label htmlFor="grouping">Grouping</label>
                    <select name="grouping" id="group" value={props.grouping} onChange={e=>props.setGrouping(e.target.value)}>
                        <option value="status">Status</option>
                        <option value="user">User</option>
                        <option value="priority">Priority</option>
                    </select>
                </div>
                <div className="feild">
                    <label htmlFor="ordering">Ordering</label>
                    <select name="order" id="order" value={props.ordering} onChange={e=>props.setOrdering(e.target.value)}>
                        <option value="priority">Priority</option>
                        <option value="title">Title</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Display;
