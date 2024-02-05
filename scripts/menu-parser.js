var menuArea = document.getElementById("menu-area");
/*
    {
        "id" : 0,
        "name" : "",
        "description" : "",
        "section" : "",
        "price" : 0
    }
*/

var menuObj;

fetch("menu-items.json")
    .then((response) => response.json())
    .then((json) => {

        console.log(json);
        menuObj = json;
        loadMenu(menuObj, document.getElementById("menu-area"));
    });

function loadMenuObject(obj) { // creates elements for display from a menu item element
    let article = document.createElement('article');

    var title = document.createElement('h3');
    title.innerText = obj.name;
    article.append(title);

    var desc = document.createElement('p');
    desc.innerText = obj.description;
    article.append(desc);

    var price = document.createElement('p');
    price.innerText = "$" + obj.price.toFixed(2);
    article.append(price);

    console.log(obj.name + " loaded!"); // for debugging

    return article;
}

function loadMenu(menu, targetElement) { // loads all menu objects to targetElement
    var sections = [];
    for(let i = 0; i < menu.length; i++) {

        // load section for item
        let itemSection = null;
        for(let j = 0; j < sections.length; j++) {
            if(sections[j].name == menu[i].section) {
                itemSection = sections[j];
            }
        }
        if(itemSection == null) {
            var newSectionElement = document.createElement('div');

            newSectionElement.setAttribute("class", "menu-section");
            newSectionElement.setAttribute("id", menu[i].section);

            var newSectionHeader = document.createElement('h1');
            newSectionHeader.innerText = menu[i].section;
            newSectionElement.append(newSectionHeader);

            newSectionElement.append(document.createElement('hr'));

            targetElement.append(newSectionElement);

            itemSection = {
                "name" : menu[i].section,
                "element" : newSectionElement
            };
            sections.push(itemSection);
        }

        // inject item in section
        itemSection.element.append(loadMenuObject(menu[i]));
    }
    console.log('Menu loaded'); // for debugging
}