import { DownArrowIcon } from "@/common/DownArrowIcon";

export const TrackIntroduce = () => {
  return(
    <section className="relative">
      <section className="py-[100px] bg-[#141617] overflow-hidden">
        <section className="w-full max-w-[820px] p-0 gap-[60px] m-0 mx-auto flex flex-col justify-center items-center">
          <div className="font-pretendard font-bold text-[32px] leading-[45px] text-center text-white">
            <h3 className="font-pretendard font-semibold text-[20px] leading-[26px] mb-[12px] text-center text-[#FF6C7A]">트랙 소개</h3>
            <h2 className="font-pretendard font-bold text-[32px] leading-[45px] text-center whitespace-pre-wrap !text-white">
              시장이 원하는 기술로
              <br></br>
              대체 불가한 인재가 됩니다
            </h2>
          </div>
          <div className="flex flex-col items-center gap-[20px] w-full">
            <h6 className="font-pretendard font-semibold text-[24px] leading-[34px] !text-white">
              게임 서버의 대세,
              <span className="text-[#FF6C7A]"> Node.js</span>
            </h6>
            <div className="m-0 flex w-full gap-[14px] ">
              <div className="w-[264px] p-[24px_16px] flex-shrink-0 rounded-[12px] bg-[#25282A]">
                <div className="font-pretendard font-semibold text-[18px] leading-[29px] m-[0_0_4px] text-white">클라이언트 호환성</div>
                <div className="font-pretendard font-normal text-[13px] leading-[20px] opacity-70 text-white">
                  Node.js는 Unity, Unreal과 같은 게임
                  <br></br>
                  클라이언트와 빠르고 쉽게 통신합니다.</div>
              </div>

              <div className="w-[264px] p-[24px_16px] flex-shrink-0 rounded-[12px] bg-[#25282A]">
                <div className="font-pretendard font-semibold text-[18px] leading-[29px] m-[0_0_4px] text-white">JavaScript 언어</div>
                <div className="font-pretendard font-normal text-[13px] leading-[20px] opacity-70 text-white">
                JavaScript는 쉽게 배우고 사용할 수 있는
                전 세계 사용량 1위 프로그래밍 언어입니다. </div>
              </div>

              <div className="w-[264px] p-[24px_16px] flex-shrink-0 rounded-[12px] bg-[#25282A]">
                <div className="font-pretendard font-semibold text-[18px] leading-[29px] m-[0_0_4px] text-white">쉬운 학습 곡선</div>
                <div className="font-pretendard font-normal text-[13px] leading-[20px] opacity-70 text-white">
                쉽고 빠르게 익힐 수 있어 입문 장벽이 낮으며 
                사용자 친화적인 인터페이스를 제공합니다.</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-[20px] w-full">
            <h6 className="font-pretendard font-semibold text-[24px] leading-[34px] text-white">4개월 후, 더 많은 취업 기회</h6>
            <div className="m-0 flex w-full gap-[14px] overflow-x-scroll">
              
              <div className="w-[264px] p-[24px_16px] flex-shrink-0 rounded-[12px] bg-[#25282A]">
                <div className="w-[56px] h-[56px] pt-0 rounded-[5.6px] overflow-hidden mb-[12px]">
                  <img src="/trackintroduce/trackintroduce1.webp"></img>
                </div>
                <div className="font-pretendard font-semibold text-[18px] leading-[29px] m-[0_0_4px] text-white">게임 서버 개발자</div>
                <div className="font-pretendard font-normal text-[13px] leading-[20px] opacity-70 !text-white">개발 클라이언트와 서버 간의 통신 담당</div>
                <div className="mt-[24px] font-pretendard font-normal text-[13px] leading-[20px] text-[#141617] flex flex-col gap-[8px]">
                  <div className="font-pretendard font-normal text-[12px] leading-[18px] text-white flex gap-[6.5px]">
                    <p>기능, 시스템, 트래픽 관리</p>
                  </div>
                  <div className="font-pretendard font-normal text-[12px] leading-[18px] text-white flex gap-[6.5px]">
                    <p>게임 서비스의 Infrastructure 관리, 강화</p>
                  </div>
                  <div className="font-pretendard font-normal text-[12px] leading-[18px] text-white flex gap-[6.5px]">
                    <p>모니터링 및 로깅 시스템을 구성</p>
                  </div>
                </div>
              </div>

              <div className="w-[264px] p-[24px_16px] flex-shrink-0 rounded-[12px] bg-[#25282A]">
                <div className="w-[56px] h-[56px] pt-0 rounded-[5.6px] overflow-hidden mb-[12px]">
                  <img src="/trackintroduce/trackintroduce2.webp"></img>
                </div>
                <div className="font-pretendard font-semibold text-[18px] leading-[29px] m-[0_0_4px] text-white">게임 Tech PM</div>
                <div className="font-pretendard font-normal text-[13px] leading-[20px] opacity-70 !text-white">프로젝트의 기술적 목표 및 실행 계획 수립</div>
                <div className="mt-[24px] font-pretendard font-normal text-[13px] leading-[20px] text-[#141617] flex flex-col gap-[8px]">
                  <div className="font-pretendard font-normal text-[12px] leading-[18px] text-white flex gap-[6.5px]">
                    <p>개발자와 협업하여 원활한 프로젝트 진행 </p>
                  </div>
                  <div className="font-pretendard font-normal text-[12px] leading-[18px] text-white flex gap-[6.5px]">
                    <p>프로젝트 일정, 예산, 리소스, 위험 요소 등을 관리하고, 진행 상황을 모니터링</p>
                  </div>
                </div>
              </div>

              <div className="w-[264px] p-[24px_16px] flex-shrink-0 rounded-[12px] bg-[#25282A]">
                <div className="w-[56px] h-[56px] pt-0 rounded-[5.6px] overflow-hidden mb-[12px]">
                  <img src="/trackintroduce/trackintroduce3.webp"></img>
                </div>
                <div className="font-pretendard font-semibold text-[18px] leading-[29px] m-[0_0_4px] text-white">백엔드 개발자</div>
                <div className="font-pretendard font-normal text-[13px] leading-[20px] opacity-70 !text-white">웹 프론트엔드와 서버 간의 통신 개발 담당</div>
                <div className="mt-[24px] font-pretendard font-normal text-[13px] leading-[20px] text-[#141617] flex flex-col gap-[8px]">
                  <div className="font-pretendard font-normal text-[12px] leading-[18px] text-white flex gap-[6.5px]">
                    <p>Node.js를 활용한 서버 어플리케이션 개발</p>
                  </div>
                  <div className="font-pretendard font-normal text-[12px] leading-[18px] text-white flex gap-[6.5px]">
                    <p>JavaScript를 기반으로 대규모 트래픽 처리</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </section>
      </section>
    </section>
  );
};