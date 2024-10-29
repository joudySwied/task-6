
// featuredBooks

let featuredBooks = document.querySelector(".featuredBook");

fetch(
  "https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/"
)
  .then((res) => res.json())
  .then((res) => getDataBook(res));

function getDataBook(res) {
  const length = res.length;
  // نحدد بداية الحلقة
  const start = Math.max(0, length - 4);
  // نستخدم حلقة for للطباعة
  for (let i = start; i < length; i++) {
    featuredBooks.innerHTML += `
                  <div class="col-12 col-md-3">
                      <div class="card border-0">
                          <div class="forimage d-flex justify-content-center bg-body-secondary bg-opacity-50 pt-4 pb-4 ps-2 pe-2 border-1 border-opacity-25 position-relative">
                              <img src=${res[i].simple_thumb} class="w-75 bookcard" alt="cover book">
                              <div class="w-100 bg-black text-light text-center py-3  addtocart position-absolute bottom-0 "> ADD TO CART </div>
                              </div>
                          <div class="card-body text-center bg-body-tertiary">
                              <h3 class="text-center fs-4 text-warning-emphasis">
                                  ${res[i].title}
                              </h3>
                              ${res[i].author}
                          </div>
                      </div>
                  </div>
              `;
  }
}

// best selling books

let bestSelling = document.querySelector(".bestSelling");
let bestSellingImg = document.querySelector(".bestSellingImg");
fetch(
  "https://wolnelektury.pl/api/books/studnia-i-wahadlo/"
)
  .then((res) => res.json())
  .then((res) => getDataBook2(res));


function getDataBook2(res) {


  bestSelling.innerHTML += `
              <span class="text-black-50 ms-3 ms-md-5 mt-5 pt-3 d-inline-block">By ${res.authors.name} </span>
            <h3 class="ms-3 ms-md-5  mt-4 mb-4">${res.title}</h3>
            <div class="w-75 ms-3 ms-md-5 lh-lg text-black-50 pe-5">
            ${res.fragment_data.html}  
            </div>
              `;
  bestSellingImg.innerHTML += `            <img
              src=${res.cover}
              alt="book cover"
              class="mt-2 mb-md-4  object-fit-contain w-50 imgbest"
            />
            `;


  }



// popularbooks

let popularBooks = document.querySelector(".popularBooks");

fetch(
  "https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/"
)
  .then((res) => res.json())
  .then((res) => getDataBook3(res));

function getDataBook3(res) {

  for (let i = 0 ; i < 8 ; i++) {
    popularBooks.innerHTML += `
                            <div class="col-12 col-md-4 col-lg-3">
            <div class="card border-0 mb-3">
              <div
                class="forimage d-flex justify-content-center  bg-body-secondary bg-opacity-50 pt-4 pb-4 ps-2 pe-2 border-1 border-opacity-25"
              >
                <img
                  src=${res[i].simple_thumb}
                  class="w-75  "
                  alt="cover book   "
                />

              </div>
              <div class="card-body text-center bg-body-tertiary">
                <h3 class="text-center fs-4 text-warning-emphasis">
                ${res[i].title}
                </h3>
                <span class="text-center"> ${res[i].author} </span>
              </div>
            </div>
          </div>
              `;
  }
}
//  active for popular  

  const links = document.querySelectorAll('.pop-link');
  
  links.forEach(link => {
      link.addEventListener('click', function(event) {
          
          if (this.classList.contains('activeli')) {
              this.classList.remove('activeli');
          } else {
              links.forEach(link => {
                  link.classList.remove('activeli');
              });
              this.classList.add('activeli');
          }
      });
  });

  //  active for nav   
  const tonav = document.querySelectorAll('.tonav');
  
  tonav.forEach(link => {
      link.addEventListener('click', function(event) {
          
          if (this.classList.contains('active')) {
              this.classList.remove('active');
          } else {
            tonav.forEach(link => {
                  link.classList.remove('active');
              });
              this.classList.add('active');
          }
      });
  });