// section-center is a parent of all classes ie i selecting
// if error shows something is not a function it means it is a variable
let sectionCenter= document.querySelector('.section-center')
let allBtn = document.querySelectorAll('.filter-btn')
// console.log(allBtn)

const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "T-shirt",
    price: 15.99,
    img: "./anomaly-WWesmHEgXDs-unsplash.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "shoes",
    price: 13.99,
    img: "./pexels-apostolos-vamvouras-2285500.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "Watches",
    price: 6.99,
    img: "./pexels-fernando-arcos-190819.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "T-shirt",
    price: 20.99,
    img: "./mediamodifier-t2JEL82VTe0-unsplash.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "shoes",
    price: 22.99,
    img: "./pexels-melvin-buezo-2529148.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "Watches",
    price: 18.99,
    img: "./pexels-lilartsy-1374128.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "T-shirt",
    price: 8.99,
    img: "./pexels-jonathan-faria-2220316.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "shoes",
    price: 12.99,
    img: "./pexels-web-donut-19090.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "Watches",
    price: 16.99,
    img: "./pexels-yugdas-manandhar-2155319.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "pakage",
    price: 22.99,
    img: "./pexels-lumn-322207.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
// what i did in order to print above array in dom let discuss
// first i made a similar object like inside an array in html, then i copy it and return it in my function 
// so how i replace html object , i used backticks and replace its value to the key of object inside array to make it dynamic
window.addEventListener('DOMContentLoaded', function(){
  displayDiffMenuItem(menu)
});
  // console.log(obj)
    // function will display what we are returning , and array.map iterate array and give callback function, this callback function return array.length times
    // ex:- if i return a string of hello then it will return hello 10 times, but here i am returning an article tag , so article tag will return 10 times , in article i put key of array's object, keys of all object are same and value of all object are different therfore it will return a article with different value in every iteration
    // and i stored all 10 iteration in a variable, then i assigned it to   sectionCenter.innerHTML 
    //   sectionCenter.innerHTML is exactaly equal to what we are returning
    // so this assignment (sectionCenter.innerHTML = displayMenu) creates all array inside html and html is a dom 
    // there is a question where previous html went?
    

// ---------------------------------------
function displayDiffMenuItem(menuItem){
  let displayMenu = menuItem.map(function(obj){
    
return `<article class="menu-item">
                <img src=${obj.img} alt="${obj.title}" class="photo">
                <div class="item-info">
                    <header>
                        <h4>${obj.category} </h4>
                        <h4 class="price">${obj.price}</h4>
                    </header>
                    <p class="item-text">
                   ${obj.desc}    
                    </p>
                </div>


            </article>
`
})
  displayMenu = displayMenu.join(' ')
  // console.log(displayMenu)
  sectionCenter.innerHTML = displayMenu
}

allBtn.forEach(function(everyBtn){
  console.log(everyBtn)
  everyBtn.addEventListener('click',  function(e){
    let category = e.currentTarget.dataset.id
    // console.log(category)
   let menuCategory = menu.filter(function(menuItem){
      // console.log(menuItem.category)
     if(menuItem.category=== category){
       return menuItem
      
     }
      })
     console.log(menuCategory)
  // first it check  condition below, if someone click all , this function will not go to  displayDiffMenuItem(menuCategory)
    // and if someone click any other button except all then  displayDiffMenuItem(menuCategory) will call, 
    // there is two array menu and menucategory as a argument in function's parameter
    if(category==='All'){
      displayDiffMenuItem(menu)
    }else{
      displayDiffMenuItem(menuCategory)
    }
  })
})
// we learned if i have one array, i can transfer in html, i can filter array and transfer in html differently by clicking different button
