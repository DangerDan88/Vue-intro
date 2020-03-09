var app = new Vue({
  el: "#app",
  data: {
    product: "chicken and waffles",
    image: "src/assets/chicken.jpg",
    link: "https://www.roscoeschickenandwaffles.com/our-menu",
    inStock: true,
    details: ["big drip", "duhboy"],
    cart: 0
  },
  methods: {
    addToCart: function() {
      // this refers to cart above 
      this.cart += 1
    }
  }
});
