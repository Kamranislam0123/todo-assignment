
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div>
      <TaskList />
      <TaskForm />
     </div>
    </main>
  );
}
