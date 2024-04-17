type Props = {
  btnText: string;
}

const TaskForm = ({btnText}: Props) => {
  return (
    <form>
      <div>
        <label htmlFor="title">Título:</label>
        <input type="text" name="title" placeholder="Titulo da tarefa" />
      </div>

      <div>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input type="text" name="difficulty" placeholder="Dificuldade da tarefa" />
      </div>

      <button value={btnText}>{btnText}</button>
    </form>
  )
}

export default TaskForm