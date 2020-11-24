// Expand Nav Bar
function expand_nav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function stop_flip(x) {
    var l = document.getElementById("doodle_grid_large");
    if (y.matches) {
        // Use simple image
        l.innerHTML = "<img src='img/doodles/Doodle4.jpg' , alt='Doodle 2'>"
    } else {
        // Use flip card
        l.innerHTML = `
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src='img/doodles/Doodle4.jpg' , alt='Doodle 1'>
                    </div>
                    <div class="flip-card-back">
                        <div class='flip-card-text'>
                            <h2>Here are my casual doodles :)</h2>
                            <p>see more on instagram:</p>
                            <p>wiiilla</p>
                        </div>
                    </div>
                </div>
        `
    }
}

var y = window.matchMedia("(max-width: 768px)")
stop_flip(y) // Call listener function at run time
y.addListener(stop_flip) // Attach listener function on state changes