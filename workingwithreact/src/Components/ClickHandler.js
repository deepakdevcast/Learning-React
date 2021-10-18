
function ClickHandler() {
    function handler(){
        console.log("clicked")
    }
    return (
        <div>
            <button onClick={handler}>click</button>
        </div>
    )
}

export default ClickHandler
