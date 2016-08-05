var map = [];
var guess, noOfAttempts = 0;
var target = {
    x: getRandomNumber(5),
    y: getRandomNumber(5)
};
var currentLocation = {
    x1: 0,
    y1: 0
};

generateMap();

console.log('Treasure at x: ' + target.x + ', y: ' + target.y);
map[target.x][target.y] = 'Treasure here!!';

while (currentLocation.x1 !== target.x || currentLocation.y1 !== target.y) {
    // Get a guess from the user
    var guess = prompt('Please select\n 0: UP\n\ 1: Right\n\ 2: Down\n\ 3: Left\n\ -1: Exit');
    noOfAttempts++;
    updateMovement(guess);
}
alert('Congratulations!!! You found the treasure in ' + noOfAttempts + ' attempts');

function generateMap() {
    for (var i = 0; i < 5; i++) {
        map[i] = new Array(5);
    }
}
function getRandomNumber(number) {
    return Math.floor(Math.random() * number);
}

function moveUpSelected() {
    currentLocation.x1--;
    updateMap(currentLocation.x1, currentLocation.y1);
}

function moveRightSelected() {
    currentLocation.y1++;
    updateMap(currentLocation.x1, currentLocation.y1);
}

function moveDownSelected() {
    currentLocation.x1++;
    updateMap(currentLocation.x1, currentLocation.y1);
}

function moveLeftSelected() {
    currentLocation.y1--;
    updateMap(currentLocation.x1, currentLocation.y1);
}

function updateMovement(guess) {
    switch (guess) {
        case '0':
            moveUpSelected();
            break;
        case '1':
            moveRightSelected();
            break;
        case '2':
            moveDownSelected();
            break;
        case '3':
            moveLeftSelected();
            break;
        case '-1':
            exit(1);
            break;
        default:
    }
}

function updateMap(xPos, yPos) {
    console.log('Current location: ' + currentLocation.x1 + ', ' + currentLocation.y1);
    var map = document.getElementById('map'),
            rows = map.rows, rowcount = rows.length, r,
            cells, cellcount, c, cell;
    for (r = 0; r < rowcount; r++) {
        cells = rows[r].cells;
        cellcount = cells.length;
        for (c = 0; c < cellcount; c++) {
            cell = cells[c];
            if (r === xPos && c === yPos) {
                map.rows[r].cells[c].innerHTML = '*';
            }
        }
    }
}


