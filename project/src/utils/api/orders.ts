const BASE_URL = "https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/f3sj/orders";

export async function sendOrder(cartOrder: CartOrder): Promise<OrderConfirmation> {
  const apiKey = localStorage.getItem("apiKey");

  if (!apiKey) {
    throw new Error("API-nyckel saknas! Kontrollera att den har hämtats och sparats.");
  }

  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-zocom": apiKey,
      },
      body: JSON.stringify(cartOrder),
    });

    if (!response.ok) {
      throw new Error(`Error sending order! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.order as OrderConfirmation;
  } catch (error) {
    console.error("Error sending order:", error);
    throw error;
  }
}

export async function fetchOrders(): Promise<OrderConfirmation[]> {
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
      throw new Error(`Error fetching orders! Status: ${response.status}`);
    }

    const data = await response.json();
    return data as OrderConfirmation[];
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
}

export async function fetchOrder(orderId: string): Promise<OrderConfirmation> {
  const apiKey = localStorage.getItem("apiKey");

  if (!apiKey) {
    throw new Error("API-nyckel saknas! Kontrollera att den har hämtats och sparats.");
  }

  const ORDER_URL = `${BASE_URL}/${orderId}`;

  try {
    const response = await fetch(ORDER_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-zocom": apiKey,
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching order! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.order as OrderConfirmation;
  } catch (error) {
    console.error("Error fetching order:", error);
    throw error;
  }
}
