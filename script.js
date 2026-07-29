const watchList = [
  {
    name: "KRONOS Pro Ultra",
    price: + "1000",
    rating: 4.9,
    buyMessage: "Buy Now",
    photoUrl: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=600"
  },
  {
    name: "KRONOS Stealth",
    price: + "499",
    rating: 4.7,
    buyMessage: "Buy Now",
    photoUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600"
  },
  {
    name: "KRONOS Apex",
    price: + "750",
    rating: 4.8,
    buyMessage: "Buy Now",
    photoUrl: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=600"
  },
  {
    name: "KRONOS Active",
    price: "199",
    rating: 4.6,
    buyMessage: "Buy Now",
    photoUrl: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=600"
  },

];
let watchContainer = document.querySelector(".watchContainer");
let priceNumber = document.querySelector(".priceNumber");
let container = document.querySelector(".container");
let totalPrice = 0;
watchList.map((item) =>{
let divElement = document.createElement("div");
divElement.classList.add(
  "group", "relative", "overflow-hidden",
  "w-[270px]", "h-[390px]", "p-5",
  "rounded-[28px]",
  "bg-slate-950", "border", "border-slate-800/80", "hover:border-slate-700",
  "flex", "flex-col", "justify-between", "items-center",
  "shadow-[0_20px_40px_rgba(0,0,0,0.8)]",
  "transition-all", "duration-300"
);
let imageTag = document.createElement("img");
imageTag.classList.add(
  "w-full", "h-[170px]",
  "object-contain", "p-2",
  "filter", "drop-shadow-[0_15px_20px_rgba(0,0,0,0.7)]",
  "group-hover:scale-105",
  "transition-transform", "duration-300"
);
imageTag.src = item.photoUrl;
let watchName = document.createElement("h1");
watchName.classList.add(
  "text-lg", "font-bold", "text-slate-100",
  "text-center", "tracking-wide", "truncate", "w-full"
);
watchName.innerHTML = item.name;
let ratingText = document.createElement("h1");
ratingText.classList.add(
  "text-xs", "font-semibold", "text-amber-400",
  "bg-amber-500/10", "border", "border-amber-500/20",
  "px-3", "py-1", "rounded-full", "text-center"
);
ratingText.innerHTML = `★ ${item.rating}`;
let priceText = document.createElement("h1");
priceText.classList.add(
  "text-xl", "font-black",
  "text-transparent", "bg-clip-text",
  "bg-gradient-to-r", "from-cyan-400", "to-blue-500",
  "text-center",
);
priceText.dataset.set = item.price;
priceText.innerHTML = item.price + " $";
let buyBtn = document.createElement("button");
buyBtn.classList.add(
  "w-full", "py-2.5", "rounded-xl",
  "bg-white", "hover:bg-slate-200",
  "text-slate-950", "font-extrabold", "text-xs",
  "uppercase", "tracking-wider",
  "shadow-md", "active:scale-95",
  "transition-all", "duration-200", "cursor-pointer"
);
buyBtn.innerHTML = item.buyMessage;

buyBtn.addEventListener("click",()=>{
let watchDiv = document.createElement("div")
watchDiv.classList.add(
  "w-full", "h-[80px]", "shrink-0",
  "flex", "flex-row", "items-center", "justify-between",
  "px-3", "py-2.5", "rounded-2xl",
  "bg-slate-900/90", "border", "border-slate-800/80", "hover:border-cyan-500/40",
  "shadow-md", "hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]",
  "transition-all", "duration-300", "group"
);
let divImage = document.createElement("img");
divImage.classList.add("w-[50px]","h-[50px]","object-cover","rounded-[10px]")
divImage.src = buyBtn.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.src;

let gettingPrice = document.createElement("h1");
gettingPrice.classList.add("text-white","font-medium","text-[20px]")
let priceOfProduct = Number(buyBtn.previousElementSibling.dataset.set);
gettingPrice.innerHTML = `Price : $ ${priceOfProduct}`

let removeBtn = document.createElement("button")
removeBtn.classList.add("bg-red-500","text-white","text-[17px]","rounded-[10px]","p-[5px]")
removeBtn.innerHTML = "Remove"


totalPrice += priceOfProduct;
priceNumber.innerHTML = `Price : ${totalPrice} $`;

removeBtn.addEventListener("click",()=>{
  totalPrice -= priceOfProduct;
  watchDiv.classList.add("hidden")
priceNumber.innerHTML = `Price : ${totalPrice} $`;
})




watchDiv.appendChild(divImage);
watchDiv.appendChild(gettingPrice)
watchDiv.appendChild(removeBtn)
watchContainer.appendChild(watchDiv);
})










divElement.appendChild(imageTag)
divElement.appendChild(watchName)
divElement.appendChild(ratingText)
divElement.appendChild(priceText)
divElement.appendChild(buyBtn)
container.appendChild(divElement)
})

