# Hello world

In this example I'm going to remove the "Hello world" from index.html and render it using React.

First I'm going to make the index.html ready for React. 
I replace the "h1" with a div with id root. This is the hook for React application.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hello world</title>
</head>

<body>
    <div id="root" />
    <script src="bundle.js" type="text/javascript"></script>
</body>

</html>
```

In the index.js I'm going to import react and react-dom.
I create a react "h1" element with "Hello world!" as contents.
Then I'm going to use react-dom to render the react element in the root div of my index.html.


```js
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    React.createElement('h1', null, 'Hello world!'),
    document.getElementById('root')
);
```

And that is all I need for a "Hello world" React application.