/**
 * Utility functions for working with localStorage
 */

/**
 * Save data to localStorage
 * @param {string} key The key to store the data under
 * @param {T} data The data to store
 */
export const saveToLocalStorage = <T>(key: string, data: T): void => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error(`Error saving to localStorage (key: ${key}):`, error);
    }
  };
  
  /**
   * Load data from localStorage
   * @param {string} key - The key to retrieve data from
   * @param {T} defaultValue - The default value to return if no data is found
   * @returns The stored data or the default value
   */
  export const loadFromLocalStorage = <T>(key: string, defaultValue: T): T => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(`Error loading from localStorage (key: ${key}):`, error);
      return defaultValue;
    }
  };
  
  /**
   * Remove data from localStorage
   * @param {string} key - The key to remove
   */
  export const removeFromLocalStorage = (key: string): void => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing from localStorage (key: ${key}):`, error);
    }
  };
  
  /**
   * Clear all data from localStorages
   */
  export const clearLocalStorage = (): void => {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  }; 