fetch("https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/")
.then(function (response) {
    return response.json();
})
.then(function (json) {
    //get first 8 books data for poublar section
    const popular_books_arr = json.slice(0, 8);
    const popular_books_element = document.querySelector("#popular-books .container");
    let row_element;
    for(let i = 0;i < popular_books_arr.length ; i++){
        if(i % 4 == 0){
            if(row_element != undefined)
            {
                popular_books_element.append(row_element);
            }
            row_element = document.createElement("div");
            row_element.className = 'row justify-content-center';
        }
        row_element.innerHTML += `
            <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
                <div class="card text-center d-flex align-items-center justify-content-center border-0 mb-3 p-3 secondary-color">
                    <div class="position-relative" onmouseover="show(this)" onmouseout="hide(this)">
                        <img src="${popular_books_arr[i].simple_thumb}" class="card-img-top p-5 background-image" alt="${popular_books_arr[i].title}"/>
                        <div class="bg-dark position-absolute bottom-0 end-0 start-0 h-25 opacity-0 text-center w-100">
                            <a class="text-white" href="#">ADD TO CART</a>
                        </div>
                    </div>
                    <div class="card-body">
                        <h3 class="card-title position-relative p-3 color-text fs-5">${popular_books_arr[i].title}</h3>
                        <p class="card-text fs-6">${popular_books_arr[i].author}</p>
                    </div>
                </div>
            </div>
        `;
    }
    popular_books_element.append(row_element);
    //get last 4 books data for featured section
    const featured_books_arr = json.slice(-4);
    const featured_books_element = document.querySelector("#featured-books .container");

    row_element = document.createElement("div");
    row_element.className = 'row justify-content-center ';
    for(let i = 0;i < featured_books_arr.length ; i++){
        row_element.innerHTML += `
            <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
                <div class="card text-center d-flex align-items-center justify-content-center border-0 mb-3 p-3 secondary-color">
                <div class="position-relative" onmouseover="show(this)" onmouseout="hide(this)">
                    <img src="${featured_books_arr[i].simple_thumb}" class="card-img-top p-5 background-image" alt="${featured_books_arr[i].title}"/>
                    <div class="bg-dark position-absolute bottom-0 end-0 start-0 h-25  opacity-0 text-center w-100">
                        <a class="text-white" href="#">ADD TO CART</a>
                    </div>
                </div>
                <div class="card-body">
                    <h3 class="card-title position-relative p-3 color-text fs-5">${featured_books_arr[i].title}</h3>
                    <p class="card-text fs-6">${featured_books_arr[i].author}</p>
                </div>
                </div>
            </div>
        `;
    }
    featured_books_element.insertBefore(row_element,featured_books_element.firstChild);

});

fetch("https://wolnelektury.pl/api/books/studnia-i-wahadlo/")
.then(function(response){
    return response.json();
})
.then(function (json){
    const best_selling_element = document.querySelector("#best-selling .container");
    const row_element = document.createElement("div");
    row_element.className = 'row justify-content-center';
    row_element.innerHTML = `
        <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="d-flex justify-content-center align-items-center justify-content-start">
                <img src="${json.cover}" class="img-thumbnail" alt="${json.title}">
            </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="d-flex justify-content-center align-items-lg-start align-items-md-center align-items-sm-center  flex-column px-3">
            <h2 class="fs-1 position-relative my-5">Best Selling Book</h2>
            <p class="my-4 sub-title-color-text">By ${json.authors[0].name}</p>
            <h3 class="my-4">${json.title}</h3>
            ${json.fragment_data.html}
            <a href="#" class="link-underline-opacity-0 link-body-emphasis my-5">Shop It Now <i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
    `;
    best_selling_element.append(row_element);
})

function tabFake(element){
    var currentTab = document.querySelector('.tab-fake-underline');
    currentTab.classList.remove('tab-fake-underline');
    currentTab.classList.remove('position-relative');
    element.classList.add('tab-fake-underline');
    element.classList.add('position-relative');
}

function show(element){
    element.children[1].classList.remove('opacity-0');
    element.children[1].classList.add('opacity-100');
}

function hide(element){
    element.children[1].classList.add('opacity-0');
    element.children[1].classList.remove('opacity-100');
}