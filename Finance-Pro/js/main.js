function toggleTheme() {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
    } else {
        localStorage.setItem("theme","light");
    }
}

if(localStorage.getItem("theme")==="dark"){
    document.body.classList.add("dark");
}
function saveHistory(text){

    let history =
    JSON.parse(
        localStorage.getItem("history")
    ) || [];

    history.push(text);

    localStorage.setItem(
        "history",
        JSON.stringify(history)
    );
}
