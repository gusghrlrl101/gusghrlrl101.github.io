# 배포 전 할일

1. 노션 내보내기 -> HTML

2. HTML 파일 붙여넣기

- `<!-- 아래에 노션 내보낸 html <html><head> 이후 붙여넣기 -->` 하위에 `<html><head>` 제외하고 붙여넣기

3. 프로필 이미지 경로 변경

- `a` 태그, `img` 태그의 경로를 `"assets/profile.jpg"`로 변경

4. 링크 경로 변경

- `@ For English` -> `<a href="/en">`
- `@ For Korean` -> `<a href="/">`

5. 시간 계산 추가

- body 안에 script 넣기
  - 마지막줄에 `<script type="text/javascript" src="my.js">` 붙여넣기
  - 최종 결과
    - `<script type="text/javascript" src="my.js"></script></body></html>`
- 현재 회사 년차 추가
  - 년: `<span id="my-current-company-years"></span>` 추가하기
  - 월: `<span id="my-current-company-months"></span>` 추가하기
  - 최종 결과
    - `현재 (<span id="my-current-company-years"></span>년 <span id="my-current-company-months"></span>개월)`
    - `Present (<span id="my-current-company-years"></span> years <span id="my-current-company-months"></span> months)`
