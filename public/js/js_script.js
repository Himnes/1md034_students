
function makeArray()
{
  var arr = [];
  arr[0] = document.getElementById("fullname").value;
  arr[1] = document.getElementById("email").value;
  arr[2] = document.getElementById("payment").value;

  var rad = document.getElementsByName("g");

  for (var i = 0; i < rad.length; ++i)
  {
    var bx = rad[i].checked;
    if (bx)
    {
      arr[3] = rad[i].id;
    }
  }

  var detaljer = {x: vm.orders.details.x,
            y: vm.orders.details.y};
  arr[4] = "Deliver to " + detaljer.x + "x" + " / " + detaljer.y + "y"
  var chec = document.getElementsByName("ch");
  var index = 5; //because we already have 6 items
  for (var i = 0; i < chec.length; ++i)
  {
    var b = chec[i].checked;
    if (b)
    {
      arr[index] = chec[i].id;
      ++index;
    }
  }


return arr;

}



// The whole menu in JavaScript
/*
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

document.getElementById("myID").innerHTML = "Select your burger";

function createMenu(arr)
{
  var int = 1;
  var myElement = document.getElementById("myID");
  for (burger in arr)
  {
  var burg = arr[burger];
  var grid = document.createElement("div");
  var burgerName = document.createElement("h4");
  grid.setAttribute("class","box");
  grid.setAttribute("width","200");
  grid.style.setProperty("grid-column",int);
  var name = document.createTextNode(burg.name);
  burgerName.appendChild(name);
  grid.appendChild(burgerName);

  var gridimg = document.createElement("img");
  gridimg.setAttribute("src",burg.picture);
  gridimg.setAttribute("width","150");
  gridimg.setAttribute("heigth","150");
  //gridimg.setAttribute("class","picture");
  grid.appendChild(gridimg);

  var griddesc = document.createElement("ul");


  var griditem = document.createElement("li");
  var gridinfo = document.createTextNode(burg.description);
  griditem.setAttribute("class","list");
  griditem.appendChild(gridinfo);
  if (burg.lactose)
  {
    var griditem2 = document.createElement("li");
    griditem2.setAttribute("class","list");
    var gridinfo2 = document.createTextNode("Other info: Contains");
    griditem2.appendChild(gridinfo2);

    var gridspan = document.createElement("span");
    var gridspantext = document.createTextNode(" lactose");
    gridspan.setAttribute("id","lactose");
    gridspan.setAttribute("class","allergies");
    gridspan.appendChild(gridspantext);
    griditem2.appendChild(gridspan);
    griditem.appendChild(griditem2);

  }
  if (burg.gluten)
  {
    var griditem3 = document.createElement("li");
    griditem3.setAttribute("class","list");
    var gridinfo3 = document.createTextNode("Other info: Contains");
    griditem3.appendChild(gridinfo3);

    var gridspan2 = document.createElement("span");
    var gridspantext2 = document.createTextNode(" gluten");
    gridspan2.setAttribute("id","gluten");
    gridspan2.setAttribute("class","allergies");

    gridspan2.appendChild(gridspantext2);
    griditem3.appendChild(gridspan2);
    griditem.appendChild(griditem3);
  }

  griddesc.appendChild(griditem);
  griddesc.setAttribute("class","ul");
  grid.appendChild(griddesc);

  var check = document.createElement("label");
  check.innerHTML = "Order here!"
  var checkinput = document.createElement("input");
  checkinput.setAttribute("type","checkbox");
  check.appendChild(checkinput);
  grid.appendChild(check);

  myElement.appendChild(grid);
  ++int;


}}

createMenu(food);

//For ther orderbutton in JavaScript
/*
var myButton = document.getElementById("orderbutton");
var ord = document.getElementById("dispOrder");
myButton.addEventListener("click", event => {
  ord.innerHTML = makeArray();
});
*/



///before javascript and vue, this was it. It's hard to comment out
///code in html so it is here for future reference
/*
        <div class="box"><h2>Bunnie & side</h2>
        <img src="https://www.franksredhot.com/-/media/franksus18/recipe-images/franks-redhot-bacon-cheeseburger.ashx">
        <ul>
          <li>Vegetables: Onions, Tomatoes</li>
          <li>Meat: Made from lamb</li>
          <li>Bread: Available gluten-free</li>
          <li>Other info: Contains <span id="lactose" class="allergies" >lactose</span></li>
        </ul></div>

        <div class="box"><h2>The Phantom</h2>
        <img src="http://www.ezic.com.tr/en/wp-content/uploads/sites/4/2015/01/Hamburger-300x300.jpg">
        <ul>
          <li>Vegetables: A little</li>
          <li>Meat: Made from beef</li>
          <li>Bread: Super fluffy</li>
          <li>Other info: Contains <span id="lactose" class="allergies" >lactose</span></li>
        </ul></div>

        <div class="box"><h2>Ninja Burger</h2>
        <img src="http://www.redrobinpa.com/wp-content/uploads/2011/02/royal-red-robin-burger-217-300x300.jpeg">
        <ul>
          <li>Vegetables: A lot</li>
          <li>Meat: Made from fish</li>
          <li>Bread: Exists</li>
          <li>Other info: Contains <span id="gluten" class="allergies" >gluten</span></li>
        </ul>
        <br />
}*/
