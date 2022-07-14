import TO_DO_Form from "./TO_DO_Form"
import TO_DO_List from "./TO_DO_List"
import { useState, useCallback } from 'react';
import { memo } from "react"

const TO_DO = () => {
    console.log("TO_DO...")
    const [list_items, set_list_items] = useState([])
    const [new_item, set_new_item] = useState("")

    const handleChange = useCallback((event) => {
        set_new_item(event.target.value)
    }, [])

    const handleSubmit = useCallback((event) => {
        event.preventDefault()
        set_list_items([...list_items, new_item])
        set_new_item("")
    }, [new_item])

    return (
        <div id="to_do">
            <TO_DO_Form handleChange={handleChange} handleSubmit={handleSubmit} new_item={new_item} />
            <TO_DO_List list_items={list_items} />
        </div>
    )
}

export default memo(TO_DO)