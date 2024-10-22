let type_number = document.querySelector('.type_number');
let add = document.querySelector('.number_add');
let minus = document.querySelector('.minus');
let plus = document.querySelector('.plus');
let h2 = document.querySelector('h2');
let addcolor = document.querySelector('.addcolor');
let add_color =document.querySelector('.coloradd')

let AddNumber = () => {
    h2.innerText = type_number.value;
};

add.addEventListener('click', () => {
    AddNumber();
});

minus.addEventListener('click', () => {
    let currentValue = Number(type_number.value) - 1;
    type_number.value = currentValue;
    h2.innerText = currentValue;
});

plus.addEventListener('click', () => {
    let currentValue = Number(type_number.value) + 1;
    type_number.value = currentValue;
    h2.innerText = currentValue;
});

const AddColor = () => {
h2.style.color = addcolor.value
}

add_color.addEventListener('click', () => {
    AddColor()
})