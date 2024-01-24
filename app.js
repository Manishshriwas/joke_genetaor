const btn=document.querySelector("but");

document.getElementById("but").onclick = function() {jokeGenrate()};



let arr = ["I invented a new word!", "Hell stop at nothing to avoid them.",
    "Get out of here!” shouts the bartender. “We dont serve your type.Whos there",
"There’s no menu: You get what you deserve.","Because they make up everything."];
 
function random(mn, mx) {
    return Math.random() * (mx - mn) + mn;
}
 
function jokeGenrate() {
    document.getElementById("joke").innerHTML =(arr[(Math.floor(random(1, 7))) - 1]);
}
