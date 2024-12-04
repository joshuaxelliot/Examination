import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

const BASE_URL = "https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com";

async function fetchApiKey(): Promise<void> {
  try {
    const response = await fetch(`${BASE_URL}/keys`, { method: "POST" });

    if (!response.ok) {
      throw new Error(`Error fetching API key: ${response.status}`);
    }

    const data = await response.json();
    localStorage.setItem("apiKey", data.key);
    console.log("API key fetched and saved:", data.key);
  } catch (error) {
    console.error("Failed to fetch API key:", error);
  }
}

export function App() {
  useEffect(() => {
    const initializeApiKey = async () => {
      try {
        await fetchApiKey();
      } catch (error) {
        console.error("Could not initialize API key:", error);
      }
    };

    initializeApiKey();
  }, []);

  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
}
