import PropTypes from "prop-types";
import { Button } from "./Button";

function ErrorSuspense({ error, resetErrorBoundary }) {
  console.log(error);
  return (
    <div>
      <h1>sam</h1>
      <Button size="medium" type="primary" onClick={resetErrorBoundary}>
        Try again
      </Button>
    </div>
  );
}
ErrorSuspense.propTypes = {
  error: PropTypes,
  resetErrorBoundary: PropTypes,
};
export default ErrorSuspense;
