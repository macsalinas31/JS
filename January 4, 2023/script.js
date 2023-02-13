const btnRating = document.getElementById('btn-rating');
const output = document.querySelector("#output");
const rating = document.getElementsByName("rating");

// btnRating.onclick = function() {
//     alert("Hello Rating");
// };

btnRating.addEventListener(
    "click",
    () => {

        // const rating = document.getElementsByName("rating");
        // returns a collection of elements (NodeList)
        // [input, input, input, input, input]
        
        rating.forEach(
            (element) => {
                if(element.checked) {
                    output.innerText = element.value;
                }
            }
        )


    }
);

const btnHello = document.querySelector("#hello");
const btnGoodbye = document.querySelector("#goodbye");

btnHello.addEventListener(
    "click",
    () => {
        console.log('Hello');
    }
)
btnGoodbye.addEventListener(
    "click",
    () => {
        console.log('Goodbye');
    }
)
