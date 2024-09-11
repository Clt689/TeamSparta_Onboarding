"use client"; // 클라이언트 컴포넌트로 지정

export default function Footer() {
  return(
    <>
      <footer className="w-full flex justify-center border-t border-[#E4EBF0] bg-white px-[16px] py-[34px] break-keep">
        <footer className="w-full max-w-[1152px] min-w-[328px] mx-auto flex flex-col gap-[24px]">
          <section className="w-full flex flex-col gap-[24px]">
            section1
          </section>
          <div className="block w-full min-h-[1px] bg-[#E4EBF0]"></div>   {/* footer 중간 구분선 */}
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