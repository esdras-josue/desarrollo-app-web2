import TemasProvider from "./provider/TemasProvider";
import Temas from "./components/Temas";

export default function Home() {
  
 return(
  <TemasProvider>
    <Temas />
  </TemasProvider>
 )
}
