import React, {useState} from "react";
import Nav from "./Nav";
import Hogs from "./Hogs.JS";

import FilterHogs from "./FilterHogs";


function App() {
	const [hogsArr, setHogs] = useState(Hogs)
	
	return (
		<div className="App">
			<Nav />
			<FilterHogs hogs={hogsArr} setHogs={setHogs} />
			< Hogs hogs={hogsArr} />
		</div>
	);
}

export default App;
