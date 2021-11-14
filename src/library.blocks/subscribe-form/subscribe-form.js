import "./subscribe-form.scss";

function subscribe() {
  async function sendRequest(url, body) {
    let response = await fetch(url, {
      method: "POST",
      body: body,
    });
    return await response.json();
  }

  const forms = document.querySelectorAll(".subscribe-form");
  forms.forEach((form) => {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      alert("Теперь на ваш адрес " + data.get("email") + " будут приходить наши новости.");
      // sendRequest(e.target.action, data);
    });
  });
}

export default subscribe;
