function Todo(props){
    return(
        <>
            <h2>My To Do List</h2>
            <ul>
                <li>Learn React{props.task}</li>
                <li>Build a React App</li>
                <li>Deploy the App</li>
            </ul>
        </>
    )
}
export default Todo;
function Result(props){
    return(
        <>
            <h2>Result :{props.point}</h2>
        </>
    )
}
export {Result};