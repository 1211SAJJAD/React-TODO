import { memo } from "react"

const TO_DO_List = ({list_items}) => {
    console.log("TO_DO_List...")
    const list_items_jsx = list_items.map((title) => {
        return (
            <li key={title.toString()}>{title}</li>
        )
    })

    return (
        <div id="to_do_list">
            <ol>
                {list_items_jsx}
            </ol>
        </div>
    )
}

export default memo(TO_DO_List)