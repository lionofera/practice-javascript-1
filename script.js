
function addBook() {
    const Book = document.querySelector("#book").value;
    const Author  = document.querySelector("#author").value;
    const Copy = document.querySelector("#copy").value;

    document.querySelector("#message").innerHTML = [Book+" "+Author+" "+Copy];
}


