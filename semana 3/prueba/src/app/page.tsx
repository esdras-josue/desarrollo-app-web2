import Preguntas from "./components/Preguntas";
import TriviaProvider from "./provider/TriviaProvider";

export default function Home() {
  return (
    <div>
      <TriviaProvider>
        <h1>Trivia de Futbol</h1>
        <Preguntas />
      </TriviaProvider>
    </div>
  );
}
