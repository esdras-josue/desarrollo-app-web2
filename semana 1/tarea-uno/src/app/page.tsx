import ConversionComponente from './components/convercionComponente';
import { Temperatura } from './interfaces/Temperatura';

export default function Home() {

  const temperaturaObjeto: Temperatura = {
    celsius : 20,
  }

  return (
    <div>
      <ConversionComponente {...temperaturaObjeto} />
    </div>
  );
}
