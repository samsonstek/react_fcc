// function MainContent () {
//     return <h1>This is react</h1>
// }

// let page = (
//     <div>
//         <h1 className="header"> This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
// )

// console.log(page)

// ReactDOM.render( page
//     ,
//     document.getElementById("root"))

let navbar = (
    <nav>
        <h1>Sami's Bistro</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(navbar, document.getElementById("root"))