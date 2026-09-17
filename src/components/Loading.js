import Spinner from 'react-bootstrap/Spinner';

function Loading() {
  return (
    <div className="text-center py-5">
      <Spinner animation="border" variant="primary" />

      <p className="mt-3 text-muted">
        Loading products...
      </p>
    </div>
  );
}

export default Loading;