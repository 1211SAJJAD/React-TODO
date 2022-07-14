import { memo } from "react"

const TO_DO_Form = ({ handleSubmit, new_item, handleChange }) => {
    console.log("TO_DO_Form...")
    return (
        <form id="to-do-form" onSubmit={handleSubmit}>
            <input type="text" name="title" id="title_input" placeholder="Enter the title" value={new_item} onChange={handleChange} />
            <input type="submit" name="submit" id="submit_btn" />
        </form>
    )
}

export default memo(TO_DO_Form)