import { createSlice } from "@reduxjs/toolkit";

export const navbarSlice = createSlice({
  name: "navbar",
  initialState: {
    value: [
      {
        type: "مواد غذایی",
        subcat: [
          "لبنیات",
          "آجیل و خشکبار",
          "پروتئینی",
          "غذای آماده و کنسروجات",
          "شیرینی و تنقلات",
          "چاشنی و ادویه جات",
        ],
        show: true,
        id: 1
      },
      {
        type: "نوشیدنی و دمنوش ها",
        subcat: ["نوشیدنی های گرم", "نوشیدنی های سرد"],
        show: false,
        id: 2
      },
      {
        type: "خواربار",
        subcat: [
          "روغن",
          "قند و شکر و نبات",
          "نان و غلات",
          "ماکارونی و رشته",
          "برنج",
          "حبوبات",
        ],
        show: false,
        id: 3
      },
      {
        type: "ابزار و ملزومات",
        subcat: [
            "لوازم اتومبیل و ابزار",
            "لوازم الکتریکی و کامپیوتر",
            "لوازم منزل و ابزار"
        ],
        show: false,
        id: 4
      },
      {
        type: "آرایشی بهداشتی",
        subcat: [
            "بهداشت خانگی",
            "بهداشت فردی",
            "آرایشی"
        ],
        show: false,
        id: 5
      },
      {
        type: "لوازم التحریر و اداری",
        subcat: [
            "لوازم التحریر"
        ],
        show: false,
        id: 6
      },
      {
        type: "مادر و کودک",
        subcat: [
            "اسباب بازی و سرگرمی",
            "غذا و نوشیدنی کودک",
            "بهداشت مادر",
            "بهداشت و مراقبت کودک",
            "ملزومات کودک"
        ],
        show: false,
        id: 7
      },
      {
        type: "میوه و سبزیجات",
        subcat: [
            "میوه",
            "سبزی",
        ],
        show: false,
        id: 8
      },
      {
        type: "پوشاک",
        subcat: [
            "پوشاک مردانه",
            "پوشاک زنانه",
        ],
        show: false,
        id: 9
      },
    ],
    showNavbar: false
  },
  reducers: {
      showContentById: (state, action) => {
          const selectedNavitem = state.value.filter(item => item.id === action.payload)
          const otherNavitems =  state.value.filter(item => item.id !== action.payload)
          state.showNavbar = true
          otherNavitems.map(item => item.show = false)
          selectedNavitem[0].show = true
      },
      hideContent: (state) => {
          state.showNavbar = false
      },
      showContent: (state) => {
        state.showNavbar = true
    }
  }
});


export const { showContentById, hideContent, showContent } = navbarSlice.actions;

export default navbarSlice.reducer;