# Note
### To create a new react project:
Open a new terminal in the IDE and type 
```
create-react-app (Name of the project)
```
Or you can use Vite package to create projects which is faster and smoother but the commands will be changed

### Define the component:   
Should return something from a functional component
```react.js
const Welcome = () => {
  return <h1>Hello, world!</h1>;
};
```
### Export the component (if in separate file):
```react.js
export default Welcome;
```
### Import a component and use it in another component:
```react.js
import Welcome from './Welcome';

const App = () => {
  return (
    <div>
      <Welcome />
    </div>
  );
};
export default App;
```
Here "./Welcome" is used to import a Welcome.js file named Welcome. If we code just Welcome there it searches for a module in node_modules like a package (e.g., react, axios).
### Packages installed for this react app
  ```
  1. npm i mui
  2. npm i @mui/material
  3. npm i @emotion/react
  4. npm i @emotion/styled
  5. npm install axios
```
***
### About Grids
Grids are used to create responsive layouts by dividing the screen into rows and columns. They are especially useful in UI libraries like Material-UI (MUI) or Bootstrap.

``` react.js
<Grid item xs= {20}> 
      <Typography component = {'h6'} sx={{color: '#000000' , fontSize:'20px'} }>User Form</Typography>
</Grid>
```
You often use some important props inside the <Grid> tag to control its behavior. These are not the children (body), but attributes of the <Grid> component itself.
Some of those props are,
1. Container
```This makes the Grid act as a flex container for child Grid items.```

2. Spacing 
```Adds spacing (gaps) between child Grid items.```

3. sx={{}}
```
This is MUI’s styling prop, like inline CSS with theme support.
backgroundColor: '#ffffff' → sets white background.
marginBottom: '30px' → space below the grid.
```
#### Ex:
```react.js
<Grid
  container
  spacing= {6}
  sx={{
      backgroundColor: '#b0e0e6',
      marginBottom: '20px',
      display: 'block',
  }}
>
```
***
