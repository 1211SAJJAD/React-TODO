import { memo } from "react"
import List_Item from "./List_Item"

const TO_DO_List = ({list_items, removeTODO}) => {
    console.log("TO_DO_List...")
    const list_items_jsx = list_items.map((title, index) => {
        return (
            <List_Item title={title} removeTODO={removeTODO} key={title} index={index}/>
        )
    })

    return (
        <div id="to_do_list">
            {list_items_jsx}
        </div>
    )
}

export default memo(TO_DO_List)