import { useState } from "react"
import DeleteIcon from "../assets/icon/input/delete.svg?react"
import VisibleIcon from "../assets/icon/input/visibillty_off.svg?react"

const TextBox = ({ type, placeholder, value, onTextBoxChange, validateMessage }) => {

    const [currentType, setCurrentType] = useState(type)

    const onClickDelete = () => {
        onTextBoxChange({ target: { value: "" } })
    }

    const onClickVisible = () => {
        setCurrentType(currentType === "password" ? "text" : "password")
    }
    return (
        <div className={"w-full"}>
            <div className={"box focus-within:border-[#212121] relative"}>
                <input type={currentType} placeholder={placeholder} value={value} onChange={onTextBoxChange} />
                {
                    value !== "" && 
                    <div className={"absolute right-[6px] top-1/2 -translate-y-1/2 flex gap-2"}>
                        <DeleteIcon onClick={onClickDelete} className={"cursor-pointer"} />
                        <VisibleIcon onClick={onClickVisible} className={"cursor-pointer"} />
                    </div>
                }
            </div>
            <div className={"validate-message pl-[12px]"}>
                {validateMessage}
            </div>
        </div>
    )
}

export default TextBox