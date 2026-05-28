import { useState } from "react";
import axios from "axios";

function App() {

  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const askAI = async () => {

    const res = await axios.post(
      "http://localhost:5000/chat",
      { query }
    );

    setResponse(res.data.reply);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white shadow-2xl rounded-2xl p-8 w-[700px]">

        <h1 className="text-3xl font-bold mb-6 text-center">
          AI Shopping Assistant
        </h1>

        <textarea
          className="w-full border p-4 rounded-xl"
          rows="4"
          placeholder="Ask about snacks..."
          onChange={(e) => setQuery(e.target.value)}
        />

        <button
          onClick={askAI}
          className="bg-black text-white px-6 py-3 rounded-xl mt-4 w-full"
        >
          Ask AI
        </button>

        <div className="mt-6 bg-gray-100 p-4 rounded-xl whitespace-pre-wrap">
          {response}
        </div>

      </div>

    </div>
  );
}

export default App;