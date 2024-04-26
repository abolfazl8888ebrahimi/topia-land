
let containerPro = document.getElementsByClassName("container-pro")
let searcher = document.getElementById("search")
let topiaShop = [
    {
      model: "King kourosh T-shirt",
      mannequin: "Kourosh",
    },
    {
      model: "Zolaldel T-shirt",
      mannequin: "Kourosh",
    },
    {
      model: "Namakye -T-shirt",
      mannequin: "Iman",
    },
    {
      model: "Dogm nabash T-shirt",
      mannequin: "Mia",
    },
  ];
let result = topiaShop ;

searcher.addEventListener("input" , (e) => {

    const userSearch = e.target.value.tolowerCase();

    result = topiaShop.filter((item) => {

        return topiaShop.model.tolowerCase().includes(userSearch);

    });

    renderInUI(result , containerPro)
});

function renderInUI(array, place){

containerPro.innerHTML = "" ;
array.forEach((item) => {
    const tag = document.createElement("div")
    tag.style.border = "1px solid black"
    tag.innerHTML = `
                <h1>${item.model}</h1>
                <h1>${item.mannequin}</h1>
    `
    place.appendChild(tag)
});


}