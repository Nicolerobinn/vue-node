export const setLocalStore = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
};

export const getLocalStore = (name) => {
    if (!name) return;
    return window.localStorage.getItem(name);
}

export const removeLocalStore = (name) => {
    if (!name) return;
    return window.localStorage.removeItem(name);
}