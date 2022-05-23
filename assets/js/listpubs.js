
const PATHS = {
    "thumbnail": "../../images/thumbnails/",
    "pdf": "../../files/papers/",
    "slides": "https://eg.bucknell.edu/~emp017/slides/"
}
const MY_NAME = "Evan M. Peck";
const DIV_ID = "publications"
const PUBS_JSON = "../../files/pubs.json"

const SHOW_TYPE_TAGES = true; 

const TYPE_COLORS = {
    "conference": 'rgb(100,200,300)',
    "journal": 'rgb(300,200,100)'
}

// Loads pubs JSON file
async function getJSON() {
    const response = await fetch(PUBS_JSON);
    const json = await response.json();
    return json
}

async function main() {
    let pub_data = await getJSON();
    let pubs = pub_data.publications;

    // Sort so that most recent is top
    pubs.sort(function(a, b) {
        return b.year - a.year;
    });

    // add the paths of different files
    pubs.forEach(pub => addPaths(pub))
    // add the 
    pubs.forEach(pub => addPub(pub));
}

// Adds paths to 
function addPaths(pub) {
    // look through all properties
    for (let prop in pub) {
        if (prop in PATHS) {
            pub[prop] = PATHS[prop] + pub[prop];
        }
    }
    // look through all properties in supp
    if (pub.hasOwnProperty('supp')) {
        for (let prop in pub['supp']) {
            if (prop in PATHS) {
                pub['supp'][prop] = PATHS[prop] + pub['supp'][prop];
            }
        }
    }
}

function makeElement(elementName, className) {
    let element = document.createElement(elementName);
    element.classList.add(className);
    return element;
}

/** Get the link used for the title and thumbnail clicking */
function getPrimaryLink(pub_data) {
    let link;
    // First check if there is an explicit link property
    if (pub_data.hasOwnProperty('link')) {
        link = pub_data.link;
    } 
    // Then check if PDF is in the main object
    else if (pub_data.hasOwnProperty('pdf')) {
        link = pub_data.pdf;
    } 
    // Then check if PDF is in the supp material
    else if (pub_data.hasOwnProperty('supp')) {
        let supp = pub_data['supp']
        if (supp.hasOwnProperty('pdf')) {
            link = supp['pdf']
        } else {
            link = supp[Object.keys(supp)[0]];
        }
    } 
    return link;
}

function addPub(pub_data) {
    let pubs_section = document.getElementById(DIV_ID);

    let pub = makeElement('div', 'pub')
    pubs_section.appendChild(pub);

    let primaryLink = getPrimaryLink(pub_data);
    
    
    // Thumbnail link

    let thumbnail_link = makeElement('a', 'thumbnail')
    thumbnail_link.href = primaryLink; 

    // Thumbnail image
    let thumbnail = makeElement('img', 'thumbnail')
    thumbnail.src = pub_data.thumbnail
    // If there is alt text, add it. 
    if (pub_data.hasOwnProperty('alt')) {
        thumbnail.alt = pub_data.alt;
    }

    // Add image to link
    if (primaryLink != null) {
        thumbnail_link.appendChild(thumbnail)
        // add thumbnail
        pub.appendChild(thumbnail_link)
    } else {
        pub.appendChild(thumbnail)
    }
    
    // Type tag (not finished)
    let typeTag = makeElement('div', 'type-tag')
    typeTag.textContent = pub_data.type;
    typeTag.style.backgroundColor = "rgb(255, 0, 0)";

    // Title
    let title;
    if (primaryLink != null) {
        title = makeElement('a', 'title')
        title.href = primaryLink;
    } else {
        title = makeElement('div', 'title')
    }
    title.textContent = pub_data.title;

    // Authors
    let authors = makeElement('div', 'authors')
    authors.innerHTML += pub_data.author.join(", ")
                            .replace(MY_NAME, '<span class="me">' + MY_NAME + '</span>');
    
    // Venue
    let venue = makeElement('div', 'venue')
    venue.textContent = pub_data.venue + ', ' + pub_data.year

    

    // add pubinfo
    let pubInfo = makeElement('div', 'pubinfo');

    // pub.append(typeTag)
    pub.appendChild(pubInfo)
    pubInfo.appendChild(title)
    pubInfo.appendChild(authors)
    pubInfo.appendChild(venue)

    if (pub_data.hasOwnProperty('supp')) {
        let supp = addSupps(pub_data)
        pubInfo.appendChild(supp);
    }
}


function addSupps(pub_data) {
    let supps = makeElement('div','supp')
    let content = ''
    
    for (let link in pub_data.supp) {
        content += '| <a href="' + pub_data.supp[link] + '" class="supp"> ' + link + '</a> ';
    }
    supps.innerHTML += content.slice(2); // slice removes the first '| '
    return supps;
}

main()