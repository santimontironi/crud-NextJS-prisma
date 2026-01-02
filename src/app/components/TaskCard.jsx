const TaskCard = ({task}) => {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <span>{task.createdAt}</span>
    </div>
  )
}

export default TaskCard