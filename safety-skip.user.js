// ==UserScript==
// @name        안전교육 스킵
// @namespace   Safety Education Skip
// @match       https://safetylabs.chosun.ac.kr/Contents/*
// @match       https://safety.ut.ac.kr/Contents/*
// @match       https://safety.jnu.ac.kr/Contents/*
// @match       https://safety.sejong.ac.kr/Contents/*
// @match       https://safety.kookmin.ac.kr/Contents/*
// @match       https://safety.sch.ac.kr/Contents/*
// @match       https://safety.yonsei.ac.kr/Contents/*
// @match       https://safe.kmu.ac.kr/Contents/*
// @match       https://safety.khu.ac.kr/Contents/*
// @match       https://safetyedu.hanyang.ac.kr/Contents/*
// @match       https://safety.kongju.ac.kr/Contents/*
// @grant       none
// @version     1.1.0
// @author      EdisonJwa
// @description 2022. 03. 04. 오전 10:59:48
// ==/UserScript==
var a = document.createElement("Button");
for (idx in chapterInfo) {if (fileName == chapterInfo[idx].fileName) {c = chapterInfo[idx].page;}}
b = chapterInfo.length;
if (c == b){
  a.innerHTML = "마지막 페이지";
  a.style = "top: 10px; right: 10px; position: absolute; z-index: 9999; user-select: none;display: inline-block; font-weight: 400;line-height: 1.5;color: #fff;text-align: center;text-decoration: none;vertical-align: middle;border: 1px solid transparent;padding: 0.375rem 0.75rem;font-size: 1rem;border-radius: 0.25rem;pointer-events: none; opacity: .65;cursor: not-allowed; background-color: #dc3545;border-color: #dc3545;"
  opener.PageMove(c);
  console.log('강의 수강이 완료되었습니다!');
  setTimeout(function () {
    window.close();
    }, 200
  );
} else {
  a.innerHTML = "SKIP";
  a.style = "top: 10px; right: 10px; position: absolute; z-index: 9999; user-select: none;display: inline-block; font-weight: 400;line-height: 1.5;color: #fff;background-color: #0d6efd; border-color: #0d6efd;text-align: center;text-decoration: none;vertical-align: middle;border: 1px solid transparent;padding: 0.375rem 0.75rem;font-size: 1rem;border-radius: 0.25rem;cursor: pointer;"
}
a.onclick= function(){
  location.href = chapterInfo[c].fileName + ".html?passedPage=" + vPassedPage + "&checkurl=" + nextPageNum;
}
document.body.appendChild(a);
