export const appendScript = (scriptToAppend) => {
    const scriptElement = document.createElement('script');
    const allScripts = document.querySelectorAll('script');
    allScripts.forEach(script => {
        if (script.src === scriptToAppend) {
            return;
        }
    })
    scriptElement.src = scriptToAppend;
    scriptElement.async = true;
    scriptElement.defer = true;
    document.body.appendChild(scriptElement);
}

export const disAppendScript = (scirptToDisAppend) => {
    const src = document.querySelector(`script[src="${scirptToDisAppend}"]`);
    if (src != null) {
        src.remove();

    }
}