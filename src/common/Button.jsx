const Button = ({disable, onClickBtn, btnText}) => {

    return (
        <>
            {disable ?
                <div className={"button-disable"}>{btnText}</div>
                :
                <div className={"button cursor-pointer"} onClick={onClickBtn}>{btnText}</div>
            }
        </>
    )
}

export default Button