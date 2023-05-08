/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}", "./include/*.js"],
  theme: {
    borderWidth: {
      1: '1px'
    },
    extend: {
      colors: {
        "custom-color": "#04151D",
        "input-color": "rgb(33, 49, 60)",
        "input-bg-color": "rgb(255, 255, 255)",
        "border-color": "rgb(124, 138, 255)",
        "button-color": "rgba(154, 127, 105, 0.9)",

        "toppick1-title-color": "rgba(105, 74, 70, 0.8)",
        "toppick2-title-color": "rgba(43, 42, 27, 0.8)",
        "toppick3-title-color": "rgba(6, 26, 62, 0.8)",
        "toppick4-title-color": "rgba(5, 87, 110, 0.8)",

        "custom-color": "#04151D",
        // custom-color for the whole website body

        // custom-color for the sidebar buttons
        "custom-color-sidebar-brown": "#9A7F69",

        // custom-color for when hovering the sidebar buttons
        "custom-color-sidebar-brown-hover": "#9A7F69",

        // custom-color for the footer texts
        "custom-color-footer-text": "#747474",

        // custom-color for the footer social icons
        "custom-color-footer-social-icons": "rgba(154, 127, 105, 0.4)",

        // custom-color for when hovering the navbar icons
        "custom-color-navbar-icons-hover": "#53A8AA",

        // custom-color for playlist cards
        "custom-color-playlist-card": "#9A8483",

        // custom-color for the playlist cards non-pinned
        "custom-color-playlist-card-non-pinned": "#000B11",

        // custom-color for the playlist cards non-pinned text
        "custom-color-playlist-card-non-pinned-text": "#797979",

        // custom-color for the search bar
        "custom-color-search-bar": "#D7E4EB",

        "custom-color-font-album": "#676F70",
        //for specific part in the album/song page

        "custom-color-song-button": "#9A7F69",
        //for play and shuffle button in song page

        "custom-color-song-add": "#092431",
        //for add button in song page

        "custom-color-song-hover": "#092431",
        //hover song

        "custom-color-song-font": "#E9EBE9",
        //song page font color

        "custom-color-song-more": "#797979",
        //song page in artists more like this

        "custom-color-song-add": "#A88E78",
        //song page for add button

        "custom-color-addpl-blur": "#1C2C36",
        //add playlist

        "custom-color-add-searchfont": "#676F70",

        "custom-color-add-searchbar": "rgba(215, 228, 235, 0.8)",
        //search bar

        "custom-color-navbar-hover": "rgba(154, 127, 105, 0.8);",
        //song-addpl nav bar

        "custom-color-playbar": "#184550",
        //playbar color

        // custom-color for playlist hover 
        'custom-color-playlist-hover': '#001724',

        'custom-color-b-border': '#CAC6C7',
        'webheffect': 'rgb(9, 36, 49,0.5)',
        'webdropdown': 'rgb(5, 19, 26,0.9)',

      },
      fontFamily: {
        alata: ["Alata", "sans-serif"],
      },
      spacing: {
        "237px": "237px",
        "34px": "34px",
        "324px": "324px",
        "102px": "102px",
        "64px": "649px",
        15: "59.89px",
        "43px": "43px",
        "45px": "45.51px",
        "145px": "145px",
        "248px": "248px",
        "345px": "345.79px",
        "578px": "578px",
        "1619px": "1619px",
        79: "318px",
        "265px": "265.65px",
        "240px": "240.4px",
        "253px": "253.97px",
        "72px": "72.67px",
        "890px": "890px",
        "119px": "-119px",
        "510px": "510px",
        "452px": "452px",
      },
    },
  },
  plugins: [require("tailwindcss-filters")],
};
