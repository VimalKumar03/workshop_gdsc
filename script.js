

function themetoggle() {

    let curr_stylesheeet = document.getElementById("dark");
    if(curr_stylesheeet.href.match("style.css")){
        curr_stylesheeet.href="lightmode.css";
    }
    else{
        curr_stylesheeet.href="style.css"
    }

}
