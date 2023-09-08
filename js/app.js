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
let data = [];
const active = "active";

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

  function clearSelection(){
    //remove the active class for all active nav items
    const liItems = document.querySelectorAll('li');
    liItems.forEach( node => {
        node.getElementsByTagName('a')[0].classList.remove(active);
    });
}

  // Scroll to section on link click
function linkClick(event){    
    //remove the active class for all active nav items
    clearSelection();

    //set nav selected item as active
    event.target.classList.add(active);
    //get the id
    const targetId = event.target.getAttribute('targetid');
    //calling scrollTo function to scroll to the specific targetId element    
    scrollTo(targetId);
}



function scrollToTop(){
    //remove the active class for all active nav items
    clearSelection();

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
        aElement.setAttribute('targetId', `section${i+1}`);
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

//reading the sections data from index.html
function readArrayData(){
    data = Array.from(document.getElementsByTagName("section"));
}

//set up the main function we will start when the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    start();
});

// Add class 'active' to section when near top of viewport
function scrollEvent() {
    // on window scroll
    window.addEventListener('scroll', (e) => {

        // get all sections on the page
        const sections = document.querySelectorAll('section');

        // loop through each section
        sections.forEach(section => {

            // get px distance from top
            const topDistance = section.getBoundingClientRect().top;

            // if the distance to the top is between 0-100px
            if (topDistance > -300 && topDistance < 300) {
                section.classList.add('active-class');

                //clear selection
                clearSelection();

                //select nav item
                const id = section.id;
                document.querySelector(`[targetId=${id}]`).classList.add(active);


                // otherwise, remove the class
            } else {
                section.classList.remove('active-class');
            }
        });
    });
}

function activeSection(){

}

function start(){
    readArrayData();
    buildNav();
    addScrollToTopEvent();
    scrollEvent();
}




/**
 * End Main Functions
*/

