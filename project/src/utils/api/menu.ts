const BASE_URL = "https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/menu";

export async function fetchMenu(): Promise<MenuData> {
  const apiKey = localStorage.getItem("apiKey");

  if (!apiKey) {
    throw new Error("API-nyckel saknas! Kontrollera att den har hämtats och sparats.");
  }

  try {
    const response = await fetch(BASE_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-zocom": apiKey,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error fetching menu! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.items as MenuData;
  } catch (error) {
    console.error("Error fetching menu:", error);
    throw error;
  }
}

export async function fetchMenuItem(itemId: string): Promise<MenuItem> {
  const apiKey = localStorage.getItem("apiKey");

  if (!apiKey) {
    throw new Error("API-nyckel saknas! Kontrollera att den har hämtats och sparats.");
  }

  const ITEM_URL = `${BASE_URL}/${itemId}`;

  try {
    const response = await fetch(ITEM_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-zocom": apiKey,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error fetching item! Status: ${response.status}`);
    }

    const data = await response.json();
    return data as MenuItem;
  } catch (error) {
    console.error("Error fetching item:", error);
    throw error;
  }
}
