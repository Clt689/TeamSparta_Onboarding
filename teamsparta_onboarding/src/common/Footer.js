"use client"; // 클라이언트 컴포넌트로 지정

export default function Footer() {
  return(
    <>
      <footer className="w-full flex justify-center border-t border-[#E4EBF0] bg-white px-[16px] py-[34px] break-keep">
        <footer className="w-full max-w-[1152px] min-w-[328px] mx-auto flex flex-col gap-[24px]">
          {/* section1 */}
          <section className="w-full flex flex-row gap-[24px] justify-between">

            <section className="w-[250px] h-auto flex flex-col gap-[12px]">
              <h1 className="font-pretendard font-semibold text-[16px] leading-[26px] text-[#5F666B]">고객센터</h1>
              <p className="font-pretendard font-normal text-[13px] leading-[20px] text-[#81898F]">모든 상담은 채팅 상담을 통해 우선 접수됩니다.</p>
              <p className="font-pretendard font-normal text-[13px] leading-[20px] text-[#81898F]">채팅 상담 운영시간 :
                <br></br>
                월요일 14:00-17:30
                <br></br>
                화~금요일 10:30-17:30
              </p>
              <p className="font-pretendard font-normal text-[13px] leading-[20px] text-[#81898F]">(점심시간 12:30-14:00 / 주말, 공휴일 휴무)</p>
              <p className="font-pretendard font-normal text-[13px] leading-[20px] text-[#81898F]">전화 상담 희망 시,
                <br></br>
                채팅 상담을 통해 신청 부탁드립니다.
              </p>
              <div className="flex gap-[6px] items-center p-[4px] cursor-pointer font-pretendard font-normal text-[14px] leading-[22px] text-[#5F666B]">
                <img className="w-[16px] h-[16px]" src = "/footer/counsel.webp"></img>
                <h1>채팅 상담 바로가기</h1>
              </div>
            </section>
            
            <section className="w-[576px] h-auto flex gap-[32px]">
              <div className="flex flex-col gap-[8px] w-[120px]">
                <h1 className="font-pretendard font-semibold text-[16px] leading-[26px] text-[#5F666B]">부트캠프</h1>
                <a className="font-pretendard font-normal text-[13px] leading-[20px] text-[#81898F] cursor-pointer">AI 서비스 개발</a>
                <a className="font-pretendard font-normal text-[13px] leading-[20px] text-[#81898F] cursor-pointer">프론트엔드 개발</a>
                <a className="font-pretendard font-normal text-[13px] leading-[20px] text-[#81898F] cursor-pointer">백엔드 개발</a>
                <a className="font-pretendard font-normal text-[13px] leading-[20px] text-[#81898F] cursor-pointer">게임 개발</a>
                <a className="font-pretendard font-normal text-[13px] leading-[20px] text-[#81898F] cursor-pointer">iOS 앱 개발</a>
                <a className="font-pretendard font-normal text-[13px] leading-[20px] text-[#81898F] cursor-pointer">Flutter 앱 개발</a>
                <a className="font-pretendard font-normal text-[13px] leading-[20px] text-[#81898F] cursor-pointer">단기심화 Java</a>
                <a className="font-pretendard font-normal text-[13px] leading-[20px] text-[#81898F] cursor-pointer">앱 창업</a>
                <a className="font-pretendard font-normal text-[13px] leading-[20px] text-[#81898F] cursor-pointer">데이터 분석</a>
                <a className="font-pretendard font-normal text-[13px] leading-[20px] text-[#81898F] cursor-pointer">UX/UI 디자인</a>
              </div>
              <div className="flex flex-col gap-[8px] w-[120px]">
                <h1 className="font-pretendard font-semibold text-[16px] leading-[26px] text-[#5F666B]">취업 지원</h1>
                <a className="font-pretendard font-normal text-[13px] leading-[20px] text-[#81898F] cursor-pointer">취업 지원</a>
                <a className="font-pretendard font-normal text-[13px] leading-[20px] text-[#81898F] cursor-pointer">신입 개발자 채용</a>
              </div>
              <div className="flex flex-col gap-[8px] w-[120px]">
                <h1 className="font-pretendard font-semibold text-[16px] leading-[26px] text-[#5F666B]">블로그</h1>
                <a className="font-pretendard font-normal text-[13px] leading-[20px] text-[#81898F] cursor-pointer">취업 후기</a>
                <a className="font-pretendard font-normal text-[13px] leading-[20px] text-[#81898F] cursor-pointer">멘토 인터뷰</a>
                <a className="font-pretendard font-normal text-[13px] leading-[20px] text-[#81898F] cursor-pointer">아티클</a>
              </div>
              <div className="flex flex-col gap-[8px] w-[120px]">
                <h1 className="font-pretendard font-semibold text-[16px] leading-[26px] text-[#5F666B]">ETC</h1>
                <a className="font-pretendard font-normal text-[13px] leading-[20px] text-[#81898F] cursor-pointer">튜터 지원</a>
                <a className="font-pretendard font-normal text-[13px] leading-[20px] text-[#81898F] cursor-pointer">팀스파르타 채용</a>
                <a className="font-pretendard font-normal text-[13px] leading-[20px] text-[#81898F] cursor-pointer">협력사 지원</a>
              </div>
            </section>

            

          </section>

          {/* footer 중간 구분선 */}
          <div className="block w-full min-h-[1px] bg-[#E4EBF0]"></div>

          {/* section2 */}
          <section className="w-full flex flex-col gap-[16px]">
            <div className="flex justify-between">
              <section className="flex items-center gap-[16px]">
                <a data-bold="true" target="_blank" className="font-pretendard font-normal text-[13px] leading-[20px] text-[#5F666B] font-bold p-[4px] cursor-pointer">개인정보처리방침</a>
                <a data-bold="false" target="_blank" className="font-pretendard font-normal text-[13px] leading-[20px] text-[#81898F] p-[4px] cursor-pointer">서비스 이용약관</a>
                <a data-bold="false" target="_blank" className="font-pretendard font-normal text-[13px] leading-[20px] text-[#81898F] p-[4px] cursor-pointer">고객센터</a>
              </section>
              <section className="flex-row flex gap-[32px]">
                <div className="flex items-center gap-[6px]">
                  <a>
                    <img className ="w-[32px] h-[32px] text-transparent cursor-pointer" src = "/footer/kakaotalk.webp"></img>
                  </a>
                  <a>
                    <img className ="w-[32px] h-[32px] text-transparent cursor-pointer" src = "/footer/blog.webp"></img>
                  </a>
                  <a>
                    <img className ="w-[32px] h-[33.33px] text-transparent cursor-pointer" src = "/footer/instagram.svg"></img>
                  </a>
                  <a>
                    <img className ="w-[32px] h-[33.33px] text-transparent cursor-pointer" src = "/footer/youtube.webp"></img>
                  </a>
                </div>
                <div className="flex items-center gap-[12px]">
                  <img className="w-[36px] h-[36px] text-transparent" src="/footer/winner.webp"></img>
                  <p className="font-pretendard font-normal font-[400] text-[13px] leading-[20px] text-[#9DA7AE]">
                    2022-23 올해의 브랜드 대상
                    <br></br>
                    코딩교육 부문 2년 연속 1위
                  </p>
                </div>
              </section>
            </div>
            <section className="font-pretendard font-medium text-[12px] leading-[18px] text-[#9DA7AE] flex flex-col gap-[4px]">
              <p>팀스파르타(주) 사업자 정보</p>
              <p>대표자 : 이범규ㅣ사업자 등록번호 : 783-86-01715ㅣ통신판매업 신고번호 : 2020-서울강남-02300ㅣ평생교육시설 신고번호 : 제 661호
                <br></br>
                주소 : 서울특별시 강남구 테헤란로44길 8 12층ㅣ이메일 : contact@teamsparta.coㅣ전화 : 1522-8016
              </p>
            </section>
            <p className="font-pretendard font-medium text-[12px] leading-[18px] text-[#9DA7AE]">Copyright ©2024 TEAMSPARTA. All rights reserved.</p>
          </section>
        </footer>
      </footer>
    </>
  );
}