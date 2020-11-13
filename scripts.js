/*---------------------------------------------
Themes and Mode
---------------------------------------------*/
let jsonTheme = {
    "primary": "#df0284",
    "secondary": "#3fd0d4",
    "mode": "midnight"
}
if(jsonTheme.mode === "midnight"){
    document.body.style.backgroundColor = "#101010";
}
/*---------------------------------------------
Navigation
---------------------------------------------*/
let navigationBlock = {
  "id": "granite-888",
  "feature": "navigation",
  "options": {
    "type": "sidebar",
    "background": "#3c4c8c",
    "background_opacity": "",
    "mobile_menu": "topbar",
    "font_color": "#ffffff",
    "mobile_breakpoint": "550px",
    "font_size": "18px",
    "topbar_padding_right": "",
    "topbar_padding_left": "",
    "dropdown_font_size": "12px",
    "highlight": "",
    "no_break_link_item": true,
    "topbar_position": "right",
    "topbar_over_content": false,
    "topbar_font_size": "10px",
    "button_style": "transparentWhite",
    "cta_button_padding": "",
    "single_submenu": true,
    "hide_mobile_nav": false,
    "header_label": "<span id='addapptation'>addapptation</span>",
    "header_image": "https://addapptation.blob.core.windows.net/logo/logo.png",
    "header_link": "#test",
    "wrap_logo": false,
    "footer": "<a href='sign-out'>Sign Out</a>",
    "gradient": "",
    "topbar_gradient": "",
    "searching": false,
    "link_label": "Sign In",
    "link_url": "#",
    "link_target": false,
    "cta_link_left_margin": "300px",
    "cta_label": "Edit",
    "cta_url": "#",
    "cta_target": false,
    "hide_on": [],
    "item_height": "65px",
    "menu": false,
    "menu_items": [
      {"label": "Menu Item Number 1", "icon": "search", "href": "#menu=1"},
      {"label": "Menu Item Number 2", "icon": "clipboard", "href": "#menu=2"},
      {"label": "Menu Item Number 3", "icon": "list", "href": "#menu=3"},
      {"label": "Menu Item Number 4", "icon": "home", "href": "#menu=4"},
      {"label": "Menu Item Number 5", "icon": "tools", "href": "#menu=5"},
      {"label": "Menu Item Number 6", "icon": "hammer", "href": "#menu=6"},
    ],
    "use_recent_items": true,
    "search_url": "search"
  },
  "records": [
      {"href": "addappter-nav-test.html", "label": "Home", "icon": "fal fa-home", "classes": "custom_class_link"},
      {"href": "addappter-form-test.html", "type":"external", "label": "Form with a long label", "icon": "fal fa-clipboard-list-check"},
      {"label": "Libraries 1 with a long link name", "icon": "fal fa-toolbox", "submenu_header": true},
          {"href": "#sign_out", "icon": "fal fa-sign-out", "label": "Sign Out", "submenu": true, "hide_if": "#{@hide_sign_out}"},
          {"href": "#sign_in", "icon": "fal fa-sign-in", "label": "Sign In", "submenu": true},
          {"href": "#calendar", "icon": "", "label": "Calendar with some more text and more", "submenu": true},
      {"href": "https://teamaddapptation.github.io/granite/js/sidepane/sidepane.html", "label": "Sidepane", "icon": "fal fa-window-restore"},
      {"label": "Libraries 2", "submenu_header": true},
          {"href": "#architecture", "icon": "fal fa-sitemap", "label": "Architecture", "submenu": true},
          {"href": "#credentials", "icon": "fal fa-unlock-alt", "label": "Credentials", "submenu": true},
          {"href": "#design", "icon": "fal fa-palette", "label": "Design", "submenu": true},
          {"href": "#schema_builder", "icon": "fal fa-folder-tree", "label": "Schema Builder", "submenu": true},
          {"href": "#roadmap", "icon": "fal fa-map-marked", "label": "Roadmap", "submenu": true},
      {"href": "addappter-tabs-test.html", "label": "Tabs", "icon": "fal fa-layer-group"},
      ],
};
granite_navigation(navigationBlock, jsonTheme);