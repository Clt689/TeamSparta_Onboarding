export const GameServer = () =>{
  return(
    <section className="relative">
      <section className="py-[100px] flex justify-center items-center bg-[#141617]">
        <section className="max-w-[820px] m-0 gap-[60px] w-full min-w-[328px] flex flex-col">
          <section className="flex-col flex">
            <h3 className="relative font-pretendard font-semibold text-[20px] leading-[26px] text-center !text-[#FF6C7A]">게임 개발의 정수, 게임 서버</h3>
            <h1 className="font-pretendard font-bold text-[32px] leading-[45px] text-center !text-white">
              유저의 모든 플레이는
              <br></br>
              게임 서버 위에서 동작합니다.
            </h1>
          </section>
          <section className="flex flex-row gap-[20px] items-center">
            <img className="w-[260px] h-[140px]" src="/gameserver/gameserver2.webp"></img>
            <img className="w-[260px] h-[140px]" src="/gameserver/gameserver3.webp"></img>
            <img className="w-[260px] h-[140px]" src="/gameserver/gameserver1.webp"></img>
          </section>
          <section className="flex flex-col gap-[16px]">
            <p className="font-pretendard font-normal text-[20px] leading-[28px] text-center !text-[#F2F6F8]">
              게임 개발의 핵심,
              <span className="!text-[#FF6C7A]"> 게임 서버</span>
            </p>
            <p className="font-pretendard font-normal text-[20px] leading-[28px] text-center !text-[#F2F6F8]">
              " Node.js 게임 서버 개발자 국비부트캠프는
              <br></br>
              스파르타 내일배움캠프가 유일합니다. "
            </p>
          </section>
        </section>
      </section>
    </section>
  );
};

