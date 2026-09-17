import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function ErrorMessage({ message, onRetry }) {
  return (
    <div className="text-center py-5">
      <Alert variant="danger">
        {message}
      </Alert>

      <Button
        variant="primary"
        onClick={onRetry}
      >
        Try Again
      </Button>
    </div>
  );
}

export default ErrorMessage;