var myLibrary = new Array();
tableCreate()

let button = document.getElementById('button')
button.addEventListener('click', addBookToLibrary)


let dlt_button = document.getElementById('dlt_button')
dlt_button.addEventListener('click', deleteChosen)


function addBookToLibrary() {
  let name = prompt('Please, provide the name of the book')
  let author = prompt('Who is the author?')
  let pages = prompt('How many pages is it?')
  let addition = new Book(name, author, pages, myLibrary.length)
  myLibrary.push(addition)
  tableUpdate(addition) 
}

function deleteChosen() {
  const table = document.getElementById("mytable");
  for (const [index, row] of [...table.rows].entries()) {
    if (row.querySelector('input:checked')) {
      table.deleteRow(index);
    }
  }
}

function Book(name, author, pages, index) {
    this.name = name
    this.author = author
    this.pages = pages
    this.index = index
  }
  

function tableCreate() {

  let button = document.getElementById('container')

  var body = document.body;
  var tbl  = document.createElement('table');
  var tr  = document.createElement('tr');
  tr.setAttribute('id', 'head')
  tbl.setAttribute('id', 'mytable');
  tbl.style.width = '100%';
  tbl.setAttribute('border', '1');

  let headers = ['Name of the book', 'Author', 'Pages', 'Finished?', 'Choose an entry to delete']
  for (var i = 0; i<headers.length; i++){
    var th = document.createElement('th')
    th.innerHTML = headers[i]
    tr.appendChild(th)
    }
  tbl.appendChild(tr)
  body.insertBefore(tbl, button)
  }

function tableUpdate(addition) {
  let button = document.getElementById('container')
  var body = document.body;
  var tbl = document.getElementById('mytable')
  var tr = document.createElement('tr')
  tr.setAttribute('id', myLibrary.length-1)

  var td1 = document.createElement('td')
  td1.innerHTML = myLibrary[myLibrary.length - 1].name
  tr.appendChild(td1)

  var td2 = document.createElement('td')
  td2.innerHTML = myLibrary[myLibrary.length - 1].author
  tr.appendChild(td2)

  var td3 = document.createElement('td')
  td3.innerHTML = myLibrary[myLibrary.length - 1].pages
  tr.appendChild(td3)

  var td4 = document.createElement('td')
  var checkbox = document.createElement('input');
  checkbox.type = "checkbox"
  td4.append(checkbox)
  tr.appendChild(td4)

  var td5 = document.createElement('td')
  var checkbox = document.createElement('input');
  checkbox.type = "radio"
  checkbox.setAttribute('class', 'delete-check')
  td5.append(checkbox)
  tr.appendChild(td5)

  tbl.appendChild(tr)
  body.insertBefore(tbl, button)
}





