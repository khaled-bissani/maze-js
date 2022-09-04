window.onload = function() {
    start();
    end();
    border();
    
    
}


function start() {
    var containers = document.getElementsByClassName('boundary');
    var start = document.getElementById('start');
    var status = document.getElementById('status');
    start.onclick = function() {
        status.textContent='Game restarted';
        for (var i = 0; i < containers.length; i++) {
            containers[i].style.backgroundColor='#eeeeee';
        }
        sum=0
    }
    start.onmouseover = function () {
        for (var i = 0; i < containers.length; i++) {
            containers[i].style.backgroundColor='#eeeeee';
        }
        status.textContent='('+sum+' points)';
    }
}

function end() {
    var end = document.getElementById('end');
    var status = document.getElementById('status');
    sum=0
    end.onmouseover = function() {
        sum+=5
        status.textContent='You won ('+sum+' points)';

    }
}

function border() {
    var containers = document.getElementsByClassName('boundary');
    var status = document.getElementById('status');
    for (var i = 0; i < containers.length; i++) {
        containers[i].addEventListener('mouseover', function(){
            for (var j = 0; j < i-1; j++) {
                containers[j].style.backgroundColor="red";
            }
            sum-=10
            status.textContent='You lost ('+sum+' points) go back to S';
        });
    }

}
