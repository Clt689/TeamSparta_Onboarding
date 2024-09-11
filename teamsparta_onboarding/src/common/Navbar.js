"use client"; // 클라이언트 컴포넌트로 지정

import { useState } from "react";
import { DownArrowIcon } from "./DownArrowIcon";

export default function Navbar() {
  // 드롭다운 메뉴 상태 관리
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="items-center fixed w-full h-fit backdrop-blur-[10px] flex flex-col justify-center bg-white transition-all duration-300 ease border-b border-[#e4ebf0] z-[21]">
      <div className="font-pretendard font-normal text-[16px] leading-[26px] text-[#141617] h-[60px] max-w-[1200px] px-[24px] flex items-center w-[100%] justify-between">
        {/* 왼쪽 로고 */}
        <div className="flex items-center gap-[40px]">
          <a><img src="/Navbar/navbar.svg" alt="Sparta Logo" className="w-[134px] h-[40px] aspect-[134/40] text-transparent cursor-pointer mb-[4px]"></img></a>
        
          {/* 중앙 링크 */}
          <div className="flex gap-[8px]">
            <div className="relative flex gap-[4px] items-center px-[10px] py-[6px]">
              <span>부트캠프</span>
              <DownArrowIcon/>
            </div>

            <div className="py-[6px] px-[10px]">취업 지원</div>

            <div className="relative flex gap-[4px] items-center px-[10px] py-[6px]">
              <span>후기&블로그</span>
              <DownArrowIcon/>
            </div>
            
            <div className="py-[6px] px-[10px]">이벤트</div>
            
          </div>
        </div>


         {/* 오른쪽 고객센터 드롭다운 */}
         <div className="flex items-center gap-[8px]">
          <span className="text-[#81898F] cursor-pointer block">
            <a href="/mypage/apply-status">
              <div className="px-[10px] py-[6px] rounded-[6px] text-[#81898F] relative">나의 캠프</div>
            </a>
          </span>
          
          <span className="rounded-[6px] text-[#81898F] relative">|</span>
          
          <div className="relative flex gap-[4px] items-center px-[10px] py-[1px] rounded-[6px]">
            <div className="flex gap-[4px] items-center cursor-pointer">
              <span id="__next_div44_nav3a_div3a_divec_divec_div71_span71" className="text-[#81898F]">고객센터</span>
              <DownArrowIcon color="#81898F"></DownArrowIcon>
            </div>
          </div>
            {/* <button
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
            )} */}

        </div>

        
      </div>
    </nav>
  );
}
