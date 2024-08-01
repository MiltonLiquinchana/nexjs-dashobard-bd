/**Utilizarás este archivo para guardar las fuentes que se usarán en toda la aplicación. */
/**Las fuentes juegan un papel importante en el diseño de un sitio web, pero el uso de fuentes personalizadas en su proyecto puede afectar el rendimiento
 *  si es necesario buscar y cargar los archivos de fuentes.
Cambio de diseño acumulativoes una métrica que utiliza Google para evaluar el rendimiento y la 
experiencia del usuario de un sitio web. En el caso de las fuentes, el cambio de diseño se produce 
cuando el navegador inicialmente muestra el texto en una fuente de respaldo o del sistema y 
luego lo cambia por una fuente personalizada una vez que se ha cargado. Este cambio puede provocar
que el tamaño, el espaciado o el diseño del texto cambien, lo que desplaza los elementos a su 
alrededor.
Next.js optimiza automáticamente las fuentes en la aplicación cuando se utiliza el next/fontmódulo. 
Descarga archivos de fuentes en el momento de la compilación y los aloja con el resto de los recursos 
estáticos. Esto significa que cuando un usuario visita la aplicación, no hay solicitudes de red 
adicionales para fuentes que afecten el rendimiento. */

/**Importa la Interfuente desde el next/font/googlemódulo: esta será tu fuente principal.
 * Luego, especifica qué subconjuntoque desea cargar. En este caso, 'latin': */
import { Inter, Lusitana } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});
