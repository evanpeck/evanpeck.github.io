// All the settings that could vary between pages
var SETTINGS = {
    myName: "Evan M. Peck",
    // path for the json with all the data
    pubJsonPath: "../../files/pubs.json",

    // filter settings
    startYear: 1000,
    endYear: 3000,
    tag: 'publicVis',
    include_proj: true, // if we want to include non-pubs

    // -- HIGHLIGHT SECTION
    show_highlights: true,
    highlight_heading: "Highlighted Activity",
    highlightsID: "highlights",
    // [] if no highlights, fill with keys if highlights
    highlights: ["chi_19_data", "vis_22_vis4good", "chi_23_novices"],
    
    // -- PUBS SECTION
    show_pubs: true,
    pub_heading: "Activity and Engagement",
    divID: "publications",

    // replace paths
    paths: {
        "thumbnail": "../../images/thumbnails/",
        "icons": "../../images/thumbnails/icons/",
        "pdf": "../../files/papers/",
        "slides": "../../files/slides/"
    }
}
