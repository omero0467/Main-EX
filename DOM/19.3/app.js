const inputs = document.querySelectorAll('input');
for (let i=0; i<inputs.length; i++) {
inputs[i].maxLength = 1
let input = inputs[i]
input.addEventListener('input', (e) => {
    if (e.target.value && e.target!==inputs[inputs.length-1]) {
        inputs[i+1].focus()
    }
})}
const form = document.querySelector('form')
document.addEventListener("paste", function(e) {
    // if the target is a text input
    if (e.target.type === "text") {
     let data = e.clipboardData.getData('Text');
     // split clipboard text into single characters
     data = data.split('');
     // find all other text inputs
     [].forEach.call(document.querySelectorAll("input[type=text]"), (node, index) => {
        // And set input value to the relative character
        node.value = data[index];
      });
     form.submit()
    } else {null}
  });