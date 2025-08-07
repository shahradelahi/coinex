/**
 * Delays the execution for a specified amount of time.
 * @param ms - The number of milliseconds to delay.
 * @returns {Promise<void>} A promise that resolves after the specified delay.
 * @example
 * await delay(1000); // Waits for 1 second
 */
export async function delay(ms: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
