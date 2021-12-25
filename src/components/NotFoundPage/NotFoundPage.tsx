import { useHistory } from "react-router-dom";
import PageLayout from "components/PageLayout";

function NotFoundPage() {
  const history = useHistory();

  const goBack = () => history.push("/");

  return (
    <PageLayout title="Not Found">
        <div>
          <h6>
            Page Not found!
          </h6>
          <button
            onClick={goBack}
          >
            Go Back
          </button>
        </div>
    </PageLayout>
  );
}

export default NotFoundPage;
