const fmt = new Intl.NumberFormat("zh-CN");

const colors = {
  blue: "#0f766e",
  cyan: "#38b6a0",
  red: "#c95c45",
  yellow: "#e5aa35",
  green: "#4f9d68",
  purple: "#7d6bb1",
  gray: "#9aa99f",
  ink: "#1b302d"
};

const data = {
  kpis: [
    { label: "全网声量", value: 115305, suffix: "条", note: "监测期内相关舆情总量" },
    { label: "相关热搜", value: 87, suffix: "个", note: "报告总结中梳理的热搜数量" },
    { label: "峰值声量", value: 76277, suffix: "条", note: "2026-05-16 单日峰值" },
    { label: "评论峰值", value: 16794, suffix: "条", note: "5月16日评论信息峰值" }
  ],
  dates: ["05-08", "05-09", "05-10", "05-11", "05-12", "05-13", "05-14", "05-15", "05-16", "05-17", "05-18", "05-19", "05-20", "05-21", "05-22", "05-23", "05-24", "05-25", "05-26", "05-27", "05-28", "05-29", "05-30", "05-31"],
  trend: {
    all: [980, 1260, 1480, 1720, 2250, 3200, 4600, 6250, 76277, 5300, 3600, 2100, 1650, 1250, 920, 730, 580, 510, 440, 350, 650, 420, 310, 278],
    weibo: [640, 820, 960, 1120, 1530, 2200, 3300, 4700, 56786, 3400, 2300, 1260, 980, 720, 530, 430, 350, 310, 260, 210, 360, 250, 180, 150],
    shortVideo: [120, 150, 180, 210, 290, 460, 680, 900, 7501, 950, 630, 390, 300, 230, 160, 120, 90, 80, 70, 60, 120, 80, 50, 40],
    media: [150, 190, 230, 260, 310, 420, 520, 590, 6343, 620, 490, 320, 270, 210, 160, 120, 100, 90, 80, 70, 95, 70, 50, 36]
  },
  platforms: [
    ["微博", 75936], ["短视频", 14476], ["网媒", 14131], ["APP", 5195], ["微信", 3612],
    ["网络视频", 1090], ["贴吧", 491], ["论坛", 288], ["报刊", 86]
  ],
  sentiments: {
    all: {
      label: "总体",
      caption: "总体舆情共 115,305 条，中性信息略高于负面信息。",
      values: [["正面", 650], ["负面", 51274], ["中性", 63381]]
    },
    weibo: {
      label: "微博",
      caption: "微博共 75,936 条，中性信息占 63.97%。",
      values: [["正面", 319], ["负面", 27041], ["中性", 48576]]
    }
  },
  regions: [["广东", 8441], ["北京", 6780], ["山东", 4654], ["江苏", 4253], ["河南", 3773], ["上海", 3420], ["浙江", 3210], ["四川", 2860], ["湖北", 2310], ["河北", 1980]],
  keywords: [["盲道", 97864], ["摆拍", 69579], ["盲人", 23508], ["牟取私利", 13578], ["刑事强制措施", 11737], ["女孩", 10641], ["在朝阳区", 7615], ["通报", 7400], ["薛之谦", 6262], ["自导自演", 6014]],
  timeline: [
    ["2026-05-08 20:28", "“盲人女孩走盲道被撞，肇事者嚣张逃逸”视频发布，引发同情与转发。", "首发"],
    ["2026-05-16 00:00", "北京警方通报事件系虚假摆拍，相关人员被依法采取刑事强制措施。", "反转"],
    ["2026-05-16 13:25", "新闻直播间报道摆拍事实，舆论从“严惩撞人者”转向追问真实性。", "媒体跟进"],
    ["2026-05-17 14:35", "百万粉丝盲人博主回应与事件关联，进一步扩大讨论面。", "扩散"],
    ["2026-05-17 19:16", "“善意被辜负”等表达推动事件进入公共信任议题。", "情绪发酵"],
    ["2026-05-28", "警方再次公布事件为摆拍，讨论转向流量造假治理与平台责任。", "总结"]
  ],
  mediaSummary: [
    ["全部媒体", "494家", 8472],
    ["中央媒体", "68家", 1277],
    ["省级媒体", "220家", 5559],
    ["地方媒体", "206家", 1636]
  ],
  mediaRanks: {
    central: {
      label: "中央",
      values: [["光明网", 166], ["央视网", 125], ["环球网", 84], ["央广网", 76], ["中国新闻网", 64], ["新华社", 54], ["环球时报", 53], ["新华网", 50], ["中央广播电视总台", 41], ["公安部", 30]]
    },
    province: {
      label: "省级",
      values: [["北京日报", 200], ["河南广播电视台", 185], ["大河报", 166], ["极目新闻", 163], ["封面新闻网", 141], ["大皖新闻", 139], ["澎湃新闻", 139], ["九派新闻", 137], ["新京报", 116], ["山东广播电视台", 114]]
    },
    local: {
      label: "地方",
      values: [["红星新闻网", 153], ["星视频", 91], ["济南日报", 86], ["新黄河", 64], ["青岛日报", 55], ["成都商报", 48], ["看度新闻", 43], ["沈阳晚报", 41], ["深圳广播电视台", 39], ["深圳新闻网", 34]]
    }
  },
  layers: [["第一层", 0.8], ["第二层", 9.03], ["第三层", 16.09], ["第四层", 16], ["四层+", 58.09]],
  propagation: { maxLayer: 30, reposts: 58795, reach: 6319120793 },
  influencers: [
    ["黄腿肠", 1223029, 381], ["午后狂睡", 2641531, 197], ["江宁婆婆", 5579646, 173],
    ["开水族馆的生物男", 8236964, 149], ["来去之间", 866604, 145], ["尉迟燕窝", 776999, 142],
    ["潇湘晨报", 17983699, 138], ["开心鸭", 479731, 131]
  ],
  emotions: [["无", 75.4], ["愤怒", 10.34], ["悲伤", 5.52], ["快乐", 4.27], ["积极", 2.23], ["惊奇", 1.66], ["害怕", 0.58]],
  comments: {
    positive: {
      label: "正面",
      caption: "正面评论多转向助残议题和公共善意保护。",
      values: [
        ["这么消耗大众信任，会导致后面真正需要帮助的人得不到帮助", 1455655],
        ["保障残疾人平等权益，促进残疾人融合发展", 1497887],
        ["该抓抓该判判，教育好了，出来可以继续做好事", 115955],
        ["某些人别再做让人寒心的事了", 1497887]
      ]
    },
    negative: {
      label: "负面",
      caption: "负面评论集中谴责摆拍、消费善意和污染短视频生态。",
      values: [
        ["短视频领域不是靠演戏、欺骗来割韭菜的名利场", 50068419],
        ["当真诚被玩弄、善意被消费，会引发社会性的信任危机", 50068419],
        ["那个盲人走盲道居然是摆拍的，太可恶了", 8477369],
        ["不是AI就是摆拍，信任透支得光光的", 7144252]
      ]
    },
    neutral: {
      label: "中性",
      caption: "中性评论多为转述、惊讶和对事实反转的即时反应。",
      values: [
        ["没想到是摆拍啊", 10704472],
        ["摄影师回应摆拍盲道被撞女生真是盲人", 10633677],
        ["太坏了，当时看到新闻还愤怒了一会，居然是摆拍", 8873093],
        ["图啥？", 8835936]
      ]
    }
  }
};

data.trend.other = data.trend.all.map((value, index) => Math.max(0, value - data.trend.weibo[index] - data.trend.shortVideo[index] - data.trend.media[index]));

const charts = {};

function createTabs(containerId, items, activeKey, onChange) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  Object.entries(items).forEach(([key, item]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = item.label;
    button.className = key === activeKey ? "active" : "";
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", key === activeKey ? "true" : "false");
    button.addEventListener("click", () => {
      container.querySelectorAll("button").forEach((node) => {
        node.classList.remove("active");
        node.setAttribute("aria-selected", "false");
      });
      button.classList.add("active");
      button.setAttribute("aria-selected", "true");
      onChange(key);
    });
    container.appendChild(button);
  });
}

function renderKpis() {
  document.getElementById("kpiGrid").innerHTML = data.kpis
    .map((item) => `<article class="kpi-card"><span>${item.label}</span><strong>${fmt.format(item.value)}${item.suffix}</strong><p>${item.note}</p></article>`)
    .join("");
}

function renderTimeline() {
  document.getElementById("timelineList").innerHTML = data.timeline
    .map(([time, title, type]) => `<article class="timeline-item"><div class="timeline-time"><span>${time}</span><span class="timeline-badge">${type}</span></div><p>${title}</p></article>`)
    .join("");
}

function grid(top = 36) {
  return { left: 12, right: 18, top, bottom: 28, containLabel: true };
}

function initTrendChart() {
  charts.trend = echarts.init(document.getElementById("trendChart"));
  charts.trend.setOption({
    color: [colors.blue, colors.red, colors.yellow, colors.cyan, colors.green],
    tooltip: { trigger: "axis", valueFormatter: (value) => `${fmt.format(value)} 条` },
    legend: { top: 0, right: 0, itemWidth: 14, itemHeight: 8 },
    grid: grid(46),
    xAxis: { type: "category", boundaryGap: false, data: data.dates, axisLine: { lineStyle: { color: "#d7ded6" } } },
    yAxis: { type: "value", axisLabel: { formatter: (value) => fmt.format(value) }, splitLine: { lineStyle: { color: "#edf2ea" } } },
    dataZoom: [{ type: "inside" }, { type: "slider", height: 20, bottom: 0 }],
    series: [
      { name: "全部", type: "line", smooth: true, symbolSize: 7, areaStyle: { opacity: 0.13 }, data: data.trend.all },
      { name: "微博", type: "line", smooth: true, symbolSize: 6, data: data.trend.weibo },
      { name: "短视频", type: "line", smooth: true, symbolSize: 6, data: data.trend.shortVideo },
      { name: "网媒", type: "line", smooth: true, symbolSize: 5, data: data.trend.media },
      { name: "其他", type: "line", smooth: true, symbolSize: 5, data: data.trend.other }
    ]
  });
}

function initPlatformChart() {
  charts.platform = echarts.init(document.getElementById("platformChart"));
  charts.platform.setOption({
    color: [colors.blue],
    tooltip: { trigger: "axis", axisPointer: { type: "shadow" }, valueFormatter: (value) => `${fmt.format(value)} 条` },
    grid: { ...grid(22), bottom: 70 },
    xAxis: { type: "category", data: data.platforms.map((item) => item[0]), axisLabel: { interval: 0, rotate: 32 }, axisLine: { lineStyle: { color: "#d7ded6" } } },
    yAxis: { type: "value", splitLine: { lineStyle: { color: "#edf2ea" } }, axisLabel: { formatter: (value) => fmt.format(value) } },
    series: [{ type: "bar", barWidth: 22, data: data.platforms.map((item, index) => ({ value: item[1], itemStyle: { color: index === 0 ? colors.blue : "#86b8a6" } })), label: { show: true, position: "top", formatter: ({ value }) => fmt.format(value) } }]
  });
}

function renderDonut(chart, rows, centerText, isPercent = false) {
  const total = rows.reduce((sum, row) => sum + row[1], 0);
  chart.setOption({
    color: [colors.blue, colors.red, colors.yellow, colors.green, colors.purple, colors.cyan, colors.gray],
    tooltip: { trigger: "item", formatter: ({ name, value, percent }) => `${name}<br/>${isPercent ? value.toFixed(2) + "%" : fmt.format(value) + " 条"} (${percent}%)` },
    series: [{ type: "pie", radius: ["56%", "76%"], center: ["50%", "52%"], label: { formatter: ({ name, percent }) => `${name} ${percent}%` }, data: rows.map(([name, value]) => ({ name, value })) }],
    graphic: [{ type: "text", left: "center", top: "47%", style: { text: centerText || fmt.format(total), fontSize: 22, fontWeight: 900, fill: colors.ink, textAlign: "center" } }]
  });
}

function initSentiment() {
  charts.sentiment = echarts.init(document.getElementById("sentimentChart"));
  createTabs("sentimentTabs", data.sentiments, "all", renderSentiment);
  renderSentiment("all");
}

function renderSentiment(key) {
  const selected = data.sentiments[key];
  document.getElementById("sentimentCaption").textContent = selected.caption;
  renderDonut(charts.sentiment, selected.values, selected.label);
}

function initRegion() {
  charts.region = echarts.init(document.getElementById("regionChart"));
  const rows = [...data.regions].reverse();
  charts.region.setOption({
    color: [colors.green],
    tooltip: { trigger: "axis", axisPointer: { type: "shadow" }, valueFormatter: (value) => `${fmt.format(value)} 位作者` },
    grid: grid(16),
    xAxis: { type: "value", splitLine: { lineStyle: { color: "#edf2ea" } }, axisLabel: { formatter: (value) => fmt.format(value) } },
    yAxis: { type: "category", data: rows.map((item) => item[0]), axisLine: { show: false }, axisTick: { show: false } },
    series: [{ type: "bar", barWidth: 16, data: rows.map((item, index) => ({ value: item[1], itemStyle: { color: index > 6 ? colors.yellow : "#6aa87c" } })), label: { show: true, position: "right", formatter: ({ value }) => fmt.format(value) } }]
  });
}

function initKeywords() {
  const max = Math.max(...data.keywords.map((item) => item[1]));
  const palette = [colors.blue, colors.red, colors.yellow, colors.green, colors.cyan, colors.purple, colors.ink];
  document.getElementById("keywordCloud").innerHTML = data.keywords
    .map(([word, value], index) => {
      const size = 16 + Math.sqrt(value / max) * 28;
      return `<span class="keyword" title="${word}: ${fmt.format(value)}" style="--size:${size.toFixed(0)}px;--color:${palette[index % palette.length]}">${word}</span>`;
    })
    .join("");
}

function initMedia() {
  document.getElementById("mediaSummary").innerHTML = data.mediaSummary
    .map(([name, count, posts]) => `<div class="media-row"><strong>${name} · ${count}</strong><span class="media-count">${fmt.format(posts)} 条</span></div>`)
    .join("");
  charts.mediaLevel = echarts.init(document.getElementById("mediaLevelChart"));
  charts.mediaLevel.setOption({
    color: [colors.blue, colors.green, colors.yellow],
    tooltip: { trigger: "item" },
    series: [{ type: "pie", radius: ["54%", "76%"], center: ["50%", "52%"], data: data.mediaSummary.slice(1).map(([name, count, posts]) => ({ name: `${name} ${count}`, value: posts })) }]
  });

  charts.mediaRank = echarts.init(document.getElementById("mediaRankChart"));
  createTabs("mediaTabs", data.mediaRanks, "central", renderMediaRank);
  renderMediaRank("central");
}

function renderMediaRank(key) {
  const rows = [...data.mediaRanks[key].values].reverse();
  charts.mediaRank.setOption({
    color: [colors.cyan],
    tooltip: { trigger: "axis", axisPointer: { type: "shadow" }, valueFormatter: (value) => `${fmt.format(value)} 篇` },
    grid: grid(16),
    xAxis: { type: "value", splitLine: { lineStyle: { color: "#edf2ea" } } },
    yAxis: { type: "category", data: rows.map((item) => item[0]), axisLine: { show: false }, axisTick: { show: false } },
    series: [{ type: "bar", barWidth: 16, data: rows.map((item) => item[1]), label: { show: true, position: "right" } }]
  });
}

function initLayers() {
  charts.layer = echarts.init(document.getElementById("layerChart"));
  charts.layer.setOption({
    color: [colors.red],
    tooltip: { trigger: "axis", axisPointer: { type: "shadow" }, valueFormatter: (value) => `${value}%` },
    grid: grid(20),
    xAxis: { type: "category", data: data.layers.map((item) => item[0]), axisLine: { lineStyle: { color: "#d7ded6" } } },
    yAxis: { type: "value", axisLabel: { formatter: "{value}%" }, splitLine: { lineStyle: { color: "#edf2ea" } } },
    series: [{ type: "bar", barWidth: 28, data: data.layers.map((item, index) => ({ value: item[1], itemStyle: { color: index === 4 ? colors.red : "#dda08e" } })), label: { show: true, position: "top", formatter: "{c}%" } }]
  });
  document.getElementById("propagationStats").innerHTML = `
    <div><span>最大信息层级</span><strong>${data.propagation.maxLayer}</strong></div>
    <div><span>总转发人数</span><strong>${fmt.format(data.propagation.reposts)}</strong></div>
    <div><span>覆盖微博用户</span><strong>${fmt.format(data.propagation.reach)}</strong></div>
  `;
}

function renderInfluencers() {
  document.getElementById("influencerList").innerHTML = data.influencers
    .map(([name, fans, reposts], index) => `<div class="hot-item"><span class="hot-rank">${index + 1}</span><span class="hot-title">${name}</span><span class="hot-meta">粉丝 ${fmt.format(fans)} · 转发 ${reposts}</span></div>`)
    .join("");
}

function initComments() {
  charts.emotion = echarts.init(document.getElementById("emotionChart"));
  renderDonut(charts.emotion, data.emotions, "评论情绪", true);
  createTabs("commentTabs", data.comments, "positive", renderComments);
  renderComments("positive");
}

function renderComments(key) {
  const selected = data.comments[key];
  document.getElementById("commentCaption").textContent = selected.caption;
  document.getElementById("commentList").innerHTML = selected.values
    .map(([text, fans], index) => `<div class="opinion-item"><span class="opinion-rank">${index + 1}</span><span class="opinion-text" title="${text}">${text}</span><span class="opinion-heat">粉丝 ${fmt.format(fans)}</span></div>`)
    .join("");
}

function installDownload() {
  document.getElementById("downloadTrend").addEventListener("click", () => {
    const url = charts.trend.getDataURL({ pixelRatio: 2, backgroundColor: "#ffffff" });
    const a = document.createElement("a");
    a.href = url;
    a.download = "盲道事件舆情趋势图.png";
    a.click();
  });
}

function boot() {
  renderKpis();
  renderTimeline();
  initTrendChart();
  initPlatformChart();
  initSentiment();
  initRegion();
  initKeywords();
  initMedia();
  initLayers();
  renderInfluencers();
  initComments();
  installDownload();
  if (window.lucide) window.lucide.createIcons();
  window.addEventListener("resize", () => Object.values(charts).forEach((chart) => chart.resize()));
}

window.addEventListener("DOMContentLoaded", boot);
