In the game, the player needs to match a country to its capital by clicking on appropriate buttons.

1. Your component should receive a data property in the following format (an object with the corresponding answer, where keys are names of the countries and the value of each key is the capital of the country)
   <CountryCapitalGame data={{Germany: "Berlin", Azerbaijan: "Baku"}} />

2. A button should be displayed for each country and each capital. So, the example above would return buttons:
   Germany, Berlin, Azerbaijan, Baku

3. Button should be displayed in a random order.

4. Clicking button should set its background color to blue

5. Clicking another button should:
   ~ remove both button if a correct country and capital pair has been selected
   ~ set the background color of both buttons to red if a wrong pair have been selected

6. Assuming previously selected pair was wrong, clicking another button should restore the default
   background color of the wrong pair and set the background color of the clicked button to blue (as in point 4)

7. When there are no button left, display a message: Congratulations.

8. Export your component as a default export
