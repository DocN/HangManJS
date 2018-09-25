function button() {
    //repeat for all lettters
    for(let i =0; i < 26; i++) {
        let currentchar = String.fromCharCode('A'.charCodeAt() + i);
        let btn = document.createElement("BUTTON");
        let t = document.createTextNode(currentchar);
        btn.appendChild(t);
        btn.className = "btn btn-primary alphabetbox";
        //grab alphabet frame
        let element = document.getElementById("alphabetFrame");
        //add letter
        element.appendChild(btn);
    }
}