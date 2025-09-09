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

## Understanding the APP.js file structure
```.js
import {useNavigate} from 'react-router-dom';
import './App.css';
function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <h1> login!</h1>
        <button className ='Hi-button' onClick={() => navigate('/users')}> Say Hi </button>
      </header>
    </div>
  );
}

export default App;
```

### Explaination
1. We have to import useNavigate React-router-hook to manage routing among pages. Since we have to planned route to other pages from Home page we should import useNavigate from react router dom package.
2. Since we have decorated App.js file in App.css file we should import it in App.js file. Importing that takes decorations into the page.
3. We create a function named App and create a hook to useNavigate named navigate by this when we navigate from one to another we can navigate.
4. In return function, we create the body of App.js .
5. In onClick we make when we click Hi-button navigate to users page.

### Important about routing
```
In the App.js file we navigated the button to users page. But it is not enough we should route to the certain page. Otherwise we can't go to that page. If we just create the route and don't make the navigate in App file we can go to the users page only by adding /users to the url. Can not do it by clicking.
```

*Point*
* In a return in jsx we can't add two components so that we should add both into one Grid or Box. So what we do is import Box or Grid from MUI and add both components into it. (Kind of wrapping up)
* 
  
