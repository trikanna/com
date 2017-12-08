---
path: '/blog/react-introduction-to-properties'
title: 'Set Properties on React Components'
image: 'https://thumbs.dreamstime.com/b/laptop-sunglasses-96113897.jpg'
order: '4'
---

jsx

```jsx
class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

ReactDOM.render(<HelloMessage name="John" />, document.getElementById('container');
```

css

```css
.santiago-camelo {
  display: none;
}
```

html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Simple HTML document</title>
</head>
<body>
  <h1>Hello World!</h1>
</body>
</html>
```
