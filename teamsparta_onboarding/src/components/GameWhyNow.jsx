export const GameWhyNow = () => {
  return(
    <section className="relative">
      <section className="py-[100px] bg-[#141617] w-full">
        <section className="max-w-[820px] p-0 gap-[60px] m-0 mx-auto flex flex-col justify-center items-center w-full">
          
          <div>
            <h3 className="font-pretendard font-semibold text-[20px] leading-[26px] mb-[12px] block text-center text-[#FF6C7A]">왜 게임 서버 개발자인가요?</h3>
            <h2 className="font-pretendard font-bold text-[32px] leading-[45px] text-center whitespace-pre-wrap text-white">
              높아지는 게임 업계 연봉
              <br></br>
              늘어나는 서버 개발자 수요
            </h2>
          </div>

          <section className="flex flex-col items-center gap-[40px] w-full">
            <div className="w-full max-w-[820px] flex flex-row justify-between gap-[20px]">
              <div className="w-[398px] flex flex-col justify-center">
                <h5 className="font-pretendard font-semibold text-[24px] leading-[34px] mb-[16px] text-left text-white">국내 게임 산업의 성장세</h5>
                <p className="whitespace-pre-wrap font-pretendard font-normal text-[16px] leading-[26px] text-left m-0 opacity-70 text-white">
                  국내 게임 시장은 계속해서 가파르게 성장하고 있고, 시장 규모가
                  <br></br>
                  커짐에 따라 자연스레 게임 개발자 수요도 늘어나고 있습니다.</p>
              </div>
              <div>
                <img className="w-[360px] h-[270px]" src="/gamewhynow/whygamedev1.webp"></img>
              </div>
            </div>

            <div className="w-full max-w-[820px] flex flex-row justify-between gap-[20px]">
              <div className="w-[398px] flex flex-col justify-center">
                <h5 className="font-pretendard font-semibold text-[24px] leading-[34px] mb-[16px] text-left text-white">스타트업부터 대기업까지</h5>
                  <p className="whitespace-pre-wrap font-pretendard font-normal text-[16px] leading-[26px] text-left m-0 opacity-70 text-white">
                    대형 게임 개발사뿐만 아니라  많은 스타트업에서도
                    <br></br> 
                    Node.js를 활용하는 게임 서버 개발자를 찾고 있습니다.</p>
                </div>
              <div>
                <img className="w-[360px] h-[270px]" src="/gamewhynow/whygamedev2.webp"></img>
              </div>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
};