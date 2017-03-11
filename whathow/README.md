# What?

React is a javascript library to create composable user interfaces. It is used to develop user interfaces taht display data that changes over time.

The aim of React is to be simple and declarative, you express what you want to see based on the data at a point in time.

# How?

Because redrawing the complete DOM every time something changes is very expensive, React uses a virtual DOM.

This virtual DOM is a fast, in-memory and lightweight representation of the actual DOM.

Using a diff algorithm React compares the virtual DOM of the previous state to the virtual DOM of the current state. The difference is what actually needs to be updated in the real DOM.