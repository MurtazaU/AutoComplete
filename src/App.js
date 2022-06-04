import AutoComplete from './AutoComplete';
import countries from './countries';

function App() {
  return (
    <div className="App">
     <div className="app-component"><AutoComplete items={countries}/></div> 
    </div>
  );
}

export default App;
