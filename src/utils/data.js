class Sword {
  constructor(id, image, name, wielder, price, animeTitle) {
    this.id = id;
    this.image = image;
    this.name = name;
    this.wielder = wielder;
    this.price = price;
    this.animeTitle = animeTitle;
    this.itemsInCart = 0;
  }
}

const sword1 = new Sword(
  1,
  "https://cdn.webshopapp.com/shops/305440/files/351161219/demon-slayer-tanjiro-kamado-black-nichirin-blade.jpg",
  "Black Nichirin Blade",
  "Tanjiro Kamado",
  49.99,
  "Demon Slayer"
);
const sword2 = new Sword(
  2,
  "https://cdn.webshopapp.com/shops/305440/files/334090128/demon-slayer-zenitsu-agatsuma-yellow-nichirin-blad.jpg",
  "Yellow Nichirin Blade",
  "Zenitsu Agatsuma",
  39.99,
  "Demon Slayer"
);
const sword3 = new Sword(
  3,
  "https://cdn.webshopapp.com/shops/305440/files/345311377/demon-slayer-inosuke-hashibira-indigo-gray-nichiri.jpg",
  "Gray Nichirin Blade",
  "Inosuke Hashibira",
  39.99,
  "Demon Slayer"
);
const sword4 = new Sword(
  4,
  "https://cdn.webshopapp.com/shops/305440/files/334090059/demon-slayer-kyojuro-rengoku-red-nichirin-blade.jpg",
  "Red Nichirin Blade",
  "Kyojuro Rengoku",
  39.99,
  "Demon Slayer"
);
const sword5 = new Sword(
  5,
  "https://cdn.webshopapp.com/shops/305440/files/334089428/one-piece-sword-of-mihawk-yoru.jpg",
  "Sword of Mihawk",
  "Yoru",
  29.99,
  "One Piece"
);
const sword6 = new Sword(
  6,
  "https://cdn.webshopapp.com/shops/305440/files/375003526/one-piece-katana-of-roronoa-zoro-sandai-kitetsu.jpg",
  "Sandai Kitetsu",
  "Zoro",
  89.99,
  "One Piece"
);
const sword7 = new Sword(
  7,
  "https://cdn.webshopapp.com/shops/305440/files/369844282/one-piece-katana-of-kozuki-oden-ame-no-habakiri.jpg",
  "Ame No Habakiri",
  "Oden",
  79.99,
  "One Piece"
);
const sword8 = new Sword(
  8,
  "https://cdn.webshopapp.com/shops/305440/files/337546568/one-piece-katana-of-luffy-nidai-kitetsu.jpg",
  "Nidai Kitetsu",
  "Lufy",
  129.99,
  "One Piece"
);

let swords = [sword1, sword2, sword3, sword4, sword5, sword6, sword7, sword8];

export default swords;
