const btnOptions = document.querySelectorAll('.btn-option')
const restartBtn = document.querySelector('#restart')
const popupRef = document.querySelector('.popup')
const message = document.querySelector('#message')
const newGameBtn = document.querySelector('#new-game')

// winning pattern array
let winningPattern = [
    [0,1,2],
    [0,3,6],
    [2,5,8],
    [6,7,8],
    [3,4,5],
    [1,4,7],
    [0,4,8],
    [2,4,6]
]

// Player xTurn plays firts
let xTurn = true
let count = 0

// Disable all buttons 
const disableButtons = () => {
    btnOptions.forEach((element) => (element.disabled = true))
    // Enable popUp
    popupRef.classList.remove('hide')
}


// Enable all buttons (for New Game and Restart)
const enableButtons = () => {
    btnOptions.forEach((element) => {
        element.innerText = ''
        element.disabled = false
    })
    popupRef.classList.add('hide')
}

// This function is executed when  a player wins
const winFunction = (letter) => {
    disableButtons();
    if (letter == "X") {
      message.innerHTML = "&#x1F389; <br> 'X' Wins";
    } else {
      message.innerHTML = "&#x1F389; <br> 'O' Wins";
    }
  };

// Function for draw
const drawFunction = () => {
    disableButtons();
    message.innerHTML = "&#x1F60E; <br> It's a Draw";
  };

// New Game
newGameBtn.addEventListener('click', () => {
    count = 0
    enableButtons()
})
// Restart Game
restartBtn.addEventListener('click', () => {
    count = 0
    enableButtons()
})


// win Logic 
const winChecker = () => {
    // loop through all win pattern
    for (let item of winningPattern) {
        let [element1, element2, element3] = [
            btnOptions[item[0]].innerText,
            btnOptions[item[1]].innerText,
            btnOptions[item[2]].innerText
        ]
        //Check if elements are filled
        //if 3 empty elements are same and would give win
        if (element1 != '' && (element2 != '') && (element3 != '')) {
            if (element1 == element2 && element2 == element3) {
                // If all 3 buttons  have same values then pass the  value to WinFunction  
                winFunction(element1)
            }
        }
    }
}

// Displau X/O on click
btnOptions.forEach((Element) => {
    Element.addEventListener('click', () => {
        if (xTurn) {  // ou seja, se não tiver esse code base ele marca todos
            xTurn = false
            // Dsipla X
            Element.innerText = 'X'
            Element.disabled = true
        }
        else {
            xTurn = true
            Element.innerText = 'O'
            Element.disabled = true
        }
        count += 1
        if(count === 9) {
            drawFunction()
            // Draw since since there are a total of 9 boxed
        }
        // Check for the winner on every click
        winChecker()
    })
})

window.onload = enableButtons