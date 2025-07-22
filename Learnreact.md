# Note
### To create a new react project:
Open a new terminal in the IDE and type 
```
create-react-app (Name of the project)
```
Or you can use Vite package to create projects which is faster and smoother but the commands will be changed

### Define the component:   
//Should return something from a functional component
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
