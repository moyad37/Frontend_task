import "./App.css";
import Form from "./components/Form/Form";

/* setOptions({
  locale: localeDe,
  theme: "ios",
  themeVariant: "light",
});
 */
function App() {
  return (
    <div className="container mx-auto w-full">
      {/*<Buttons layout="grid" />*/}
      {/*<Buttons layout="flex" />*/}
      {/* <GetData /> */}
      <Form />
    </div>
  );
}

export default App;
