
var products = [
  {
    id: 1,
    image: "img/AKKO 1.jpg",
    name: "Keyboard AKKO 3087 DS Midnight R2  ",
    text: "Keycap: PBT Double-Shot, Cherry profile, Akko switch (Blue/Orange/Pink) v2",
    price: 1299000,
  },
  {
    id: 2,
    image: "img/AKKO 2.jpg",
    name: "Keyboard AKKO 3098N Multi-modes ",
    text: "Bluetooth 5.0 / Wireless 2.4Ghz / Hotswap / Foam tiêu âm / Foam đáy / TTC switch ",
    price: 2999000,
  },
  {
    id: 3,
    image: "img/keyboard.png",
    name: "Keyboard Logitech G610 Orion",
    text: "Cherry MX Blue switch, USB 2.0, 153 x 443.5 x 34.3 mm, 1259 gr ",
    price: 1740000,
  },
  {
    id: 4,
    image: "img/macbook-pro-16-inch-large.jpg",
    name: "Apple Macbook Pro 16 (Apple M1)",
    text: "Apple M1 Pro (10 Core), RAM 16GB, 512GB NVMe,  Apple GPU (16 Cores), 100Wh Battery, Silver x ",
    price: 69990000,
  },
  {
    id: 5,
    image: "img/microsoft-surface-studio-laptop.jpg ",
    name: "Microsoft Surface Laptop Studio",
    text: "Intel Core i5 11300H, RAM 16GB, 512GB m.2 NVMe, 14.4 120Hz (2400 x 1600), Intel Iris Xe, Silver",
    price: 49990000,
  },
  {
    id: 6,
    image: "img/razer.jpg",
    name: "Razer Blade 15 Base",
    text: "Intel Core i7-8750H, RAM 16GB, 256GB m.2 NVMe + 2TB HDD, 15.6 60Hz FHD IPS (1920x1080), GTX 1060 6GB, 65Wh, Black ",
    price: 27490000,
  },
  {
    id: 7,
    image: "img/logitech-g102.jpg",
    name: "Logitech G102 Lightsync RGB Black",
    text: "New 100% - Fullbox",
    price: 400000,
  },
  {
    id: 8,
    image: "img/macbook-pro-16-inch-large.jpg",
    name: "Laptop",
    text: "Apple M1 Pro (10 Core), RAM 16GB, 512GB NVMe,  Apple GPU (16 Cores), 100Wh Battery, Silver x  ",
    price: 69990000,
  },
];

var product_list = document.getElementById("item-list");

for (var product of products) {
  product_list.innerHTML += `<div class="card" style="width: 20rem; col-6 col-sm-4 col-lg-3 mt-3 p-3 ">
                               <div class="product-img">
                                 <img src="${product.image}" alt="Product">
                               </div>
                               
                               <div class="product-name">${product.name}</div>
                               <div class="product-text">${product.text}</div>
                               <div class="product-price">${product.price} VNĐ</div>

                               <div class="text-end">
                                 <button id="${product.id}" onclick="add product (this)" class="btn btn-danger btn-sm">Add to Cart</button>
                               </div>
                             </div>`;
}
