import downArrow from "../../assets/icon-arrow-down.svg";

export const LanguageButton = () => {
  function changeLanguage() {
    console.log("changing language");
  }

  return (
    <button
      style={{
        color: "#b9b9b9",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
      onClick={changeLanguage}
    >
      <p>language</p>
      <img width={10} src={downArrow} alt="arrow-down" />
    </button>
  );
};
