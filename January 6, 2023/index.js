const fruitsForm = document.querySelector('#fruits');

fruitsForm.addEventListener(
    "submit",
    (e) => {
        e.preventDefault();
        const fruit = document.querySelector('#fruit');
        const quantity = document.querySelector('#quantity')
        const list = document.createElement

        const item = document.createElement('li');


        item.append(`${quantity.value} ${fruit.value}`);

        list.append(item);

        fruitsForm.reset();

        quantity.value = "";
        fruit.value = "";
    }
)