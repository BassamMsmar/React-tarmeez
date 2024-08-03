function Forloop() {
    const tasks = [
      { id: 1, name: "react" },
      { id: 2, name: "angular" },
      { id: 3, name: "vue" },
      { id: 4, name: "svelte" },
      { id: 5, name: "ember" },
    ];

    const listTasks = tasks.map((task) => (<li key={task.id}>{task.name}</li>));



    return(
        <div>
            <ul>
                <h1> {listTasks} </h1>
            </ul>
        </div>
    )
}

export default Forloop;