//Ripple Event Handler
// var drawRipple = function(ev) {
//     var x = ev.clientX;
//     var y = ev.clientY;
//     var node = document.querySelector(".ripple");
//     var newNode = node.cloneNode(true);
//     newNode.classList.add("animate");
//     newNode.style.left = ev.clientX - 5 + "px";
//     newNode.style.top = ev.clientY - 5 + "px";
//     node.parentNode.replaceChild(newNode, node);
//   };
  
  //Ripple Triggers
//   window.addEventListener("click", drawRipple);
  
  
  //Control Handler
  var controlHandler = function() {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      controller.textContent = "Dark Ripple";
    } else {
      controller.textContent = "Bright Ripple";
    }
  };
  
  // Control Trigger
  var controller = document.querySelector(".controller");
  controller.addEventListener("click", controlHandler);

const body = document.querySelector('body')

const redButton = document.querySelector('#red')
const greenButton = document.querySelector('#green')
const blueButton = document.querySelector('#blue')

redButton.addEventListener('click', (event) => {
    let node = document.createElement("DIV");
    body.appendChild(node)
    node.classList.add('ripple')
    node.style.background = 'red'
    var newNode = node.cloneNode(true);
    newNode.classList.add("animate");
    newNode.style.left = '25%'
    newNode.style.top = '66%'
    node.parentNode.replaceChild(newNode, node);
})

greenButton.addEventListener('click', (event) => {
    let node = document.createElement("DIV");
    body.appendChild(node)
    node.classList.add('ripple')
    node.style.background = 'green'
    var newNode = node.cloneNode(true);
    newNode.classList.add("animate");
    newNode.style.left = '50%';
    newNode.style.top = '66%';
    node.parentNode.replaceChild(newNode, node);
})

blueButton.addEventListener('click', (event) => {
    let node = document.createElement("DIV");
    body.appendChild(node)
    node.classList.add('ripple')
    node.style.background = 'blue'
    var newNode = node.cloneNode(true); 
    newNode.classList.add("animate");
    newNode.style.left = '75%'
    newNode.style.top = '66%'
    node.parentNode.replaceChild(newNode, node);
})