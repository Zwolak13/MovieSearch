export interface ExtendedError extends Error {
  status?: number;
  response?: { status?: number };
}

export function getErrorStatus(error: unknown): number | undefined {
  if (typeof error === "object" && error !== null) {
    const e = error as ExtendedError;
    if (e.status) return e.status;
    if (e.response?.status) return e.response.status;
  }
  return undefined;
}