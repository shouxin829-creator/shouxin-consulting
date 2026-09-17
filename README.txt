守信顧問網站整合包
==================

這個專案已包含：
1. Top Bar
2. 共用 Header
3. 桌機導覽
4. 手機漢堡選單
5. 首頁
6. 三個獨立分頁資料夾
7. 共用 Footer
8. 右下角懸浮「預約初步諮詢」
9. React Router 分頁路由
10. Tailwind CSS

啟動方式
--------
1. 解壓縮
2. 用 VS Code 開啟資料夾
3. Terminal 執行：
   npm install
4. 再執行：
   npm run dev
5. 開啟 Terminal 顯示的 Local 網址

三個分頁
--------
目前先保留：
src/pages/Page1/Page1.jsx
src/pages/Page2/Page2.jsx
src/pages/Page3/Page3.jsx

因為目前還沒有提供您實際三個資料夾名稱。
等您提供真實名稱後，只需要：
1. 改資料夾名稱
2. 改 App.jsx import
3. 改 src/config/site.js 的 navigation 名稱與網址

首頁圖片
--------
public/images/首頁形象圖1.png

如果這張圖不是您要的正式首頁圖，
直接用同檔名覆蓋即可，程式不需要修改。

聯絡資訊集中在
--------------
src/config/site.js

目前：
Email：chengyi5828@gmail.com
LINE：@287sxlww

修改一次，Top Bar 與漢堡選單會同步更新。
