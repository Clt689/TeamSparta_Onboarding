export const CloseSoon = () => {
  return(
    <section className="relative">
      <section className="py-[100px] bg-[#141617]">
        <main className="flex-row flex m-0 mx-auto justify-between items-center max-w-[796px]">
          <div>
            <h1 className="font-pretendard font-bold text-[32px] leading-[45px] m-0 text-left text-white">⏰ 모집 마감 임박 ⏰</h1>
            <div className="font-pretendard font-normal text-[18px] leading-[29px] block mt-[8px] opacity-80 whitespace-pre-wrap !text-[#9DA7AE]">곧 올해 마지막 모집이 마감됩니다!</div>
          </div>
          <div className="text-[40px] m-0 flex items-center justify-center font-normal font-bold leading-[150%] text-white">
            <div className="m-[0px_12px_0px_4px] w-[117px] h-[76px] py-[8px] text-[40px] text-center flex items-center justify-center font-[Spoqa Han Sans Neo] font-bold bg-white rounded-[6px] !text-[#141617]">0일</div>
            <div className="w-[76px] h-[76px] py-[8px] text-[40px] m-[0px_4px] text-center rounded-[8px] bg-[rgba(255,255,255,0.8)] flex items-center justify-center font-[Spoqa Han Sans Neo] font-bold !text-[#141617]">07</div>
            :
            <div className="w-[76px] h-[76px] py-[8px] text-[40px] m-[0px_4px] text-center rounded-[8px] bg-[rgba(255,255,255,0.8)] flex items-center justify-center font-[Spoqa Han Sans Neo] font-bold !text-[#141617]">43</div>
            :
            <div className="w-[76px] h-[76px] py-[8px] text-[40px] m-[0px_4px] text-center rounded-[8px] bg-[rgba(255,255,255,0.8)] flex items-center justify-center font-[Spoqa Han Sans Neo] font-bold !text-[#141617]">52</div>
          </div>

        </main>
      </section>
    </section>
  );
}
