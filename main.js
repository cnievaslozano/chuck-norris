document.addEventListener('DOMContentLoaded', function () {
    const selectCategory = document.getElementById("selectCategory");
    const messageContainer = document.getElementById("message");
    const nextBtn = document.getElementById("next");

    nextBtn.addEventListener('click', () => {

        const category = selectCategory.value;

        if (!category) {
            showSelectError();
        } else {

            const url = "https://api.chucknorris.io/jokes/random?category=" + category;

            fetch(url).then(response => {

                // respuesta con exito ?
                if (!response.ok) {
                    throw new Error("Error en la petición " + response.statusText);
                }

                // Pasar la respuesta a JSON
                return response.json();

            }).then(data => {
                // datos devueltos
                messageContainer.innerText = data.value;

            }).catch(error => {
                console.log("Error:", error);
            })
        }
    })



})

// mostrar error
function showSelectError() {
    document.getElementById("dialog-selectError").showModal();
}