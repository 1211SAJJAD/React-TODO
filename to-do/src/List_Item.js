import { memo } from "react";

const List_Item = ({ title, removeTODO, index }) => (
    <div className="list_item">
        <div className="title"><em>{index+1}.</em>{title}</div>
        <button onClick={() => removeTODO(index)} className="remove-btn">Remove</button>
    </div>
)

export default memo(List_Item)