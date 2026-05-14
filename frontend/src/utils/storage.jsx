export function getFromStorage(key, defaultValue = []) {
const data = localStorage.getItem(key);
return data ? JSON.parse(data) : defaultValue;
}


export function saveToStorage(key, value) {
localStorage.setItem(key, JSON.stringify(value));
}