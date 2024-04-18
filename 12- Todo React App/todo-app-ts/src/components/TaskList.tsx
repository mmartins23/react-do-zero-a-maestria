// Interfaces
import { ITask } from "../interfaces/Task"

// CSS
import styles from "./TaskList.module.css"

// Icons BS
import { BsPencil, BsTrash } from "react-icons/bs";


interface Props {
    taskList: ITask[];
    handleDelete(id: number): void;
    handleEdit(task: ITask): void;
}

const TaskList = ({ taskList, handleDelete, handleEdit }: Props) => {
    return (
        <>
            {taskList.length > 0 ? (
                taskList.map((task) => (
                    <div key={task.id} className={styles.task}>
                        <div className={styles.details}>
                            <h4>{task.title}</h4>
                            <p>Dificuldade: {task.difficulty}</p>
                        </div>

                        <div className={styles.actions}>
                            <i onClick={() => handleEdit(task)}><BsPencil /></i>
                            <i onClick={() => handleDelete(task.id)}><BsTrash /></i>
                        </div>
                    </div>
                ))
            ) : (
                <p>Não há tarefas cadastradas!</p>
            )}
        </>
    )
}

export default TaskList