export function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number
): (...funcArgs: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null;

  return function (...args: Parameters<T>): void {
    const later = () => {
      clearTimeout(timeout!);
      func(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}
