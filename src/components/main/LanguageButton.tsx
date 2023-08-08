export const LanguageButton = () => {
  function changeLanguage() {
    console.log("changing language");
  }

  return <button onClick={changeLanguage}>language</button>;
};
