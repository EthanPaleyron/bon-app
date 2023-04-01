const modeDark = document.getElementById('modeDark');
const h2 = document.querySelectorAll("h2");
const table = document.querySelectorAll("table");
let bool = true;

modeDark.addEventListener('click', () => {
    if (bool) {
        modeDark.innerHTML = "Light";
        modeDark.style.color = "#000";
        modeDark.style.backgroundColor = "#EAEBEB";
        document.body.style.backgroundColor = "#2D3142";
        bool = false;
    } else {
        modeDark.innerHTML = "Dark";
        modeDark.style.color = "#fff";
        modeDark.style.backgroundColor = "#2D3142";
        document.body.style.backgroundColor = "#fff";
        bool = true;
    }

    h2.forEach(e => {
        if (bool) {
            e.style.color = "#2D3142";
        } else {
            e.style.color = "#fff";
        }
    })

    table.forEach(e => {
        if (bool) {
            e.style.border = "1px solid #2D3142";
        } else {
            e.style.border = "1px solid #fff";
        }
    })
})

// C'EST UNE BLAGUE
// modeDark.addEventListener('click', () => {
//     document.body.innerHTML = "<h2>ha ha c'est une blague </h2>";
//     document.body.style.backgroundColor = '#2D3142';
//     document.body.style.color = '#fff';
// })