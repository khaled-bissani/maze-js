window.onload = function() {
    var containers = document.getElementsByClassName('boundary');
    var startGame = document.getElementById('start');
    var endGame = document.getElementById('end');
    var outOfBound = document.getElementById('game');
    var status = document.getElementById('status');
    var sum=0

    startGame.onclick = function() {startOnClick();}
    startGame.onmouseover = function() {startOnMouseOver();}

    endGame.onmouseover = function() {endOnMouseOver();}

    for (var i = 0; i < containers.length; i++) {
        containers[i].addEventListener('mouseover', function() {gameOver()});
    }

    outOfBound.onmouseleave = function () {outOfBoundary();}

    // function startGame() {
        

    // }

    function startOnClick() {
        status.textContent='Game restarted';
        for (var i = 0; i < containers.length; i++) {
            containers[i].style.backgroundColor='#eeeeee';
        }
        sum=0
        
    }

    function startOnMouseOver() {
        
        for (var i = 0; i < containers.length; i++) {
            containers[i].style.backgroundColor='#eeeeee';
        }
        status.textContent='('+sum+' points)';
        
    }

    function endOnMouseOver() {
        sum+=5
        status.textContent='You won ('+sum+' points)';
    
    }

    function gameOver() {
        for (var j = 0; j < i-1; j++) {
            containers[j].classList.add("youlose");
        }
        console.log(j)
        sum-=10
        status.textContent='You lost ('+sum+' points) go back to S';
    }

    function outOfBoundary() {
        status.textContent='You Lost';
    }
    
}
