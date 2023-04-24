import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState } from "react";
import Fifth from "./components/Fifth";
import First from "./components/First";
import Fourth from "./components/Fourth";
import Second from "./components/Second";
import Third from "./components/Third";

function App() {

  const handleChange = (event) => {
    setApi(event.target.value);
    console.log(event.target.value);
  }
  const rendering = (api) => {
    if(api == 1)
      {
        return <First/>
      }
      else if(api == 2)
      {
        return <Second/>
      }
      else if(api == 3)
      {
        return <Third/>
      }
      else if(api == 4)
      {
        return <Fourth/>
      }
      else if(api == 5)
      {
        return <Fifth/>
      }
  }
  const [api, setApi] = useState(1);
	return (
		<div className="App">
			<h1>React App</h1>
			<FormControl size='large' sx={{ m: 1, minWidth: "90%" }}>
				<InputLabel id="demo-simple-select-label">Select API</InputLabel>
				<Select
          label="Select API"
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={api}
					onChange={handleChange}>
					<MenuItem value={1}>First API</MenuItem>
					<MenuItem value={2}>Second API</MenuItem>
					<MenuItem value={3}>Third API</MenuItem>
          <MenuItem value={4}>Fourth API</MenuItem>
          <MenuItem value={5}>Fifth API</MenuItem>
				</Select>
			</FormControl>

      
      {rendering(api)}
       
		</div>  
	);
}

export default App;
