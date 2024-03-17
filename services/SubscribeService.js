
class SubscribeService {
   postData(email, category) {
    const response = fetch(`http://localhost:3001/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email, category),
    });

    if (!response.ok) {
      throw new Error("Error creating project");
    }
    console.log(response.json());
  }
}

export default new SubscribeService();

