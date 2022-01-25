const styleConfig = {
    // Base foreground (text) color
    base_fg: "#595959",
    // Top and bottom panels
    panel_bg: "#595959", //hlavní panely - podklad, default rgba(255, 255, 255, 0.75)
    panel_fg: "rgba(255, 255, 255, 0.75)", //hlavní panely - text, default #595959
    // Titlebars
    titlebar_bg: "#808080",
    titlebar_fg: "#f2f2f2",
    // Containers (i.e. dialogs, sidebars)
    container_bg: "#f8f8f8", //podkladová barva všech rámečků, default #f8f8f8
    // Buttonbar buttons
    button_bg: "#595959",//tlačítko vyhledávání +?, default #e9e9e9
    button_hover_bg: "#dcdcdc",
    // appmenu (1: main level, 2: sublevel)
    appmenu_bg1: "#f2f2f2",//hlavní lvl pravého menu, default #f2f2f2
    appmenu_fg1: "#595959",
    appmenu_active_bg1: "white",
    appmenu_active_fg1: "#595959",
    appmenu_bg2: "#808080",
    appmenu_fg2: "white",
    appmenu_active_bg2: "#a0a0a0",
    appmenu_active_fg2: "white",
    // Map buttons
    map_button_bg: "#595959",
    map_button_fg: "white",
    map_button_active_bg: "#f2f2f2",
    map_button_active_fg: "#595959",
    // Generic
    item_border: "#595959",//kontury, vč. vyhledávání ad., default #bbb
    item_active: "#078aa3",//?
    item_active_hover: "#05768a",//?
    item_inactive_hover: "#dcdcdc"//?
};

module.exports = styleConfig;
