"use client"; // 클라이언트 컴포넌트로 지정

import { useState } from "react";

export default function Navbar() {
  // 드롭다운 메뉴 상태 관리
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="items-center fixed w-full h-auto flex flex-col justify-center bg-white transition-all duration-300 ease border-b border-[#e4ebf0] z-[21]">
      <div className="font-sans font-normal text-[16px] leading-[26px] text-[#141617] h-[60px] max-w-[1200px] px-[24px] flex items-center w-full justify-between">
        {/* 왼쪽 로고 */}
        <div className="flex items-center space-x-4 mr-20">
          <img src="/navbar.svg" alt="Sparta Logo" className="cursor-pointer mt-[3px]" />
        

        {/* 중앙 링크 */}
        <div className="flex space-x-8">
          <div className="flex gap-[4px] items-center cursor-pointer">
            <a href="#" className="relative flex gap-[4px] items-center px-[10px] py-[6px]">부트캠프</a>
            <div className="w-[20px] h-[20px] fill-none overflow-hidden"></div>
          </div>

          <a href="#" className="text-gray-700 hover:text-gray-900">취업 지원</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">후기&블로그</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">이벤트</a>
        </div>
        </div>
         {/* 오른쪽 고객센터 드롭다운 */}
         <div className="relative flex justify-between">
          <div>나의 캠프</div>
          <div class="mx-3">|</div>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
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
    </nav>
  );
}
