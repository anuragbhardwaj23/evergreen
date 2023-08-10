function copyText() {
    const textToCopy = document.querySelector(".text-to-copy");
    const text = textToCopy.textContent;

    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);

    textArea.select();
    document.execCommand("copy");

    document.body.removeChild(textArea);

    showNotification("Address copied to clipboard");
}

function showNotification(message) {
    const notificationContainer = document.getElementById("notification-container");
    notificationContainer.textContent = message;
    notificationContainer.style.display = "block";

    setTimeout(() => {
        notificationContainer.style.display = "none";
    }, 2000); }
