/**
 * Bambu Lab 用户评价报告 - 全局数据配置文件
 * 每次新增数据时，只需在此文件中添加对应条目，并上传新的数据文件
 *
 * 更新说明：
 * - 公开评论：按月更新，添加 publicMonths 条目 + 对应 data_public_xxx.js 文件
 * - 差评工单：按周更新，添加 complaintWeeks 条目 + 对应 data_complaint_wxx.js 文件
 * - 满意度问卷：按周更新，添加 surveyWeeks 条目 + 对应 data_survey_wxx.js 文件
 */
window.REPORT_CONFIG = {

  // ===== 公开评论月份配置 =====
  // label: 下拉显示文字
  // key: 对应 window.DATA_PUBLIC_xxx 变量名
  // file: 对应 JS 文件名（用于动态加载）
  publicMonths: [
    {
      label: "Q1（2026年1-3月）",
      key: "DATA_PUBLIC_Q1",
      file: "data_public_q1.js",
      dateRange: "2026-01-01 ~ 2026-03-31",
      count: 53
    },
    {
      label: "2026年4月",
      key: "DATA_PUBLIC_APR",
      file: "data_public_apr.js",
      dateRange: "2026-04-01 ~ 2026-04-21",
      count: 105
    }
    // 新增示例：
    // {
    //   label: "2026年5月",
    //   key: "DATA_PUBLIC_MAY",
    //   file: "data_public_may.js",
    //   dateRange: "2026-05-01 ~ 2026-05-31",
    //   count: 0
    // }
  ],

  // ===== 差评工单周次配置 =====
  complaintWeeks: [
    {
      label: "W9（2026-03-01 ~ 2026-03-07）",
      key: "DATA_COMPLAINT_W9",
      file: "data_complaint_w9.js",
      dateRange: "2026-03-01 ~ 2026-03-07",
      count: 41
    },
    {
      label: "W10（2026-03-08 ~ 2026-03-14）",
      key: "DATA_COMPLAINT_W10",
      file: "data_complaint_w10.js",
      dateRange: "2026-03-08 ~ 2026-03-14",
      count: 33
    },
    {
      label: "W11（2026-03-15 ~ 2026-03-21）",
      key: "DATA_COMPLAINT_W11",
      file: "data_complaint_w11.js",
      dateRange: "2026-03-15 ~ 2026-03-21",
      count: 50
    },
    {
      label: "W12（2026-03-22 ~ 2026-03-28）",
      key: "DATA_COMPLAINT_W12",
      file: "data_complaint_w12.js",
      dateRange: "2026-03-22 ~ 2026-03-28",
      count: 50
    },
    {
      label: "W13（2026-03-29 ~ 2026-04-04）",
      key: "DATA_COMPLAINT_W13",
      file: "data_complaint_w13.js",
      dateRange: "2026-03-29 ~ 2026-04-04",
      count: 48
    },
    {
      label: "W14（2026-04-05 ~ 2026-04-11）",
      key: "DATA_COMPLAINT_W14",
      file: "data_complaint_w14.js",
      dateRange: "2026-04-05 ~ 2026-04-11",
      count: 35
    }
    ,
    {
      label: "W15（2026-04-12 ~ 2026-04-18）",
      key: "DATA_COMPLAINT_W15",
      file: "data_complaint_w15.js",
      dateRange: "2026-04-12 ~ 2026-04-18",
      count: 59
    },
    {
      label: "W16（2026-04-19 ~ 2026-04-25）",
      key: "DATA_COMPLAINT_W16",
      file: "data_complaint_w16.js",
      dateRange: "2026-04-19 ~ 2026-04-25",
      count: 64
    }
  ],

  // ===== 满意度问卷周次配置 =====
  surveyWeeks: [
    {
      label: "W9（2026-03-01 ~ 2026-03-07）",
      key: "DATA_SURVEY_W9",
      file: "data_survey_w9.js",
      dateRange: "2026-03-01 ~ 2026-03-07",
      count: 248
    },
    {
      label: "W10（2026-03-08 ~ 2026-03-14）",
      key: "DATA_SURVEY_W10",
      file: "data_survey_w10.js",
      dateRange: "2026-03-08 ~ 2026-03-14",
      count: 254
    },
    {
      label: "W11（2026-03-15 ~ 2026-03-21）",
      key: "DATA_SURVEY_W11",
      file: "data_survey_w11.js",
      dateRange: "2026-03-15 ~ 2026-03-21",
      count: 283
    },
    {
      label: "W12（2026-03-22 ~ 2026-03-28）",
      key: "DATA_SURVEY_W12",
      file: "data_survey_w12.js",
      dateRange: "2026-03-22 ~ 2026-03-28",
      count: 279
    },
    {
      label: "W13（2026-03-29 ~ 2026-04-04）",
      key: "DATA_SURVEY_W13",
      file: "data_survey_w13.js",
      dateRange: "2026-03-29 ~ 2026-04-04",
      count: 268
    },
    {
      label: "W14（2026-04-05 ~ 2026-04-11）",
      key: "DATA_SURVEY_W14",
      file: "data_survey_w14.js",
      dateRange: "2026-04-05 ~ 2026-04-11",
      count: 172
    },
    {
      label: "W15（2026-04-12 ~ 2026-04-18）",
      key: "DATA_SURVEY_W15",
      file: "data_survey_w15.js",
      dateRange: "2026-04-12 ~ 2026-04-18",
      count: 127
    },
    {
      label: "W16（2026-04-19 ~ 2026-04-25）",
      key: "DATA_SURVEY_W16",
      file: "data_survey_w16.js",
      dateRange: "2026-04-19 ~ 2026-04-25",
      count: 140
    }
  ]
};
