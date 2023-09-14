/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable import/prefer-default-export */

export const getStorageData = <T>(keyName: string): T => {
  const savedItem = localStorage.getItem(keyName);
  const parsedItem = savedItem ? JSON.parse(savedItem) : null;
  return parsedItem as T;
};
