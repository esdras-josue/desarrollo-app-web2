type Idioma = "es" | "en";

export interface BotonIdiomaProps {
  label: string;
  idiomaBoton: Idioma;
  idiomaActual: Idioma;
  CambiarIdioma: (idioma: Idioma) => void;
}
