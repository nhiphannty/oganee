export function getLocalStorage<T>(key: string, defaultValue: T): T {
    let value = window.localStorage.getItem(key);
    if (value) {
        let parsedValue: T = JSON.parse(value);
        return parsedValue;
    } else return defaultValue;
}

export function setLocalStorage<T>(key: string, value: T) {
    let stringifyValue = JSON.stringify(value);
    window.localStorage.setItem(key, stringifyValue);
}
