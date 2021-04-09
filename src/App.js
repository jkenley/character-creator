import React from 'react';
import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';
import { BGTop, BGBottom } from './components/BG';

function App() {
  return (
		<>
      <BGTop />
      <BGBottom />
			<CharacterEditor />
			<Footer />
		</>
	);
}

export default App;
