const input = document.getElementById('input')

function addingEventListener() {
    input.addEventListener('click', function(event) {
        console.log(event);
    });
    
}


// const input = document.querySelector('input');

// function addingEventListener() {
//   input.addEventListener('click', function(event) {
//     return "clicked"
//   });
// }