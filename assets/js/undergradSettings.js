// All the settings that could vary between pages
var SETTINGS = {
    myName: "Evan M. Peck",
    // path for the json with all the data
    pubJsonPath: "../../files/pubs.json",

    // filter settings
    startYear: 1000,
    endYear: 3000,
    tag: 'undergrad',
    include_proj: true, // if we want to include non-pubs

    // -- HIGHLIGHT SECTION
    show_highlights: true,
    highlight_heading: "Highlighted Activity",
    highlightsID: "highlights",
    // [] if no highlights, fill with keys if highlights
    highlights: ["site_22_cspui", "medium_17_puiJobs", "medium_18_studentResearch"],
    
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
