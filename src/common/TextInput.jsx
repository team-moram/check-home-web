import TextBox from "./TextBox.jsx";

const TextInput = ({title, placeholder, value, onChangeValue, type, validateMessage}) => {

    return (
        <div className={"w-full"}>
            <div className={"box-title"}>{title}</div>
            <TextBox placeholder={placeholder} value={value} onTextBoxChange={onChangeValue} type={type} validateMessage={validateMessage}/>
        </div>
    )
}

export default TextInput