# show-notify

**show-notify** is a simple and customizable notification toasting library for React (and plain JavaScript) applications. With just a function call, you can display toast notifications in various styles, positions, and types.

## Features

- **Function-based**: No need to render components—just call a function.
- **Flexible Positioning**: Display notifications at the top or bottom, centered or aligned to the sides.
- **Notification Types**: Info, success, failure, and alert toasts.
- **Custom Duration**: Set how long the toast will remain visible.
- **Lightweight**: No dependencies or heavy external packages.

## Installation

To install the package from npm, use:

```bash
npm install show-notify
```

## Basic Usage

In your React application (or plain JavaScript), import the `showNotification` function and use it to display notifications:

### Example in React:

```javascript
import React from 'react';
import { showNotification } from 'show-notify';

function App() {
  const handleClick = () => {
    showNotification('Hello, this is an info toast!', 'bottom-center', 'info', 3);
  };

  return (
    <div>
      <button onClick={handleClick}>Show Toast</button>
    </div>
  );
}

export default App;
```

### Example in Plain JavaScript:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Notification Example</title>
    <script src="show-notify.js"></script>
</head>
<body>
    <button onclick="showNotification('This is a notification!', 'top-right', 'success', 5)">Show Notification</button>
</body>
</html>
```

## Function API

### `showNotification(message, position = 'bottom-center', type = 'info', duration = 3)`

#### Parameters:

- **message (string)**: The text content of the notification.
- **position (string)**: The position on the screen where the toast will appear. Defaults to `'bottom-center'`.
  - Options: `'top-right'`, `'top-left'`, `'bottom-right'`, `'bottom-left'`, `'bottom-center'`, `'top-center'`.
- **type (string)**: The type of notification, which determines its color and appearance. Defaults to `'info'`.
  - Options: `'info'`, `'success'`, `'failure'`, `'alert'`.
- **duration (number)**: Duration in seconds for which the notification will stay visible before disappearing. Defaults to `3` seconds.

#### Example:

```javascript
showNotification('Data saved successfully!', 'top-right', 'success', 4);
```

This displays a **success** toast at the top-right of the screen for 4 seconds.

## Custom Styles

While **show-notify** comes with basic styles for the toast, you can further customize it to match your app’s design. The default CSS classes include:

- `.notification` - Main notification container.
- `.info`, `.success`, `.failure`, `.alert` - Different types of notifications.
- `.top-right`, `.top-left`, `.bottom-right`, `.bottom-left`, `.bottom-center`, `.top-center` - Positioning classes.

### Default Styles:

```css
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

.notification.info { background-color: #2196F3; }
.notification.success { background-color: #4CAF50; }
.notification.failure { background-color: #F44336; }
.notification.alert { background-color: #FFC107; }

/* Positioning */
.top-right { top: 20px; right: 20px; }
.top-left { top: 20px; left: 20px; }
.bottom-right { bottom: 20px; right: 20px; }
.bottom-left { bottom: 20px; left: 20px; }
.bottom-center { bottom: 20px; left: 50%; transform: translateX(-50%); }
.top-center { top: 20px; left: 50%; transform: translateX(-50%); }
```

## Roadmap

- **More Styles**: Additional default styles and themes for notifications.
- **Animations**: Options to add different show/hide animations.
- **Custom Icons**: Ability to add icons inside the notification.
- **Dismiss Button**: An optional close button to dismiss the notification manually.

## Contributing

Feel free to contribute to the project by submitting issues or creating pull requests. We are open to new features, bug fixes, and improvements.

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a pull request.

## License

This project is licensed under the ISC License. See the [LICENSE](./LICENSE) file for details.
