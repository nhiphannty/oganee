export function getLocalStorage<T>(key: string, defaultValue: T): T {
    let value = localStorage.getItem(key);
    return value ? JSON.parse(value) : defaultValue;
}

export function setLocalStorage<T>(key: string, value: T) {
    let stringifyValue = JSON.stringify(value);
    localStorage.setItem(key, stringifyValue);
}
