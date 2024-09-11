export function showNotification(message, position = 'bottom-center', type = 'info', duration = 3) {
    // Create a style element for CSS
    const style = document.createElement('style');
    style.innerHTML = `
        .notification {
            position: fixed;
            z-index: 9999;
            padding: 15px 30px;
            border-radius: 8px;
            font-size: 16px;
            color: white;
            opacity: 0;
            transform: translateY(-100%);
            transition: opacity 0.5s, transform 0.5s;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .notification.show {
            opacity: 1;
            transform: translateY(0);
        }

        /* Notification types */
        .notification.info { background-color: #2196F3; } /* Bluish */
        .notification.success { background-color: #4CAF50; } /* Green */
        .notification.failure { background-color: #F44336; } /* Redish */
        .notification.alert { background-color: #FFC107; } /* Amber */

        /* Positioning */
        .top-right { top: 20px; right: 20px; }
        .top-left { top: 20px; left: 20px; }
        .bottom-right { bottom: 20px; right: 20px; }
        .bottom-left { bottom: 20px; left: 20px; }
        .bottom-center { bottom: 20px; left: 50%; transform: translateX(-50%); }
        .top-center { top: 20px; left: 50%; transform: translateX(-50%); }
    `;
    document.head.appendChild(style);

    // Create the notification div element
    const notification = document.createElement('div');
    notification.classList.add('notification', type, position);
    notification.innerText = message;

    // Add the notification to the body
    document.body.appendChild(notification);

    // Trigger the show animation after a brief delay to ensure transition works
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    // Remove the notification after the specified duration
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);  // Delay to allow the hide animation to complete
    }, duration * 1000 + 500);
}
