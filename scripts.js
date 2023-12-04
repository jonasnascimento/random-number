const generateNumber = document.querySelector("#button-generate-number")


generateNumber.addEventListener("click", buttongeneratenumber)
function buttongeneratenumber() {
    const min = Math.ceil(document.querySelector(".input-entre").value)
    const max = Math.floor(document.querySelector(".input-e").value)

    if (min >= max) {
        alert("O valor de (entre) tem que ser MENOR que (e)")
    } else {
        const result = Math.floor(Math.random() * (max - min + 1) + min)
        alert(result)
    }
}

