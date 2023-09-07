/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
//This is the data of our page
let data = [
    {
        title: "Section 1",
        body: "First section 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.",
        footer: "Second Section 2 Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non."
    },
    {
        title: "Section 2",
        body: "First section 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.",
        footer: "Second Section 2 Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non."
    },
    {
        title: "Section 3",
        body: "First section 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.",
        footer: "Second Section 3 Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non."
    },
    {
        title: "Section 4",
        body: "First section 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.",
        footer: "Second Section 4 Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non."
    }
];

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Scroll to anchor ID using scrollTO event
function scrollTo(id){
    // Scroll to a certain element by id
    document.getElementById(id).scrollIntoView({ 
      behavior: 'smooth' 
    });
  }

  // Scroll to section on link click
function linkClick(event){
    const targetId = event.target.getAttribute('targetId');
    //calling scrollTo function to scroll to the specific targetId element
    scrollTo(targetId);
}

function scrollToTop(){
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
      });
}

function addScrollToTopEvent(){
    //use to get the goToTopLink element by id
    const btnTopElement = document.getElementById('goToTopLink');
    //add the click event listener
    btnTopElement.addEventListener('click', function () {
        scrollToTop();
    });
}


// Set sections as active


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav(){

    //use to get the nav element by id
    const navElement = document.getElementById('navbar__list');
    //uses a DocumentFragment instead of a <div> to make the performance better and fast
    const fragment = document.createDocumentFragment();

    //we used the for with index because it's needed in our case
    for (let i = 0; i < data.length; i++) {

        //create the li element
        const liElement = document.createElement('li');

        //create the a html element 
        const aElement = document.createElement('a');
        //We write here the section index number that's why we used the for with index i  
        aElement.innerText = 'Section ' + (i+1); 
        //set the targetId
        aElement.setAttribute('targetId', `section-${i}`);
        //add the click event listener
        aElement.addEventListener('click', function (event) {
            linkClick(event);
          });

        //append a to li element
        liElement.appendChild(aElement);

        //append li to the fragment element
        fragment.appendChild(liElement);
    }
 
    //append fragment to the nav ul element
    navElement.appendChild(fragment);
}

// Build menu 
function buildMenu(){

    //use to get the main element by main selector
    const mainElement = document.querySelector('main');
    //uses a DocumentFragment instead of a <div> to make the performance better and fast
    const fragment = document.createDocumentFragment();

    //we used the for with index because it's needed in our case
    for (let i = 0; i < data.length; i++) {

        //create the li element
        const sectionElement = document.createElement('section');
        //We write here the section index number that's why we used the for with index i  
        sectionElement.setAttribute('data-nav', data[i].title);
        sectionElement.setAttribute('class', 'your-active-class');
        sectionElement.id = `section-${i}`;

        //create the div html element 
        const divElement = document.createElement('div');  
        divElement.className = "landing__container";

        //create the h2 element
        const titleElement = document.createElement('h2');
        titleElement.innerText = data[i].title;

        //create the p element
        const bodyElement = document.createElement('p');
        bodyElement.innerText = data[i].body;

        //create the p element
        const footerElement = document.createElement('p');
        footerElement.innerText = data[i].footer;

        //append h2, p and p to the div element
        divElement.appendChild(titleElement);
        divElement.appendChild(bodyElement);
        divElement.appendChild(footerElement);

        //append div to the section element
        sectionElement.appendChild(divElement);

        //append sectionElement to the fragment element
        fragment.appendChild(sectionElement);
    }
 
    //append fragment to the main element
    mainElement.appendChild(fragment);
}

//set up the main function we will start when the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    start();
});

function start(){
    buildNav();
    buildMenu();
    addScrollToTopEvent();
}

// Add class 'active' to section when near top of viewport



/**
 * End Main Functions
*/

