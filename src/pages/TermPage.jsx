import TopAppBar from "../common/TopAppBar"
import CloseIcon from "../assets/icon/input/close.svg?react"
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import PrivacyTermContent from "../term/PrivacyTermContent"
import ServiceTermContent from "../term/ServiceTermContent"

const TermPage = () => {

    const path = useLocation()

    const [termTitle, setTermTitle] = useState("")

    useEffect(() => {
        if (path.pathname.includes('service')) {
            setTermTitle("우리방 서비스 이용약관 동의")
        }

        if (path.pathname.includes('privacy')) {
            setTermTitle("우리방 개인정보 처리방침 동의")
        }
    }, [path])

    return (
        <div className="flex flex-col min-h-screen">
            <div className="fixed top-0 z-10 bg-white">
                <div className="h-[56px] relative min-w-[320px] max-w-[320px]">
                    <button 
                        className="absolute left-1 top-1/2 transform -translate-y-1/2 z-20 p-2"
                        onClick={() => window.close()} 
                    >
                        <CloseIcon />
                    </button>
                    <div className="absolute w-full inset-0 flex items-center justify-center">
                        <TopAppBar name={termTitle} />
                    </div>
                </div>
            </div>
            <div className="mt-[56px] flex-1">
                {path.pathname.includes('service') ? <ServiceTermContent /> : <PrivacyTermContent />}
            </div>
        </div>
    )
}

export default TermPage