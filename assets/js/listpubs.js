
const MY_NAME = "Evan M. Peck";
const DIV_ID = "publications"
const THUMBNAIL_PATH = "../../images/thumbnails/"
const PUBS_JSON = "../../files/pubs.json"

// Loads pubs JSON file
async function getJSON() {
    const response = await fetch(PUBS_JSON);
    const json = await response.json();
    return json
}

async function main() {
    let pub_data = await getJSON();
    let pubs = pub_data.publications;

    pubs.sort(function(a, b) {
        return b.year - a.year;
    });

    pubs.forEach(pub => addPub(pub));
}

/**
 * Helper function that returns classed div
 * @param {*} className 
 * @returns 
 */
function makeDiv(className) {
    let div = document.createElement('div')
    div.classList.add(className)
    return div
}

function addPub(pub_data) {
    let pubs_section = document.getElementById(DIV_ID);

    let pub = makeDiv('pub')
    pubs_section.appendChild(pub);
    
    // Thumbnail link
    let thumbnail_link = document.createElement('a')
    thumbnail_link.classList.add('thumbnail')
    thumbnail_link.href = 'http://www.eg.bucknell.edu/~emp017/'

    // Thumbnail image
    let thumbnail = document.createElement('img')
    thumbnail.classList.add('thumbnail')
    thumbnail.src = THUMBNAIL_PATH + pub_data.thumbnail
    // Add image to link
    thumbnail_link.appendChild(thumbnail)

    // Title
    let title = makeDiv('title')
    title.textContent = pub_data.title;

    // Authors
    let authors = makeDiv('authors')
    authors.textContent = pub_data.author.join(", ")
                            //  .replace(MY_NAME, '<span class="me">' + MY_NAME + '</span>');
    
    // Venue
    let venue = makeDiv('venue')
    venue.textContent = pub_data.venue + ', ' + pub_data.year


    // add thumbnail
    pub.appendChild(thumbnail_link)

    // add pubinfo
    let pubInfo = makeDiv('pubinfo');
    pub.appendChild(pubInfo)
    pubInfo.appendChild(title)
    pubInfo.appendChild(authors)
    pubInfo.appendChild(venue)
}

main()