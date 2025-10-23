// app/aviso-de-privacidad/page.tsx

import styles from './Aviso.module.css';

export default function AvisoDePrivacidadPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Aviso de Privacidad</h1>
        <p className={styles.lastUpdated}>Última actualización: 21 de octubre de 2025</p>

        <section className={styles.section}>
          <h2>1. Responsable de los Datos</h2>
          <p>
            Insert-Text ("nosotros", "nuestro"), con domicilio en [Tu Ciudad/País], es responsable del uso y protección de sus datos personales.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Datos que Recopilamos</h2>
          <p>
            Este sitio web es un blog de exhibición y no recopila activamente datos personales de identificación, como nombres, correos electrónicos o direcciones, a menos que usted los proporcione voluntariamente (por ejemplo, en un futuro formulario de contacto).
          </p>
          <p>
            Podemos recopilar datos de análisis anónimos, como el tipo de navegador, páginas visitadas y tiempo de permanencia, con el fin de mejorar la experiencia del usuario.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Finalidad del Tratamiento de Datos</h2>
          <p>
            Los datos que podamos recopilar se utilizarán exclusivamente para:
            <ul>
              <li>Mejorar el rendimiento y la funcionalidad de nuestro sitio web.</li>
              <li>Responder a consultas o comentarios si usted nos contacta.</li>
            </ul>
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Uso de Cookies</h2>
          <p>
            Este sitio puede utilizar cookies para mejorar la navegación. Las cookies son pequeños archivos de datos que se almacenan en su dispositivo. Usted puede configurar su navegador para rechazar todas las cookies o para indicar cuándo se está enviando una cookie.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)</h2>
          <p>
            Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal (Rectificación); que la eliminemos de nuestros registros (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición).
          </p>
          <p>
            Para ejercer estos derechos, por favor contacte a [Tu Correo Electrónico de Contacto].
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Cambios al Aviso de Privacidad</h2>
          <p>
            Nos reservamos el derecho de efectuar en cualquier momento modificaciones o actualizaciones al presente aviso de privacidad. Estas modificaciones estarán disponibles al público a través de esta página.
          </p>
        </section>
      </div>
    </main>
  );
}