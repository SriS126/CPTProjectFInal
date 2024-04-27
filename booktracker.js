function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;
    const genre = document.getElementById('genre').value;
    
    const table = document.getElementById('bookTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    newRow.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${year}</td>
        <td>${genre}</td>
        <td>
            <button onclick="deleteBook(this)">Delete</button>
            <button onclick="editBook(this)">Edit</button>
        </td>
    `;

    
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('year').value = '';
    document.getElementById('genre').value = '';
}

function deleteBook(btn) {
    let row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function editBook(btn) {
    let row = btn.parentNode.parentNode;
    let cells = row.children;
    if (btn.textContent === "Edit") {
        for (let i = 0; i < cells.length - 1; i++) {
            let value = cells[i].innerText;
            cells[i].innerHTML = `<input type='text' value='${value}' />`;
        }
        btn.textContent = "Save";
    } else { 
        for (let i = 0; i < cells.length - 1; i++) {
            let input = cells[i].children[0];
            cells[i].innerText = input.value;
        }
        btn.textContent = "Edit";
    }
}

function searchBooks() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let tableRows = document.getElementById('bookTable').getElementsByTagName('tbody')[0].rows;

    for (let i = 0; i < tableRows.length; i++) {
        let row = tableRows[i];
        let titleCell = row.cells[0].textContent.toLowerCase();
        if (titleCell.indexOf(input) > -1) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    }
}