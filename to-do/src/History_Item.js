import { memo } from "react";

const History_Item = ({history_title, index}) => (
    <div className="history_item">
        <div className="history_title">
            <em>{index+1}.</em>
            <span>{history_title}</span>
        </div>
    </div>
)

export default memo(History_Item)