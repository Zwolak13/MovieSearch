import { getErrorStatus } from '../utils/getErrorStatus';

interface ErrorMessageProps {
  error: unknown;
}

export default function ErrorMessage({ error }: ErrorMessageProps) {
  return (
    <div>
      <h1 className="text-3xl">
        Error {getErrorStatus(error) ?? "unknown"}: {(error as Error).message}
      </h1>
    </div>
  );
}
