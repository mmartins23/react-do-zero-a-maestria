# Creating the project

If the project has already been started and you just need to add the provided data file, follow these steps:

1. **Create a Data Folder**: Inside the `src` directory of your project, create a new folder named `data`.

2. **Create a JavaScript File Inside the Data Folder**: Inside the newly created `data` folder, create a new file named `words.js`.

3. **Add the Data to the JavaScript File**: Open the `words.js` file and add the provided data:
   ```javascript
   export const wordsList = {
     car: ["Engine", "Door", "Hood", "Tire", "Antenna"],
     fruit: ["Banana", "Apple", "Pear", "Papaya", "Orange"],
     body: ["Arm", "Leg", "Brain", "Neck", "Eyes"],
     computer: ["Mouse", "Keyboard", "Monitor", "Tower"],
     programming: ["Language", "Framework", "JavaScript", "React"],
     food: ["Rice", "Beans", "Meat", "Milk", "Egg"],
   };
   ```

4. **Import the Data Wherever Necessary**: In your React components where you need to use the `wordsList` data, import it as follows:
   ```javascript
   import { wordsList } from './data/words';
   ```

5. **Use the Data in Your Components**: You can now use the `wordsList` object in your components to access the provided data.

That's it! You've successfully added the provided data file to your existing React project named "Secret Word". You can now utilize this data in your components as needed.