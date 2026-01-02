"use client"

import { useContext, useEffect } from "react"
import { TaskContext } from "@/context/TaskContext";
import TaskCard from "@/app/components/TaskCard";
import { useParams } from "next/navigation";

const Task = () => {

  const params = useParams();

  const { id } = params

  const { taskById, task } = useContext(TaskContext);

  useEffect(() => {
    taskById(id);
  }, [id])

  return (
    <section>
      {task && (<TaskCard task={task} />)}
    </section>
  )
}

export default Task