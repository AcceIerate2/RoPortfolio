const ScriptButton = document.getElementById("scriptVideo")
const BuildButton = document.getElementById("buildVideo")
const select_btn = document.getElementById("select_btn")

function ButtonClicked(Page) {
    if (Page == `Scripting`) {
        console.log("Opening My Scripting Portfolio. Please Wait.")
        window.open("https://acceierate2.github.io/RoPortfolio/ScriptingPortfolio.html", "_blank")
    } else if (Page == `builds`) {
        console.log("Opening My Building Portfolio. Please Wait.")
        window.open("https://acceierate2.github.io/RoPortfolio/BuildsPortfolio.html", "_blank")
    } else if (Page == `ShowUi`) {
        document.getElementById("skillsframe").style.visibility = "visible"
    }
}

ScriptButton.onclick = function(MouseEvent) {ButtonClicked(`Scripting`)}
BuildButton.onclick = function(MouseEvent) {ButtonClicked(`builds`)}
select_btn.onclick = function(MouseEvent) {ButtonClicked(`ShowUi`)}