import LockImg from "../assets/img/lock.svg?react"
import InfoImg from "../assets/icon/input/info.svg?react"
const ResetPasswordSuccessPage = () => {

    return (
        <div style={{
            display: "flex",
            width: "393px",
            padding: "32px 20px",
            flexDirection: "column",
            alignItems: "center",
            gap: "40px"
        }}>
            <div className="flex flex-col items-center">
                <div className="gap-y-8">
                    <LockImg />
                </div>
                <div className="flex flex-col items-center gap-y-[4px]">
                    <div style={{
                        color: '#212121',
                        textAlign: 'center',
                        fontFamily: 'Pretendard',
                        fontSize: '22px',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: '150%',
                        letterSpacing: '0px'
                    }}>비밀번호 재설정 완료</div>
                    <div className="text-center text-[15px] font-normal leading-[150%] text-[#616161] font-pretendard">비밀번호 재설정이 완료되었습니다.</div>
                </div>
            </div>
            <div
                style={{
                    borderRadius: '8px',
                    border: '1px solid #EAEAEA',
                    background: '#FFF',
                    display: 'flex',
                    padding: '12px 20px 12px 16px',
                    alignItems: 'center',
                    gap: '16px'
                }}
            >
                <InfoImg />
                <div
                    style={{
                        color: '#151515',
                        fontFamily: 'Pretendard',
                        fontSize: '15px',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        lineHeight: '150%',
                        letterSpacing: '0px'
                    }}
                >
                    <div>
                        지금 바로 앱을 켜서
                    </div>
                    <div>
                        새로운 비밀번호로 로그인해 주세요.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPasswordSuccessPage