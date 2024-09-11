"use client"; // 클라이언트 컴포넌트로 지정

import { useState } from "react";

export default function Navbar() {
  // 드롭다운 메뉴 상태 관리
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed w-full h-auto backdrop-blur-[10px] flex flex-row bg-white justify-center transition-all duration-300 ease border-b border-[#e4ebf0] z-[21]">
      <div className="font-pretendard font-normal text-[16px] leading-[26px] text-[#141617] h-[60px] max-w-[1200px] px-[24px] flex items-center w-[100%] justify-between">
        {/* 왼쪽 로고 */}
        <div className="flex items-center gap-[40px]">
          <img src="/navbar.svg" alt="Sparta Logo" className="w-[134px] h-[40px] aspect-[134/40]"/>
        
          {/* 중앙 링크 */}
          <div className="flex space-x-4">
            <div className="flex gap-[4px] items-center cursor-pointer">
              <a href="#" className="relative flex gap-[4px] items-center px-[10px] py-[6px]">부트캠프</a>
              <div className="w-[20px] h-[20px] fill-none overflow-hidden"></div>
            </div>

            <div className="py-[6px] px-[10px]">취업 지원</div> 
            <div className="flex gap-[4px] items-center cursor-pointer">
              <a href="#" className="relative flex gap-[4px] items-center px-[10px] py-[6px]">후기&블로그</a>
              <div className="w-[20px] h-[20px] fill-none overflow-hidden"></div>
            </div>
            <div className="py-[6px] px-[10px]">이벤트</div>
            
          </div>
        </div>

         {/* 오른쪽 고객센터 드롭다운 */}
         <div className="flex items-center gap-[8px]">
          <div className="px-[10px] py-[6px] rounded-[6px] text-[#81898f] relative">나의 캠프</div>

          <div class="px-[10px] py-[6px] rounded-[6px] text-[#81898f] relative">|</div>
          
          <div className="relative flex gap-[4px] items-center px-[10px] py-[1px] bg-[#eef3f6] rounded-[6px]">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="relative flex gap-[4px] items-center px-[10px] py-[6px] bg-[#eef3f6] rounded-[6px]"
            >
              고객센터
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  자주 묻는 질문
                </a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  문의하기
                </a>
              </div>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
}
