export const SubNav = () => {
  return(
    <div className="flex items-start justify-center gap-[20px] top-[60px] pt-[10px] sticky border-b border-[#D7E0E6] bg-white overflow-x-scroll z-[20]">
      
      <div className="flex flex-col justify-center items-center gap-[10px]">
        <a className="whitespace-nowrap flex px-[10px] py-[6px] justify-center items-center gap-[10px] font-pretendard font-normal text-[16px] leading-[26px] text-[#9DA7AE] transition ease-in-out duration-300 rounded-[10px] relative">프로젝트</a>
        <div className="w-full h-[2px] bg-[#ff6c7a] opacity-0 transition-opacity duration-300 ease-in-out"></div>
      </div>
      <div className="flex flex-col justify-center items-center gap-[10px]">
        <a className="whitespace-nowrap flex px-[10px] py-[6px] justify-center items-center gap-[10px] font-pretendard font-normal text-[16px] leading-[26px] text-[#9DA7AE] transition ease-in-out duration-300 rounded-[10px] relative">트랙 소개</a>
        <div className="w-full h-[2px] bg-[#ff6c7a] opacity-0 transition-opacity duration-300 ease-in-out"></div>
      </div>
      <div className="flex flex-col justify-center items-center gap-[10px]">
        <a className="whitespace-nowrap flex px-[10px] py-[6px] justify-center items-center gap-[10px] font-pretendard font-normal text-[16px] leading-[26px] text-[#9DA7AE] transition ease-in-out duration-300 rounded-[10px] relative">커리큘럼</a>
        <div className="w-full h-[2px] bg-[#ff6c7a] opacity-0 transition-opacity duration-300 ease-in-out"></div>
      </div>
      <div className="flex flex-col justify-center items-center gap-[10px]">
        <a className="whitespace-nowrap flex px-[10px] py-[6px] justify-center items-center gap-[10px] font-pretendard font-normal text-[16px] leading-[26px] text-[#9DA7AE] transition ease-in-out duration-300 rounded-[10px] relative">취업 지원</a>
        <div className="w-full h-[2px] bg-[#ff6c7a] opacity-0 transition-opacity duration-300 ease-in-out"></div>
      </div>
      <div className="flex flex-col justify-center items-center gap-[10px]">
        <a className="whitespace-nowrap flex px-[10px] py-[6px] justify-center items-center gap-[10px] font-pretendard font-normal text-[16px] leading-[26px] text-[#9DA7AE] transition ease-in-out duration-300 rounded-[10px] relative">모집개요</a>
        <div className="w-full h-[2px] bg-[#ff6c7a] opacity-0 transition-opacity duration-300 ease-in-out"></div>
      </div>
    </div>
  );
};