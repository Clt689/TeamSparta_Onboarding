"use client"; // 클라이언트 컴포넌트로 지정

import { useState } from "react";

export default function Navbar() {
  // 드롭다운 메뉴 상태 관리
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* 왼쪽 로고 */}
        <div className="flex items-center space-x-4 mr-20">
          <img src="/navbar.svg" alt="Sparta Logo" className="h-10" />
        

        {/* 중앙 링크 */}
        <div className="flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-gray-900">부트캠프</a>
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
