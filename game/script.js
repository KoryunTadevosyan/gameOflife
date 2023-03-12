function matrixGenerator(matrixSize, grass, grassEater, predator, predatorEater, hunter) {
    var matrix = []

    for (let i = 0; i < matrixSize; i++) {
        matrix.push([])
        for (let j = 0; j < matrixSize; j++) {
            matrix[i].push(0)

        }
    }


    for (let i = 0; i < grass; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 1

    }

    for (let i = 0; i < grassEater; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 2

    }



    for (let i = 0; i < predator; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 3


    }
    for (let i = 0; i < predatorEater; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 4


    }
    for (let i = 0; i < hunter; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 5


    }




    return matrix
}

var matrix = matrixGenerator(30, 40, 15, 5, 6, 8)
var side = 25
//

var grassArr = []
var grassEaterArr = []
var predatorArr = []
var predatorEaterArr = []
var hunterArr = []

function setup() {
    frameRate(15)
    createCanvas(matrix[0].length * side, matrix.length * side)

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                var grEat = new GrassEater(x, y)
                grassEaterArr.push(grEat)
            } else if (matrix[y][x] == 3) {
                var pred = new Predator(x, y)
                predatorArr.push(pred)
            } else if (matrix[y][x] == 4) {
                var predEat = new PredatorEater(x, y)
                predatorEaterArr.push(predEat)
            } else if (matrix[y][x] == 5) {
                var hun = new Hunter(x, y)
                hunterArr.push(hun)
            }
        }
    }

}



function draw() {

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            var tbot = side - side * 0.1
            textSize(tbot)
            if (matrix[y][x] == 1) {
                fill("green")
                rect(x * side, y * side, side, side)
                text("🌿", x * side, y * side + tbot)
            } else if (matrix[y][x] == 2) {
                fill("yellow")
                rect(x * side, y * side, side, side)
                text("🐄", x * side, y * side + tbot)
            } else if (matrix[y][x] == 3) {
                fill("red")
                rect(x * side, y * side, side, side)
                text("🦛", x * side, y * side + tbot)
            }
            else if (matrix[y][x] == 4) {
                fill("blue")
                rect(x * side, y * side, side, side)
                text("🐅", x * side, y * side + tbot)
            } else if (matrix[y][x] == 5) {
                fill("black")
                rect(x * side, y * side, side, side)
                text("🧍", x * side, y * side + tbot)
            }
            else if (matrix[y][x] == 0) {
                fill("gray")
                rect(x * side, y * side, side, side)
            }

        }

    }

    for (let i in grassArr) {
        grassArr[i].mul()
    }

    for (let i in grassEaterArr) {
        grassEaterArr[i].eat()

    }



    for (let i in predatorArr) {
        predatorArr[i].eat()
    }

    for (let i in predatorEaterArr) {
        predatorEaterArr[i].eat()
    }

    for (let i in hunterArr) {
        hunterArr[i].eat()
    }
}