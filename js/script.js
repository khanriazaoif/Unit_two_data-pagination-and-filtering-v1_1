/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage( list, page) {
    let startIndex = (page * 9) - 9;
    let endIndex = (page * 9);
    let ul = document.querySelector('.student-list');
    ul.innerHTML = '';
    for (let i = 0; i < list.length; i++) {
        if (i >= startIndex && i < endIndex) {
            const li = document.createElement('li');
            li.className = 'student-item cf';
            function createDivStudentDetails(){
                const div = document.createElement('div');
                div.className = 'student-details';
                const img = document.createElement('img');
                img.className = 'avatar';
                const src = document.createElement('src')
                img.src = data[i].picture.large;
                img.alt = 'Profile Picture';
                const h3 = document.createElement('h3');
                h3.className = 'searchID';
                const span = document.createElement('span');
                span.className = "email";

                ul.appendChild(li);
                li.appendChild(div);
                div.appendChild(img);
                img.insertAdjacentElement("afterend", h3);
                h3.innerText = data[i].name.first;
                h3.insertAdjacentElement("afterend", span);
                span.innerText = data[i].email;
                return;
            }

            function createDivJoinedDetails(){
                const div = document.createElement('div');
                div.className = 'joined-details';
                const span = document.createElement('span');
                span.className = 'date';
                span.innerText = data[i].registered.date;

                li.appendChild(div);
                div.appendChild(span);
            }

            createDivStudentDetails();
            createDivJoinedDetails();
        }
    }

};




/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list){
    let valueOfPaginationButton = list.length;
    const ul = document.querySelector('.link-list');
    ul.innerHTML = '';
        for (let i = 0; i < list.length / 9; i++) {
            const li = document.createElement('li');
            const createButton = document.createElement('button');
            createButton.type = "button";

            ul.appendChild(li);
            li.appendChild(createButton);
            createButton.innerText = [i + 1];
            let pageNumbers = createButton.textContent;
        }

        function selectFirstPaginationButton() {
            const firstLiButton = document.querySelector('button');
            firstLiButton.className = 'active';
            return;
        }

        selectFirstPaginationButton();

        const buttonSelect = document.querySelectorAll('button');
        for (let i = 0; i< buttonSelect.length; i++){
        let buttonText = buttonSelect[i].textContent;

        }
    ul.addEventListener('click', (e) => {

    if (e.target.tagName === 'BUTTON'){
        //googled help with below: https://stackoverflow.com/questions/38990163/how-can-i-add-and-remove-an-active-class-to-an-element-in-pure-javascript
        function removeActiveClass(e) {
            let activeClass = document.querySelectorAll('.active');
            [].forEach.call(activeClass, function (el) {
                el.classList.remove('active');
            });
            e.target.className = 'active';
        }
    removeActiveClass(e);
}

        let activeClassInnerText = document.querySelector('.active');
        let pageNumber = activeClassInnerText.innerHTML
        showPage(data,  pageNumber);
    });

};

function searchComponent (){
    const label = document.createElement('label');
    label.setAttribute("for", "search");
    label.className = 'student-search';
    // console.log(label);

    const span = document.createElement('span');
    span.innerText = 'Search by name';
    // console.log(span);

    const input = document.createElement('input');
    input.setAttribute('id', 'search');
    input.setAttribute('placeholder', 'Search by name ....');
    // console.log(input);

    const button = document.createElement('button');
    button.type = 'button';

    const img = document.createElement('img');
    img.setAttribute('src', 'img/icn-search.svg');
    img.setAttribute('alt', 'Search icon');
    // console.log(img);

    const headers = document.querySelector('header');

    headers.appendChild(label);
    label.appendChild(span);
    span.insertAdjacentElement('afterend', input);
    input.insertAdjacentElement('afterend', button);
    button.appendChild(img);

    const tableCells = document.querySelectorAll('.searchID');
    console.log(tableCells);
    const search = document.querySelector('#search');



    // console.log(search);
    // const search = document.querySelector('button');

    function performSearch(searchInput, names) {
        // console.log(names);

        for (let i = 0; i < names.length; i++){
            // 1c. Remove the 'match' class name from each `names[i]`
            // console.log(names[i]);
            names[i].classList.remove('match');
            // 1d. Create a conditional that checks two conditions:
            // 1ca. If the `searchInput.value.length` does not equal the digit zero AND `names[i].textContent.toLowerCase()` includes `searchInput.value.toLowerCase())`
            if (searchInput.value.length !== 0 && names[i].textContent.toLowerCase().includes(searchInput.value.toLowerCase())){
                const filter = input.value.toUpperCase();
                // console.log(filter);
                const ul = document.querySelector('.student-list');
                console.log(ul);
                const li = document.querySelectorAll('.student-item.cf');
                console.log(li);
                for (let i = 0; i < li.length; i++) {
                    // var a, i, txtValue;
                    let a = li[i].querySelectorAll('.searchID')[0];
                    console.log(a);
                    let txtValue = a.textContent || a.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        li[i].style.display = '';
                        console.log('YES THE NEW THING WORKS');
                    } else {
                        li[i].style.display = 'none';
                        console.log('NO THE NEW ONE DONT WORK');
                    }
                }
                console.log('yes');
            } else {
                console.log('no');
            }
        }
    }

    /* submit listener */
    search.addEventListener('keyup', () => {

        // Invoke your search function here - Arguments: search, tableCells
        performSearch(search, tableCells);

        // Helpful log statement to test function
        console.log('Keyup event on the Search input is functional!');
    });

}







// Call functions

addPagination(data);
showPage(data,1);
searchComponent();