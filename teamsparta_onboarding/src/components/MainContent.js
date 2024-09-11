"use client"; // 클라이언트 컴포넌트로 지정

export const MainContent= () => {
  return(
    <section className="relative">
      <section className="flex flex-col justify-start items-center bg-[radial-gradient(159.82%_159.82%_at_50%_166.08%,_#6d77cf_0%,_#141617_85.5%)] z-0 overflow-hidden relative h-[733px]">
        {/* <img className ="absolute bottom-[77px] left-1/2 transform -translate-x-1/2" src = "/maincontents/main_floor.webp"></img> */}
        <img className="flex absolute bottom-0 left-1/2 transform -translate-x-1/2" src="/maincontents/main_floor.webp" ></img>
        {/* 메인 컨텐츠 안에 -> 게임 업계 취업 4개월만에 현실로부터 하기 */}
      </section>
    </section>
  );
}