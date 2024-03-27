# Finishing home screen

This code creates a start screen component for a game called "Secret Word" and applies some CSS styles to it. Let's break down the React component and its associated CSS:

1. **StartScreen Component**:
   ```jsx
   import './StartScreen.css';

   const StartScreen = () => {
       return (
           <div className="start">
               <h1>Secret Word</h1>
               <p>Click to start the game</p>
               <button>Start game</button>
           </div>
       );
   };

   export default StartScreen;
   ```

   - This component represents the start screen of the game. It displays a heading "Secret Word", a paragraph with instructions, and a button to start the game.

2. **StartScreen.css**:
   ```css
   .start h1 {
       font-size: 3.5em;
   }

   .start p {
       margin-bottom: 2em;
       color: yellow;
   }
   ```

   - This CSS file provides styles for the `StartScreen` component.
   - `.start h1`: Selects the `h1` element within an element with the class `.start`. Sets the font size to `3.5em`.
   - `.start p`: Selects the `p` element within an element with the class `.start`. Sets a bottom margin of `2em` and changes the text color to yellow.

3. **Global Button Styles in index.css**:
   ```css
   button {
       background: blue;
       color: white;
       padding: 0 45px;
       border: 2px solid white;
       border-radius: 25px;
       height: 50px;
       text-transform: uppercase;
       font-weight: bold;
       font-size: 1.2em;
       cursor: pointer;
       transition: .4s;
   }

   button:hover {
       background-color: darkblue;
   }
   ```

   - These CSS rules apply styles globally to all `button` elements in the application.
   - `background`, `color`, `padding`, `border`, `border-radius`, `height`, `text-transform`, `font-weight`, and `font-size`: Set various styles for the button such as background color, text color, padding, border, border radius, height, text transformation, font weight, and font size.
   - `cursor`: Specifies the cursor type when hovering over the button.
   - `transition`: Adds a transition effect when the button properties change.
   - `button:hover`: Defines styles for the button when hovered over. Changes the background color to dark blue.

With these components and styles, you have created a start screen for the game "Secret Word" with appropriate styling for the heading, paragraph, and button. The button also has global styles applied to it for consistency across the application.