let formDOM = document.querySelector("#user-form");
formDOM.addEventListener(
  "submit",
  (formSubmit = () => {
    event.preventDefault();
    console.log("İşlem Gerçekleşti.");
    let scoreDOM = document.querySelector("#score");
    console.log(scoreDOM.value);
    localStorage.setItem(`score`, scoreDOM.value);
  })
);
