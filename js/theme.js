function start() {
    
    setTimeout(function() {
        theme = localStorage.getItem("theme")
        if (theme != "dark") {
            document.body.id = "light"
        }
        else {
            localStorage.setItem("theme","dark")
            document.body.id = "dark"
        }
    },10)
}

function changeTheme(theme) {
    localStorage.setItem("theme",theme)
    document.body.id = theme
}

start()