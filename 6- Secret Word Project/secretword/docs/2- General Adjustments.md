# General Adjustments

These CSS snippets are used to style elements in a React application. Let's break down each part:

1. **App.css**:
   ```css
   .App {
     display: flex;
     justify-content: center;
     align-items: center;
     text-align: center;
   }
   ```

   - This CSS rule targets the elements with the class name `.App`.
   - `display: flex;`: This property turns the element into a flex container, allowing you to use flexbox layout properties like `justify-content` and `align-items`.
   - `justify-content: center;`: This property horizontally centers the child elements within the flex container.
   - `align-items: center;`: This property vertically centers the child elements within the flex container.
   - `text-align: center;`: This property centers the text content of the element horizontally.

2. **html, body**:
   ```css
   html, body {
     height: 100%;
   }
   ```

   - This CSS rule targets the `html` and `body` elements.
   - `height: 100%;`: This property sets the height of the `html` and `body` elements to 100% of the viewport height. This ensures that the entire viewport is covered by these elements.

3. **index.css**:
   ```css
   body {
     font-family: Helvetica;
     margin: 0;
     padding: 0;
     background: linear-gradient(180deg, rgba(9, 35, 175, 1) 0%, rgba(0,0,0,1) 100%);
     color: #fff;
   }
   ```

   - This CSS rule targets the `body` element.
   - `font-family: Helvetica;`: This property sets the font family of the text within the `body` element to Helvetica.
   - `margin: 0; padding: 0;`: This removes any default margin and padding from the `body` element, ensuring consistent rendering across different browsers.
   - `background`: This property sets the background of the `body` element to a linear gradient. The gradient starts from the top with the color `rgba(9, 35, 175, 1)` (a shade of blue) and ends at the bottom with the color `rgba(0,0,0,1)` (black).
   - `color: #fff;`: This property sets the text color within the `body` element to white.

These CSS styles contribute to the layout and appearance of the React application, ensuring proper alignment, centering, and consistent styling across different viewport sizes.