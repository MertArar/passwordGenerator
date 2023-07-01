import { useState } from "react";
import { Icon } from "@iconify/react";

import Footer from "./components/Footer/Footer";
import Generator from "./components/Generator/Generator";
import PasswordOutput from "./components/PasswordOutput/PasswordOutput";
import useColorMode from "./hooks/useColorMode";

function App() {
  const [password, setPassword] = useState("");
  const [colorMode, setColorMode] = useColorMode();
  const [isCopied, setIsCopied] = useState(false);
  return (
    <div>
      <main>
        <section>
          <h1>Password Generator</h1>
          <button
            onClick={() =>
              setColorMode(colorMode === "light" ? "dark" : "light")
            }
            className="flex items-center"
          >
            <Icon
              className="p-2 text-4xl text-black border rounded-full border-greyLight dark:text-white"
              icon={colorMode === "dark" ? "ph:moon-fill" : "ph:sun-fill"}
            />
          </button>
        </section>
        <PasswordOutput />
        <Generator />
      </main>
      <Footer />
    </div>
  );
}

export default App;
