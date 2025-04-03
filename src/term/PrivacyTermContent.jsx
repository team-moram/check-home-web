const PrivacyTermContent = () => {

    return (
        <div className="text-black font-pretendard text-[15px] font-normal leading-[150%] gap-y-3 flex flex-col h-[100vh-54px] overflow-y-auto overflow-x-hidden">
            <div className="font-semibold mt-3">개인정보처리동의서</div>

            <div>모람은 개인정보보호법 에 근거하여 다음과 같은 내용으로 개인정보를 수집 및 처리하고자 합니다.
                다음의 내용을 자세히 읽어보시고 모든 내용을 이해하신 후에 동의 여부를 결정해주시기 바랍니다.</div>

            <div>
                <div className="font-semibold">제1조 회원 가입을 위한 정보</div>

                <div>회사는 이용자의 회사 서비스에 대한 회원가입을 위하여 다음과 같은 정보를 수집합니다. 
                [필수 수집 정보]: 이메일 주소, 비밀번호, 이름, 닉네임</div>
            </div>

            <div>
                <div className="font-semibold">제2조 본인 인증을 위한 정보</div>

                <div>회사는 이용자의 본인인증을 위하여 다음과 같은 정보를 수집합니다.
                    [필수 수집 정보]:  이메일 주소, 이름, 생년월일, 성별, 본인확인값(CI/DI), 이동통신사 및 아이핀 정보(아이핀 확인 시)</div>
            </div>

            <div>
                <div className="font-semibold">제3조 회사 서비스 제공을 위한 정보</div>

                <div>회사는 이용자에게 회사의 서비스를 제공하기 위하여 다음과 같은 정보를 수집합니다. 
                [필수 수집 정보]:  아이디, 이메일 주소, 이름</div>
            </div>

            <div>
                <div className="font-semibold">제4조 서비스 이용 및 부정 이용 확인을 위한 정보</div>

                <div>회사는 이용자의 서비스 이용에 따른 통계·분석 및 부정이용의 확인·분석을 위하여 다 음과 같은 정보를 수집합니다. 부정이용이란 회원탈퇴 후 재가입, 상품구매 후 구매취 소 등을 반복적으로 행하는 등 회사가 제공하는 할인쿠폰, 이벤트 혜택 등의 경제상 이 익을 불법적으로 수취하는 행위, 이용약관 등에서 금지하고 있는 행위, 명의도용 등 의 불법행위 등을 말합니다.
                [필수 수집 정보]: 서비스 이용기록, 접속지 정보 및 기기정보</div>
            </div>

            <div>
                <div className="font-semibold">제5조 개인정보 보유 및 이용 기간</div>

                <div>1. 수집한 개인정보는 수집·이용 동의일로부터 회원탈퇴 시까지 보관 및 이용합니다.</div>
                <div>2. 개인정보 보유기간의 경과, 처리목적의 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.</div>
            </div>

            <div>
                <div className="font-semibold">제6조 동의 거부 관리</div>

                <div>귀하는 본 안내에 따른 개인정보 수집·이용에 대하여 동의를 거부하실 수 있으며, 동의를 거부할 경우 서비스 사용에 제한이 있습니다.</div>
            </div>

        </div>
    )
}

export default PrivacyTermContent