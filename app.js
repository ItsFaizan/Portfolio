
function CreateTable() {
    let row = document.getElementById("rows").value;
    let col = document.getElementById("cols").value;
  
    var html = "<table border ='1'>";
    for (let r = 0; r < row; r++) {
      html += "<tr>";
      for (let c = 0; c < col; c++) {
        let cellData = prompt("Enter data for cell (" + r + "," + c + "):");
        html += "<td id='cell-" + r + "-" + c + "'>" + cellData + "<span class='delete-icon'>X</span></td>";
      }
      html += "</tr>";
    }
  
    html += "</table>";
    document.getElementById("tablearea").innerHTML = html;
  
    // add event listener to each delete icon
    let icons = document.querySelectorAll(".delete-icon");
    icons.forEach(function(icon) {
      icon.addEventListener("click", function(event) {
        let cell = event.target.parentNode;
        cell.parentNode.removeChild(cell);
      });
    });
  
    // add event listener to each table cell
    let cells = document.querySelectorAll("td");
    cells.forEach(function(cell) {
      cell.addEventListener("mouseover", function() {
        let icon = cell.querySelector(".delete-icon");
        icon.style.display = "inline";
      });
      cell.addEventListener("mouseout", function() {
        let icon = cell.querySelector(".delete-icon");
        icon.style.display = "none";
      });
    });
  }
  