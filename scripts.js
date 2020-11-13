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
Tiles JSON
---------------------------------------------*/
let tilesBlock = {
    "id": "granite-888",
    "feature": "tiles",
    "class": "a_custom",
      "options": {
        "title": "",
        // "description": "Etiam dapibus semper nisi, sit amet commodo quam elementum vitae. In hac habitasse platea dictumst. Curabitur sed erat quis nisi imperdiet molestie a ut massa. Phasellus lacinia ante eu risus rhoncus, at accumsan nisl viverra. Nam convallis magna sed lobortis auctor. Phasellus et nisl purus. Duis hendrerit justo eu sapien eleifend, quis maximus massa sodales. Vivamus a fringilla nisl, vel laoreet mauris. In a lacinia leo. Praesent sit amet massa dapibus, dictum lorem eu, elementum tortor.",
        "description_hover": false,
        "customOverlay": false,
        "container_top_padding": "50px",
        "container_bottom_padding": "50px",
        "body_content_top_padding": "30px",
        "layout": "center", //picklist: left, center, right
        "theme": "custom",
        "app_layout": false,
        "header_color": "",
        "header_size": "18px", //small, medium, large
        "description_color": "",
        "description_size": "", //small, medium, large
        "icon_color": "red",
        "columns": "4",
        "fillRow": false,
        "full_width": true,
        "icon_size": "",
        "height": "200px",
        "no_overlay": false,
        "filter_one": "",
        "filter_one_opacity": ".8",
        "filter_two": "",
        "filter_two_opacity": "0",
        "search": false,
        "classes": "tabs-class",
        "hover_color": "",
        "padding": "5px",
        "border_radius": "",
        "border": "",
        "border_color": "",
  //             "buttons":[
  //                 {"label": "Button 1", "href": "/datatables_dev_temp?selection=button1", "sidepane": "true"},
  //                 {"label": "Button 2", "href": "/datatables_dev_temp?selection=button2", "sidepane": "false"}
  //             ],
        "filter_label": "",
        "filter_tag_options": ["All", "Atlantic Ocean", "Pacific Ocean", "No Coastline"],
        "action_header_size": "50px",
        "action_header_color": "red",
        "action_header_bottom_margin": "50px",
        "action_description_size": "16px",
        "action_description_color": "orange",
        "action_description_bottom_margin": "50px",
        "action_description_line_height": "18px",
      },
      "records": [
        {
          "title":"kristina",
          "font_size":"",
          "title_color":"#fefcff",
          "background_color":"red",
          "background_image": "",
          "border":"2px solid #fff",
          "height":"150px",
          "description":"",
          "text_color":"#101010",
          "image": "https://img.icons8.com/color/40/000000/full-image.png",
          "icon":"",
          "icon_size":"",
          "icon_color":"",
          "link_name":"",
          "href":"",
          "target":"",
          "tags": ["Atlantic Ocean"],
          "hover_color":"light",
          "classes":"",
          "addapptation_component":"true",
          "addapptation_name":"Tile",
          "addapptation_type":"tile",
          "addapptation_code_id":"a0R1I000004BjOfUAK",
          "addapptation_id":"03091813838320976",
          "addapptation_navigation":"",
          "hover":"false",
          "center":"false",
          "side_pane":"false",
          "action":"hash_builder"
        },
        {
          "title":"Chris",
          "font_size":"",
          "title_color":"#fefcff",
          "background_color":"#6c13b3",
          "background_image": "",
          "border":"2px solid #fff",
          "height":"150px",
          "description":"",
          "text_color":"#101010",
          "image": "https://img.icons8.com/color/40/000000/full-image.png",
          "icon":"",
          "icon_size":"",
          "icon_color":"",
          "tags": ["Pacific Ocean"],
          "link_name":"",
          "href":"/application?id=Augsburg",
          "target":"",
          "hover_color":"custom",
          "classes":"",
        },
        {
          "title": "Adam",
          "description": "",
          "background_color": "#6312a3",
          "background_image": "",
          "href": "",
          "link_name": "",
          "center": false,
          "image": "https://img.icons8.com/color/40/000000/full-image.png",
          "buttons": [{"name": "View", "href": "/cards?selection=view"}],
          "icon": "",
          "icon_color": "",
          "icon_size": "",
          "title_color": "",
          "title_size": "",
          "description_color": "",
          "description_size": "",
          "hover_color": "",
          "target": false,
          "classes": "a__record_class"
        },
        {
          "title": "Sample",
          "description": "",
          "background_color": "#6c13b3",
          "background_image": "",
          "href": "https://addapptation.com/",
          "link_name": "Button",
          "center": false,
          "image": "https://img.icons8.com/color/40/000000/full-image.png",
          "buttons": [{"name": "View", "href": "/cards?selection=view"}],
          "icon": "",
          "icon_color": "",
          "icon_size": "30px",
          "title_color": "",
          "title_size": "",
          "description_color": "",
          "description_size": "",
          "hover_color": "#333",
          "target": false,
          "classes": "a__record_class"
        },
        {
          "title": "California",
          "description": "",
          "background_color": "#6312a3",
          "tags": ["apple", "orange", "banana"],
          "background_image": "",
          "image": "https://img.icons8.com/color/40/000000/full-image.png",
          "padded_image": "",
          "href": "https://addapptation.com/",
          "link_name": "Button",
          "center": false,
          "icon": "",
          "target": false
        },
        {
          "title": "",
          "description": "",
          "background_color": "#6312a3",
          "background_image": "",
          "padded_image": "",
          "image": "https://img.icons8.com/color/40/000000/full-image.png",
          "href": "https://addapptation.com/",
          "link_name": "Button",
          "center": false,
          "buttons": [
            {"name": "Download", "href": "/cards?selection=view"},
            {"name": "Learn More", "href": "/cards?selection=view"}
          ],
          "icon": "",
          "center_image": "",
          "target": false
        }
      ]
  };

  granite_tiles(tilesBlock, jsonTheme);