# Star Rating Component Documentation

The `StarRating` component is a customizable React component that allows users to rate items using stars. It supports features like half-star ratings, custom colors, animations, and more.

## Installation

```bash
npm install star-meter
```

Make sure to include the CSS file for animations:

```javascript
import "./StarRating.css";
```

## Basic Usage

```jsx
import StarRating from "star-rating-component";

function App() {
  const handleRating = (rating) => {
    console.log(`User rated: ${rating}`);
  };

  return <StarRating onSetRating={handleRating} />;
}
```

## Props

| Prop             | Type     | Default   | Description                                                |
| ---------------- | -------- | --------- | ---------------------------------------------------------- |
| `maxRating`      | number   | 5         | Maximum number of stars to display                         |
| `color`          | string   | "#fcc419" | Color of the stars                                         |
| `textcolor`      | string   | "#0d0d0d" | Color of the rating text                                   |
| `size`           | number   | 48        | Size of stars in pixels                                    |
| `messages`       | array    | []        | Array of messages to display for each rating               |
| `className`      | string   | ""        | Additional CSS class names                                 |
| `defaultRating`  | number   | 0         | Initial rating value                                       |
| `onSetRating`    | function | () => {}  | Callback function when rating changes                      |
| `allowHalfStars` | boolean  | true      | Enable half-star ratings                                   |
| `animation`      | string   | "none"    | Animation style: "scale", "rotate", "bounce", or "none"    |
| `allowReset`     | boolean  | true      | Allow resetting the rating by clicking the same star again |

## Features

### Half-Star Ratings

The component supports half-star ratings by default. Users can hover over the left or right side of a star to select a half or full star rating.

```jsx
<StarRating allowHalfStars={true} />
```

To disable half-star ratings:

```jsx
<StarRating allowHalfStars={false} />
```

### Custom Colors

You can customize the color of the stars and the rating text:

```jsx
<StarRating color="#ff6b6b" textcolor="#339af0" />
```

### Animations

The component supports several animation styles:

```jsx
<StarRating animation="scale" /> // Options: "scale", "rotate", "bounce", "none"
```

Make sure you've imported the CSS file for animations to work properly.

### Custom Rating Messages

You can display custom messages for each rating value:

```jsx
<StarRating
  maxRating={5}
  messages={["Terrible", "Bad", "Okay", "Good", "Excellent"]}
/>
```

The message corresponding to the current rating will be displayed next to the stars.

### Reset Functionality

Users can reset the rating by clicking on the same star again:

```jsx
<StarRating allowReset={true} />
```

To disable this feature:

```jsx
<StarRating allowReset={false} />
```

## Event Handling

The component provides a callback function that is triggered when the rating changes:

```jsx
const handleRating = (value) => {
  console.log(`New rating: ${value}`);
  // Perform actions based on the new rating
};

<StarRating onSetRating={handleRating} />;
```

## Accessibility

The component is built with accessibility in mind:

- Stars are keyboard-navigable using Tab and can be activated with Enter or Space
- Proper role attributes are applied
- Interactive elements have appropriate tabIndex values

## CSS Customization

You can further customize the component with CSS by targeting the provided class names:

```css
/* Example custom styling */
.star {
  margin: 0 2px;
}

.star.scale:hover {
  transform: scale(1.2);
}

.star.rotate:hover {
  transform: rotate(15deg);
}

.star.bounce:hover {
  animation: bounceEffect 0.3s ease;
}

@keyframes bounceEffect {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
```

## Example

```jsx
import React, { useState } from "react";
import StarRating from "star-rating-component";

function MovieRating() {
  const [userRating, setUserRating] = useState(0);

  return (
    <div className="movie-rating">
      <h3>Rate this movie:</h3>
      <StarRating
        maxRating={5}
        size={32}
        color="#ffd700"
        defaultRating={userRating}
        onSetRating={setUserRating}
        messages={["Poor", "Fair", "Good", "Very good", "Excellent"]}
        animation="scale"
      />
      {userRating > 0 && <p>You rated this movie: {userRating} stars</p>}
    </div>
  );
}
```

## Internal Structure

The component consists of two main parts:

1. The `StarRating` container component that manages state and handles events
2. The `Star` component that renders individual stars

## Browser Support

The component should work in all modern browsers that support React and SVG.

## License

MIT
