import TO_DO_Form from "./TO_DO_Form";
import TO_DO_List from "./TO_DO_List";
import History from "./History";
import { useState, useCallback } from 'react';
import { memo } from "react";

const TO_DO = () => {
    console.log("TO_DO...")
    const [list_items, set_list_items] = useState([])
    const [new_item, set_new_item] = useState("")
    const [history, set_history] = useState([])

    const handleChange = useCallback((event) => {
        set_new_item(event.target.value)
    }, [])

    const handleSubmit = useCallback((event) => {
        event.preventDefault()
        if(new_item == "") {alert("Empty title!!!"); return}
        set_list_items([...list_items, new_item])
        set_new_item("")
    }, [new_item, list_items])

    const removeTODO = useCallback((index) => {
        set_history([...history, list_items[index]])
        set_list_items([...list_items.slice(0, index), ...list_items.slice(index+1, )])
    }, [history, list_items])

    return (
        <div id="to_do">
            <TO_DO_Form handleChange={handleChange} handleSubmit={handleSubmit} new_item={new_item} />
            <TO_DO_List list_items={list_items} removeTODO={removeTODO} />
            <History history={history} />
        </div>
    )
}

export default memo(TO_DO)