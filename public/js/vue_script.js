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

var vm = new Vue({
  el: '#myID',
  data: {
    arbitraryVariableName: 'Select a burger',
    burgers: food,
  }
})

new Vue({
    el: '#orderbutton',
    methods: {
        clicked: function() {
          console.log("button clicked");
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
