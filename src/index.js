import "./styles.css";

const onClickAdd = () => {
  //いきなり機能を実装するのでは無く関数がうまく動作しているかの確認(細分化)
  const inputText = document.getElementById("add-text").value;
  alert(inputText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
