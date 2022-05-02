// function MainContent () {
//     return <h1>This is react</h1>
// }

// ReactDOM.render(
//     <div>
//     <ul>
//         <li>Thing 1</li>
//         <li>Thing 2</li>
//     </ul>
//     <MainContent />
//     </div>,
//     document.getElementById("root"))

let h1 = document.createElement("h1")
h1.textContent = "This is an imperative way to program"
h1.className = "header"
document.getElementById("root").append(h1)