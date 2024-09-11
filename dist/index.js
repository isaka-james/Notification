'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function showNotification(message) {
  var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'bottom-center';
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'info';
  var duration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 3;
  // Create a style element for CSS
  var style = document.createElement('style');
  style.innerHTML = "\n        .notification {\n            position: fixed;\n            z-index: 9999;\n            padding: 15px 30px;\n            border-radius: 8px;\n            font-size: 16px;\n            color: white;\n            opacity: 0;\n            transform: translateY(-100%);\n            transition: opacity 0.5s, transform 0.5s;\n            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n        }\n\n        .notification.show {\n            opacity: 1;\n            transform: translateY(0);\n        }\n\n        /* Notification types */\n        .notification.info { background-color: #2196F3; } /* Bluish */\n        .notification.success { background-color: #4CAF50; } /* Green */\n        .notification.failure { background-color: #F44336; } /* Redish */\n        .notification.alert { background-color: #FFC107; } /* Amber */\n\n        /* Positioning */\n        .top-right { top: 20px; right: 20px; }\n        .top-left { top: 20px; left: 20px; }\n        .bottom-right { bottom: 20px; right: 20px; }\n        .bottom-left { bottom: 20px; left: 20px; }\n        .bottom-center { bottom: 20px; left: 50%; transform: translateX(-50%); }\n        .top-center { top: 20px; left: 50%; transform: translateX(-50%); }\n    ";
  document.head.appendChild(style);

  // Create the notification div element
  var notification = document.createElement('div');
  notification.classList.add('notification', type, position);
  notification.innerText = message;

  // Add the notification to the body
  document.body.appendChild(notification);

  // Trigger the show animation after a brief delay to ensure transition works
  setTimeout(function () {
    notification.classList.add('show');
  }, 100);

  // Remove the notification after the specified duration
  setTimeout(function () {
    notification.classList.remove('show');
    setTimeout(function () {
      document.body.removeChild(notification);
    }, 500); // Delay to allow the hide animation to complete
  }, duration * 1000 + 500);
}

exports.showNotification = showNotification;
