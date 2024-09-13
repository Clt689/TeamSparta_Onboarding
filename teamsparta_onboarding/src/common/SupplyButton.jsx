export const SupplyButton = () => {
  return(
    <div className="rounded-[8px] px-[24px] py-[12px] bottom-[12px] max-w-[760px] left-1/2 transform -translate-x-1/2 z-[19] fixed w-full bg-[rgba(0,0,0,0.76)] shadow-[0_4px_24px_0_rgba(0,0,0,0.24)] backdrop-blur-[10px] initial transition duration-[0.2s] h-[76px]">
      <div className="w-full items-center flex m-0 mx-auto justify-between h-[52px]">
        <div className="block font-pretendard font-semibold text-[16px] leading-[26px] !text-white">
          게임 회사 가고 싶은 사람 🙋🏻
          <span className="ml-[8px] mt-[2px] text-[#FF6666]">단, 50명 모집 중</span>
        </div>
        <div className="flex gap-[6px]">
          <button className="flex items-center justify-center w-[52px] h-[52px] rounded-[8px] bg-[#5F666B] p-0">
            <img className="w-[20px] h-[20px]" src="/share-icon.webp"></img>
          </button>
          <a>
            <button className="min-w-[220px] h-full px-[16px] py-[13px] w-fit m-0 bg-[#E8344E] font-pretendard font-semibold text-[16px] leading-[26px] text-center !text-white block rounded-[8px] border-none cursor-pointer">참가 신청하기</button>
          </a>
        </div>
      </div>
    </div>
  );
};
