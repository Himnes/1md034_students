function MenuItem(burgername, kcal, glut, lact, pic, desc)
{
  this.name = burgername;
  this.kCal = kcal;
  this.gluten = glut;
  this.lactose = lact;
  this.whatkcal = function()
  {
    return this.burger + ' ' + this.kCal;
  }
  this.picture = pic;
  this.description = desc;
}

var vm2 = new Vue({
  el: '#myID',
  data: {
    arbitraryVariableName: 'Select a burger',
    burgers: food,
  }
})

new Vue({
    el: '#orderbutton',
    methods: {
        addOrder: function() {
          console.log("button clicked");
          socket.emit("addOrder", {customer: makeArray().slice(0, 4),
                                   orderId: Math.floor(Math.random()*1000),
                                   details: {x: vm.orders.details.x,
                                             y: vm.orders.details.y},
                                   orderItems: makeArray().slice(5)});
          document.getElementById("dispOrder").appendChild(document.createTextNode("{{arr}}"));
          new Vue({
            el: "#dispOrder",
            data:
            {
              arr: makeArray(),

            }
          });
        }
    },
});
