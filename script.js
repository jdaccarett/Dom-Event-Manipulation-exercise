

//TABLE CONSTRUCTION
var table = document.createElement("TABLE");
    table.setAttribute("id", "myTable");
    document.body.appendChild(table);

// Create an empty <thead> element and add it to the table:
var header = table.createTHead();
    header.setAttribute("class", "myHeader");
    document.body.appendChild(table);

//Creating the header row and cells
var headerRow = header.insertRow(0,0);
    headerRow.setAttribute("class", "headrow");

        var cellHead1 = headerRow.insertCell(0,0);
            cellHead1.setAttribute("class", "headCells");
        var CellHead2 = headerRow.insertCell(0,0);
            CellHead2.setAttribute("class", "headCells");
        var CellHead3 = headerRow.insertCell(0,0);
            CellHead3.setAttribute("class", "headCells");
        var CellHead4 = headerRow.insertCell(0,0);
            CellHead4.setAttribute("class", "headCells");


    var headCells = document.getElementsByClassName("headCells");

//class "headCells" returns an array. Looped and styled each cell separate to the regular cells.
    for (var i = 0; i < headCells.length; i++) {
         headCells[i].style.width= "100px";
         headCells[i].style.height= "100px";
         headCells[i].style.borderColor= "black";
         headCells[i].style.borderStyle= "solid";
         headCells[i].style.borderWidth= "2px";
         headCells[i].textContent = "Header " + [i+1];
         headCells[i].style.textAlign = "center";
         headCells[i].style.fontStyle = "italic";    
    }

//Creating the regular rows and cells
    var row1 = table.insertRow(1,0);
        row1.setAttribute("class", "row");

        var cell1 = row1.insertCell(0,0);
            cell1.setAttribute("class", "Cells");
            cell1.textContent = "4, 1";
        var cell2 = row1.insertCell(0,0);
            cell2.setAttribute("class", "Cells");
            cell2.textContent = "3, 1";
        var cell3 = row1.insertCell(0,0);
            cell3.setAttribute("class", "Cells");
            cell3.textContent = "2, 1";
        var cell4 = row1.insertCell(0,0);
            cell4.setAttribute("class", "Cells");
            cell4.textContent = "1, 1";

    var row2 = table.insertRow(2,0);
        row2.setAttribute("class", "row");
        var cell5 = row2.insertCell(0,0);
            cell5.setAttribute("class", "Cells");
            cell5.textContent = "4, 2";
        var cell6 = row2.insertCell(0,0);
            cell6.setAttribute("class", "Cells");
            cell6.textContent = "3, 2";
        var cell7 = row2.insertCell(0,0);
            cell7.setAttribute("class", "Cells");
            cell7.textContent = "2, 2";
        var cell8 = row2.insertCell(0,0);
            cell8.setAttribute("class", "Cells");
            cell8.textContent = "1, 2";
            
    var row3 = table.insertRow(3,0);
        row3.setAttribute("class", "row");
        
        var cell9 = row3.insertCell(0,0);
            cell9.setAttribute("class", "Cells");
            cell9.textContent = "4, 3";
        var cell10 = row3.insertCell(0,0);
            cell10.setAttribute("class", "Cells");
            cell10.textContent = "3, 3";
        var cell11 = row3.insertCell(0,0);
            cell11.setAttribute("class", "Cells");
            cell11.textContent = "2, 3";
        var cell12 = row3.insertCell(0,0);
            cell12.setAttribute("class", "Cells");
            cell12.textContent = "1, 3";

   
    var cells = document.getElementsByClassName("Cells");

//class "Cells" returns an array. Looped and styled each cell.
    for (var i = 0; i < cells.length; i++) {
        cells[i].style.width= "100px";
        cells[i].style.height= "100px";
        cells[i].style.borderColor= "black";
        cells[i].style.borderStyle= "solid";
        cells[i].style.borderWidth= "2px";
        this.cells[i];
        cells[i].style.textAlign = "center";
        cells[i].style.backgroundColor = "white";

    }


//BUTTONS CONSTRUCTION
var buttonUP = document.createElement("Button");
    buttonUP.setAttribute("class", "btn");
    buttonUP.setAttribute("id", "up");
    document.body.appendChild(buttonUP);
    buttonUP.style.backgroundColor = "red";
    buttonUP.textContent = "UP";

var buttonDown = document.createElement("Button");
    buttonDown.setAttribute("class", "btn");
    buttonDown.setAttribute("id", "down");
    document.body.appendChild(buttonDown);
    buttonDown.style.backgroundColor = "cyan";
    buttonDown.textContent = "DOWN";


var buttonRight = document.createElement("Button");
    buttonRight.setAttribute("class", "btn");
    buttonRight.setAttribute("id", "right");
    document.body.appendChild(buttonRight);
    buttonRight.style.backgroundColor = "springgreen";
    buttonRight.textContent = "RIGHT";


var buttonLeft = document.createElement("Button");
    buttonLeft.setAttribute("class", "btn");
    buttonLeft.setAttribute("id", "left");
    document.body.appendChild(buttonLeft);
    buttonLeft.style.backgroundColor = "salmon";
    buttonLeft.textContent = "LEFT";

var buttonMark = document.createElement("Button");
    buttonMark.setAttribute("class", "btn");
    buttonMark.setAttribute("id", "mark");
    document.body.appendChild(buttonMark);
    buttonMark.style.backgroundColor = "yellow";
    buttonMark.textContent = "Mark Cell";


//STYLING BUTTON
var buttons = document.getElementsByClassName("btn");
    for (var i = 0; i < buttons.length; i++) {
       
        buttons[i].style.marginTop = "20px";
        buttons[i].style.width = "80px";
        buttons[i].style.height = "30px";
        buttons[i].style.borderRadius = "30px";
        buttons[i].style.fontWeight = "700";
    }

//EVENT LISTENERS & LOGIC FOR BUTTONS
var pos = 0;
cells[0].style.borderWidth = "4px";


//DOWN BUTTON LOGIC
var right = document.getElementById("right").addEventListener("click", function () {
    console.log(pos);
    if (pos === 3 || pos === 7 || pos === 11) {
        var change = cells[pos - 1].style.borderWidth = "2px";
        var change = cells[pos].style.borderWidth = "4px";
        return;
    }
    else {
        pos = pos + 1;
        var change = cells[pos - 1].style.borderWidth = "2px";
        var change = cells[pos].style.borderWidth = "4px";
    }
});


//LEFT BUTTON LOGIC
var left = document.getElementById("left").addEventListener("click", function () {
    if (pos === 0 || pos === 4 || pos === 8) {
        var change = cells[pos].style.borderWidth = "4px";
        //var change = cells[pos+1].style.borderWidth = "4px";
        console.log(pos + "lol");
        return;
    }
    if (pos <= 0) {
        return;
        console.log("HERERERERERR");
    }
    else {
        console.log("else: " + pos);
        pos = pos - 1;
        console.log("else: " + pos);
        var change = cells[pos + 1].style.borderWidth = "2px";
        var change = cells[pos].style.borderWidth = "4px";
        console.log("else: " + pos);
    }
});

//UP BUTTON LOGIC
var up = document.getElementById("up").addEventListener("click", function () {
    console.log("here " + pos);
    if (pos === 0 || pos === 1 || pos === 2 || pos === 3) {
        var change = cells[pos + 4].style.borderWidth = "2px";
        var change = cells[pos].style.borderWidth = "4px";
        return;
    }
    if (pos <= 0) {
        return;
    }
    else {
        pos = pos - 4;
        var change = cells[pos + 4].style.borderWidth = "2px";
        var change = cells[pos].style.borderWidth = "4px";
    }
});


//DOWN BUTTON CONTROL LOGIC
var down = document.getElementById("down").addEventListener("click", function () {
    console.log("here " + pos);
    if (pos === 8 || pos === 9 || pos === 10 || pos === 11) {
        var change = cells[pos - 4].style.borderWidth = "2px";
        var change = cells[pos].style.borderWidth = "4px";
        return;
    }
    if (pos > 8) {
        return;
    }
    else {
        pos = pos + 4;
        var change = cells[pos - 4].style.borderWidth = "2px";
        var change = cells[pos].style.borderWidth = "4px";
    }
});

//MARK BUTTON CONTROL LOGIC
var color = cells[pos].style.backgroundColor;

var mark = document.getElementById("mark").addEventListener("click", function () {
    
    if(cells[pos].style.backgroundColor === "yellow"){
        //change it
        console.log("here");
        color = cells[pos].style.backgroundColor = "white";
    }
    
    else if(cells[pos].style.backgroundColor === "white"){
        //change it
        console.log("here 2");
        cells[pos].style.backgroundColor = "yellow";

    }


});
