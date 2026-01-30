type Idioma = "es" | "en";

interface BotonIdiomaProps {
    label: string;
    idiomaBoton: Idioma;
    idiomaActual: Idioma;
    CambiarIdioma : (idioma: Idioma) => void;
}