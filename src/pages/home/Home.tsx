import PageLayout from "components/PageLayout";
import AddTaskForm from "components/AddTaskForm";

function Home() {
  return (
    <PageLayout title="Home">
      <AddTaskForm className="add-task-form" />
      Home page detail
    </PageLayout>
  );
}

export default Home;