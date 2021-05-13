var tipuesearch = {"pages": [{'title': 'About', 'text': '\n 我的倉儲: https://github.com/40823237/cd2021 \n 2人小組: 40823221 、 40823237  分組倉儲: stage1-bg16 \n 4人小組: 40823221 、 40823237 、 40823250 、 40832244  分組倉儲: stage2-bg12 \n 8人小組: 40823204 、 40823205 、 40823220 、 40823221 、 40823228 、 40823237 、 40823242 、 40823250 、 40832244 \xa0分組倉儲: stage3-bg5', 'tags': '', 'url': 'About.html'}, {'title': '個人任務', 'text': 'task \n', 'tags': '', 'url': '個人任務.html'}, {'title': 'task 1', 'text': '依照40823245的程式執行 \n 詳細資料請到40823245個人網站閱覽( 40823245-task1 ) \n 程式碼 \n def stu2b(account):\n    if account == "40823231":\n        return account + "-2"\n    elif account[0:3] == "407":\n        return "s" + account\n    else:\n        return account\n\nteamb = []\n\n# open file, default is read mode, since txt content no chinese char\n# no encoding = "UTF-8" is needed\nwith open("stage3_2b.txt") as fh:\n    # readlines will read into the whole line and put into list format\n    # has \\n at the end of each line\n    data = fh.readlines()\n#print(len(data))\nfor i in range(len(data)):\n    group = data[i].rstrip("\\n").split("\\t")\n    teamb.append(group)\n    \noutput = ""    \nseperator = "-"*10 + "<br />"\n\nfor i in teamb[0:]:\n    team = i[0]\n    leader = stu2b(i[1])\n    m1 = stu2b(i[3])\n    m2 = stu2b(i[5])\n    m3 = stu2b(i[7])\n    m4 = stu2b(i[9])\n    m5 = stu2b(i[11])\n    m6 = stu2b(i[13])\n    \n    try:\n        m7 = stu2b(i[15])\n    except:\n        m7 = ""\n    try:\n        m8 = stu2b(i[17])\n    except:\n        m8 = ""\n        \n    leaderrepo = "<a href=\'http://github.com/" + leader + "/cd2021\'>" + leader + " repo</a>"\n    leadersite = "<a href=\'http://" + leader + ".github.io/cd2021\'>" + leader +  " site</a>"\n    m1repo = "<a href=\'http://github.com/" + m1 + "/cd2021\'>" + m1 + " repo</a>"\n    m1site = "<a href=\'http://" + m1 + ".github.io/cd2021\'>" + m1 +  " site</a>"\n    m2repo = "<a href=\'http://github.com/" + m2 + "/cd2021\'>" + m2 + " repo</a>"\n    m2site = "<a href=\'http://" + m2 + ".github.io/cd2021\'>" + m2 +  " site</a>"\n    m3repo = "<a href=\'http://github.com/" + m3 + "/cd2021\'>" + m3 + " repo</a>"\n    m3site = "<a href=\'http://" + m3 + ".github.io/cd2021\'>" + m3 +  " site</a>"\n    m4repo = "<a href=\'http://github.com/" + m4 + "/cd2021\'>" + m4 + " repo</a>"\n    m4site = "<a href=\'http://" + m4 + ".github.io/cd2021\'>" + m4 +  " site</a>"\n    m5repo = "<a href=\'http://github.com/" + m5 + "/cd2021\'>" + m5 + " repo</a>"\n    m5site = "<a href=\'http://" + m5 + ".github.io/cd2021\'>" + m5 +  " site</a>"\n    m6repo = "<a href=\'http://github.com/" + m6 + "/cd2021\'>" + m6 + " repo</a>"\n    m6site = "<a href=\'http://" + m6 + ".github.io/cd2021\'>" + m6 +  " site</a>"\n \n\n    teamrepo = "<a href=\'http://github.com/" + leader + "/" + team + "\'>" + team + " repo</a>"\n    teamsite =  "<a href=\'http://" + m1 + ".github.io/" + team + "\'>" + team +  " site</a>"\n\n    output += teamrepo + " | " + teamsite + " | " +leaderrepo + " | " + leadersite + " | " +m1repo + " | " + m1site + " | " +m2repo + " | " + m2site + " | " +m3repo + " | " + m3site + " | " +m4repo + " | " + m4site + " | " +m5repo + " | " + m5site + " | " +m6repo + " | " + m6site \n    \n    if m7 != "":\n       m7repo = "<a href=\'http://github.com/" + m7 + "/cd2021\'>" + m7 + " repo</a>"\n       m7site = "<a href=\'http://" + m7 + ".github.io/cd2021\'>" + m7 +  " site</a>"   \n       output += " |  " + m7repo + "| " + m7site\n    else:\n        output += "" \n    \n    if m8 != "":\n       m8repo = "<a href=\'http://github.com/" + m8 + "/cd2021\'>" + m8 + " repo</a>"\n       m8site = "<a href=\'http://" + m8 + ".github.io/cd2021\'>" + m8 +  " site</a>"   \n       output += " |  " + m8repo + "| " + m8site + "<br />" + seperator\n    else:\n        output += "<br />" + seperator\n\n\nprint(output)\n# the following will use group data to generate needed html \n 結果如下 \n stage3-bg1 repo  |  stage3-bg1 site  |  40823245 repo  |  40823245 site  |  40823251 repo  |  40823251 site  |  40823208 repo  |  40823208 site  |  40823213 repo  |  40823213 site  |  40823232 repo  |  40823232 site  |  40823234 repo  |  40823234 site  |  40823235 repo  |  40823235 site  |  40823246 repo |  40823246 site ---------- stage3-bg2 repo  |  stage3-bg2 site  |  40823217 repo  |  40823217 site  |  40823201 repo  |  40823201 site  |  40823209 repo  |  40823209 site  |  40823210 repo  |  40823210 site  |  40823206 repo  |  40823206 site  |  40823207 repo  |  40823207 site  |  40823223 repo  |  40823223 site  |  40823224 repo |  40823224 site ---------- stage3-bg3 repo  |  stage3-bg3 site  |  40823236 repo  |  40823236 site  |  40823202 repo  |  40823202 site  |  40823203 repo  |  40823203 site  |  40823212 repo  |  40823212 site  |  40823219 repo  |  40823219 site  |  40823222 repo  |  40823222 site  |  40823231-2 repo  |  40823231-2 site  |  40823244 repo |  40823244 site ---------- stage3-bg4 repo  |  stage3-bg4 site  |  40823239 repo  |  40823239 site  |  s40723140 repo  |  s40723140 site  |  s40723128 repo  |  s40723128 site  |  s40723139 repo  |  s40723139 site  |  s40723106 repo  |  s40723106 site  |  s40723135 repo  |  s40723135 site  |  s40723143 repo  |  s40723143 site  |  s40723215 repo |  s40723215 site ---------- stage3-bg5 repo  |  stage3-bg5 site  |  40823221 repo  |  40823221 site  |  40823204 repo  |  40823204 site  |  40823205 repo  |  40823205 site  |  40823220 repo  |  40823220 site  |  40823228 repo  |  40823228 site  |  40823237 repo  |  40823237 site  |  40823242 repo  |  40823242 site  |  40823250 repo |  40823250 site  |  40832244 repo |  40832244 site ---------- stage3-bg6 repo  |  stage3-bg6 site  |  40823225 repo  |  40823225 site  |  40823214 repo  |  40823214 site  |  40823218 repo  |  40823218 site  |  40823211 repo  |  40823211 site  |  40823248 repo  |  40823248 site  |  40823247 repo  |  40823247 site  |  40823216 repo  |  40823216 site  |  40823238 repo |  40823238 site ---------- stage3-bg7 repo  |  stage3-bg7 site  |  40623144 repo  |  40623144 site  |  40823233 repo  |  40823233 site  |  s40723224 repo  |  s40723224 site  |  40823241 repo  |  40823241 site  |  40423155 repo  |  40423155 site  |  40823227 repo  |  40823227 site  |  s40723233 repo  |  s40723233 site ---------- \n \n  for site wrap  \n \n  <script src="../cmsimde/static/chimper/js/jquery-3.3.1.min.js"></script>  \n \n \n \n \n \n \n \n \n \n \n \n            <script src="../cmsimde/static/chimper/js/typed.js"></script>\n                    <script>\n                    var typed = new Typed(\'.typed-words\', {\n                    strings: ["Web Apps"," WordPress"," Mobile Apps"],\n                    typeSpeed: 80,\n                    backSpeed: 80,\n                    backDelay: 4000,\n                    startDelay: 1000,\n                    loop: true,\n                    showCursor: true\n                    });\n                    </script>\n             \n \n  啟用 LaTeX equations 編輯  \n \n  <script>\n  MathJax = {\n    tex: {inlineMath: [[\'$\', \'$\'], [\'\\(\', \'\\)\']]}\n  };\n  </script>\n  <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script> \n \n \n \n', 'tags': '', 'url': 'task 1.html'}, {'title': 'task 2', 'text': 'API遠端遙控 \n stage1 \n \n stage2 \n', 'tags': '', 'url': 'task 2.html'}, {'title': '個人作業', 'text': '紀錄作業及進度 \n \n \n', 'tags': '', 'url': '個人作業.html'}, {'title': 'week 1', 'text': '小組分組及討論專題題目 \n \n \n 新增Leo \n 1.到tmp/cd2021/config裡找到pelican.leo \n \n 2.依照老師第4部影片修改內容 \n \n 3.到"共用"及"遠端"的edit中修改內容 \n \n \n 4.儲存檔案並點選此處右鍵第二個選項完成推送 \n \n \n', 'tags': '', 'url': 'week 1.html'}, {'title': 'week 2', 'text': '繪製圖檔 \n 主題:氣動馬達 \n 動機:想試試看以不同的施力方式作動馬達 \n 繪製人員:40823237吳青諭 \n 軟體:Inventor2020 \n 因模擬會失去原先動機，故改圖並更換動機 \n 組合圖檔下載 \n \n 作動原理:施加氣壓(氣槍)在藍色箭頭的那個洞，能使馬達作動 \n \n 作動影片: \n \n 因模擬會失去原先動機，故改圖並更換動機 \n NEW 主題:皮帶輪馬達 \n 動機:以引擎的活塞與皮帶輪關係做變化 \n 繪製人員:40823237吳青諭 \n 軟體:Inventor2020 \n 組合圖檔下載 \n \n 作動原理:以皮帶輪帶動活塞作動(模擬以馬達代替皮帶使皮帶輪驅動) \n 作動影片: \n \n', 'tags': '', 'url': 'week 2.html'}, {'title': 'week 3', 'text': '程式模擬 \n 操作人員:40823221陳柏翰 \n 軟體:Coppelia Sim Edu \n \n 第一次測試影片: (未完成，尚須修改) \n \n 第二次測試影片:\xa0(未完成，尚須修改) \n \n', 'tags': '', 'url': 'week 3.html'}, {'title': 'week 4', 'text': '小組報告 \n 分工: \n 40823237吳青諭: 繪製圖檔、reveal製作、倉儲推送及維護 \n 40823221陳柏翰:\xa0 Coppelia模擬、PDF製作 \n PDF: 2021-協同產品設計實習-stage1-bg16 \n Reveal: 2021-協同產品設計實習-stage1-bg16 \n 影片: \n \n 報告影片: \n \n', 'tags': '', 'url': 'week 4.html'}, {'title': 'week 5 (w5)', 'text': '小組分組 \n \n 2021-協同產品設計實習-stage2-bg12 \n 第一位組員學號: 40823237 \n 第二位組員學號: 40823221 \n 第三位組員學號: 40823250 \n 第四位組員學號: 40832244 \n 報告影片: \n 2021-協同產品設計實習-stage1-bg16 \n \n 報告影片表格: \n \n \n \n AG \n \n \n BG \n \n \n \n 1 \n 03:40 \n \n 1 \n 07:14 \n \n \n 2 \n 03:04 \n \n 2 \n 01:55 \n \n \n 3 \n 02:24 \n \n 3 \n 01:58 \n \n \n 4 \n 03:19 \n \n 4 \n 02:51 \n \n \n 5 \n 03:38 \n \n 5 \n 03:00 \n \n \n 6 \n 05:50 \n \n 6 \n 03:07 \n \n \n 7 \n 02:26 \n \n 7 \n 02:47 \n \n \n 8 \n 01:33 \n \n 8 \n 03:25 \n \n \n 9 \n 01:18 \n \n 9 \n 02:43 \n \n \n 10 \n 03:08 \n \n 10 \n 02:20 \n \n \n 11 \n 01:04 \n \n 11 \n 01:38 \n \n \n 12 \n 01:59 \n \n 12 \n 01:47 \n \n \n 13 \n 02:17 \n \n 13 \n 02:09 \n \n \n 14 \n 02:31 \n \n 14 \n 05:58 \n \n \n 15 \n 00:50 \n \n 15 \n 03:24 \n \n \n 16 \n 01:09 \n \n 16 \n 03:33 \n \n \n 17 \n 02:31 \n \n 17 \n 04:33 \n \n \n 18 \n 01:57 \n \n 18 \n 05:03 \n \n \n 19 \n 02:19 \n \n 19 \n 03:11 \n \n \n 20 \n 04:06 \n \n 20 \n 03:32 \n \n \n 21 \n 02:20 \n \n 21 \n 05:02 \n \n \n 22 \n 05:13 \n \n 22 \n 04:47 \n \n \n 23 \n 08:19 \n \n 23 \n 02:55 \n \n \n \n \n \n 24 \n 05:00 \n \n \n \n \n \n 25 \n 04:53 \n \n \n \n \n \n 26 \n \n \n \n \n \n \n 27 \n 03:43 \n \n \n \n', 'tags': '', 'url': 'week 5 (w5).html'}, {'title': 'week 6', 'text': '小組討論 \n 標題: \xa0 2021-協同產品設計實習-stage2-bg12 \n 專題題目:自動門 開門機構 \n 動機:防疫期間，連開門都怕染上五hand廢言，那麼就需要自動門來幫忙 \n 參考網址: 開門機構 \n 參考圖: \n \n \n', 'tags': '', 'url': 'week 6.html'}, {'title': 'week 7', 'text': '繪製圖檔 \n 繪製主題:自動門 開門機構 \n 繪圖人員: 40823237、40823250 \n 繪圖軟體:Inventor 2020 \n 組合圖檔: 下載 \n 組合圖: \n \n \n Inventor模擬影片: \n \n 因模擬考量到零件配合問題，所以更改部分零件尺寸，以下為更新後的圖檔 \n 組合圖檔(改): 下載 \n 組合圖(改): \n \n \n', 'tags': '', 'url': 'week 7.html'}, {'title': 'week 8', 'text': '程式模擬 \n 模擬 主題:自動門開門機構 \n 模擬 人員: 40823221、40823237 \n 模擬 軟體: CoppeliaSim \n 模擬影片 : \n 第一次模擬 ( 模擬檔下載 ) \n 大部分的連結是可行的，少部分尚需修改 \n \n 第二次模擬\xa0( 模擬檔下載 ) \n 連結已完成，但結構上出現問題，主動軸轉向錯誤 \n \n 第三次模擬\xa0 ( 模擬檔下載 ) \n 主動軸轉向問題已解決，結構仍有問題，推測是零件尺寸的取捨有問題 \n \n 第四次模擬( 模擬檔下載 ) \n 改圖過後，以為是活塞配合有誤，但應該還是結構安排有問題，不過門打開的角度有變大 \n \n', 'tags': '', 'url': 'week 8.html'}, {'title': 'week 9', 'text': '報告 \n 標題: \xa0 2021-協同產品設計實習-stage2-bg12 \n 第一位組員學號:40823237 \n 第二位組員學號:40823221 \n 第三位組員學號: 40823250 \n 第四位組員學號: 40832244 \n PDF: 2021-協同產品設計實習-stage2-bg12 \n Reveal: 2021-協同產品設計實習-stage2-bg12 \n 報告影片: \n \n', 'tags': '', 'url': 'week 9.html'}, {'title': 'week 10', 'text': 'IPV4操作影片 \n \n 八人分組 \n 標題:2021-協同產品設計實習-stage3-bg5 \n 組員倉儲/網站: \n 40823204 repo / 40823204 site \n 40823205 repo / 40823205 site \n 40823220 repo / 40823220 site \n 40823221 repo / 40823221 site \n 40823228 repo / 40823228 site \n 40823237 repo / 40823237 site \n 40823242 repo / 40823242 site \n 40823250 repo / 40823250 site \n 40832244 repo / 40832244 site \n \n', 'tags': '', 'url': 'week 10.html'}, {'title': 'week 11', 'text': '直播影片 \n 第一階段:40823221、40823237 \n \n 第二階段:40823220、40823250 \n', 'tags': '', 'url': 'week 11.html'}, {'title': '小組討論', 'text': 'gitter \n 3/14 \n \n \n 其餘為線下討論 \n 4/28 \n \n . \n 其餘為線下討論', 'tags': '', 'url': '小組討論.html'}, {'title': '筆記', 'text': '紀錄 老師上課補充的內容 \n', 'tags': '', 'url': '筆記.html'}, {'title': 'Blog推送錯誤', 'text': '依照步驟推送blog(儲存並點選此處案右鍵第二個選項推送) \n \n 如果不順利，可將紅框處複製並貼在指令上執行推送(手動推送) \n \n 須注意要在對的目錄下執行 \n \n', 'tags': '', 'url': 'Blog推送錯誤.html'}, {'title': '影片', 'text': 'week 1 \n \n week 2 \n \n week 3 \n \n \n week 4 \n \n \n week7 \n \n week8 \n \xa0 \xa0 \n week9 \n \xa0 \n week 10 \n \n week 11 \n \n    ', 'tags': '', 'url': '影片.html'}]};