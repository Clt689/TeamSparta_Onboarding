"use client"; // 클라이언트 컴포넌트로 지정

export const MainContent= () => {
  return(
    <section className="relative">
      <section className="flex flex-row justify-start items-center bg-[radial-gradient(159.82%_159.82%_at_50%_166.08%,_#6d77cf_0%,_#141617_85.5%)] z-0 overflow-hidden relative h-[733px]">
        <img className="flex absolute bottom-0 left-1/2 transform -translate-x-1/2" src="/maincontents/main_floor.webp" ></img>
        <div className="gap-[16px] transform -translate-y-[66px] relative w-full flex flex-col text-center items-center justify-center">
          <img className="w-[247px] h-[26px]" src="/maincontents/MainContents1.webp"></img>
          <h1 className="h-[140px] text-white text-center font-pretendard text-[50px] font-bold leading-[140%] whitespace-pre-wrap">게임 업계 취업
            <br></br>
            <span className="text-[#FF6C7A] font-bold">4개월</span>
            만에 현실로            
          </h1>
          <a className="mt-[4px] flex w-[212px] h-[56px] px-[20px] py-[16px] justify-center items-center gap-[10px] z-[10] font-pretendard font-semibold text-[16px] leading-[26px] rounded-[8px] bg-[#E8344E] !text-white flex-shrink-0"
          >참가 신청하기</a>
          <div className="absolute h-[289px] min-w-[1440px] flex gap-[20px] mr-[250px]"> {/* mr-[250px] ?? */}
            <img className="w-[277px] h-[289px] transform [transform:perspective(500px)_rotateY(180deg)] transition-transform duration-[1s] [transition-timing-function:cubic-bezier(0.22,_1.03,_0.75,_1.03)] delay-[500ms]" src="/maincontents/main_1.webp"></img>
            <img className="w-[277px] h-[289px] transform [transform:perspective(500px)_rotateY(180deg)] transition-transform duration-[1s] [transition-timing-function:cubic-bezier(0.22,_1.03,_0.75,_1.03)] delay-[700ms]" src="/maincontents/main_2.webp"></img>
            <div className="space min-w-[496px]"></div>
            <img className="w-[277px] h-[289px] transform [transform:perspective(500px)_rotateY(180deg)] transition-transform duration-[1s] [transition-timing-function:cubic-bezier(0.22,_1.03,_0.75,_1.03)] delay-[500ms]" src="/maincontents/main_4.webp"></img>
            <img className="w-[277px] h-[289px] transform [transform:perspective(500px)_rotateY(180deg)] transition-transform duration-[1s] [transition-timing-function:cubic-bezier(0.22,_1.03,_0.75,_1.03)] delay-[500ms]" src="/maincontents/main_3.webp"></img>
          </div>
        </div>

          <div className="h-fit w-full box-border absolute bottom-0 left-0 ">
            <div className="h-[126px] bg-[rgba(0,0,0,0.24)] backdrop-blur-[20px]">
              <div className="w-[1024px] mx-auto px-[16px] py-[26px]">
                <div className="gap-[24px] flex-col justify-between w-full">

                  <div className="flex flex-col text-center gap-[8px]">
                    <div className="font-pretendard font-bold text-[14px] leading-[22px] text-[#81898F] w-full text-center">
                      교육 기간
                    </div>
                    <div className="font-pretendard font-medium text-[14px] leading-[22px] text-[#D7E0E6] text-center">
                      24.09.09(월) ~ 25.01.21(화)
                    </div>
                  </div>
                  <div className="initial h-auto w-[10px] border-none opacity-[0.24] bg-red"></div>

                  

                </div>
              </div>

            </div>
          </div>

      </section>
    </section>
  );
}