import { useState } from "react";
import { Icon } from "@iconify/react";

import Footer from "./components/Footer/Footer";
import Generator from "./components/Generator/Generator";
import PasswordOutput from "./components/PasswordOutput/PasswordOutput";
import useColorMode from "./hooks/useColorMode";

function App() {
  const [password, setPassword] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  return (
    <div>
      <main>
        <section>
          <h1>Password Generator</h1>
          <button>
            <Icon />
          </button>
        </section>
        <PasswordOutput />
      </main>
      <Footer />
    </div>
  );
}

export default App;
