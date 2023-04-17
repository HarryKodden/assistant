import { useState } from "react";

export default function Home() {

  const [apiKey, setApiKey] = useState("");
  
  return (
    <div className="flex flex-col h-screen">
      /* Navbar */
      <nav className="bg-white shadow w-full">
          <div className="px-4 h-14 flex justify-between itens-center">
            <div>
              <input
                type="password"
                className="border rounded p-1"
                placeholder="Enter API key..."
                value={apiKey}
                onchange={(e) => setApiKey(e.target.value)}
               />
              </div>
          </div>
        </nav>
    </div>
  );
}
