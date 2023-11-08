// logic for your shopping modal goes here

// Beginning of Create toast element connected to shop.html
function addItemToast(message) {
    // Get the toast container
    const toastContainer = document.getElementById('toastContainer');

    // Create toast element
    const toast = document.createElement('div');
    toast.className = "toast hide";
    toast.setAttribute("role", "alert");
    toast.setAttribute("aria-live", "assertive");
    toast.setAttribute("aria-atomic", "true");

    // Create toast header
    const toastHeader = document.createElement('div');
    toastHeader.className = "toast-header";

    const strong = document.createElement('strong');
    strong.className = "me-auto";
    strong.textContent = "Notification";

    const btnClose = document.createElement('button');
    btnClose.type = "button";
    btnClose.className = "btn-close";
    btnClose.setAttribute("data-bs-dismiss", "toast");
    btnClose.setAttribute("aria-label", "Close");

    // Append elements to toast header
    toastHeader.appendChild(strong);
    toastHeader.appendChild(btnClose);

    // Create toast body
    const toastBody = document.createElement('div');
    toastBody.className = "toast-body";
    toastBody.textContent = message;

    // Append header and body to toast
    toast.appendChild(toastHeader);
    toast.appendChild(toastBody);

    // Append toast to the container
    toastContainer.appendChild(toast);

    // Initialize and show the toast using Bootstrap's JS API
    var bsToast = new bootstrap.Toast(toast);
    bsToast.show();
}

// End of Create toast element connected to shop.html