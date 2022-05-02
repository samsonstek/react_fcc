function MainContent () {
    return <h1>This is react</h1>
}

ReactDOM.render(
    <div>
    <ul>
        <li>Thing 1</li>
        <li>Thing 2</li>
    </ul>
    <MainContent />
    </div>,
    document.getElementById("root"))