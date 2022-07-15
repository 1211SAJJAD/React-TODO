import { memo } from "react";
import History_Item from "./History_Item";

const History = ({ history }) => {
    console.log('History...')
    const history_jsx = history.map((history_title, index) => (
        <History_Item key={history_title} history_title={history_title} index={index} />
    ))

    return (
        <div id="header_history">
            <h3>HISTORY:</h3>
            <div id="history_list">
                {history_jsx}
            </div>
        </div>
    )
}

export default memo(History)