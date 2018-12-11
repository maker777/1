var tiles = [];
var freeCell = {y: 3, x: 3};
var shufflad = false;

function createCellNull () {
    var cell = document.createElement("div");
    cell.classList.add("field__cell", "field__cell--null");
    return cell;
}