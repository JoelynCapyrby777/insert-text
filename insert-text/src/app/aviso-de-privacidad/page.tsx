// app/aviso-de-privacidad/page.tsx

import styles from './Aviso.module.css';

export default function AvisoDePrivacidadPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Aviso de Privacidad de Insert Bug</h1>
        
        <section className={styles.section}>
          <p>
            Si estás leyendo esto, significa que eres un usuario responsable que cuida sus datos personales. En este aviso de privacidad vamos a explicarte para qué solicitamos tus datos, bajo qué circunstancias y cómo los cuidamos.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Sobre el responsable</h2>
          <p>
            La primera obligación que tenemos contigo es informarte la identidad del responsable de este sitio:
          </p>
          <ul>
            <li><strong>Razón Social:</strong> Insert Bug (en adelante "Insert Bug" o "el Sitio").</li>
            <li><strong>Responsable:</strong> Yoel Alfredo [Tu Apellido].</li>
            <li><strong>Domicilio:</strong> [Tu Ciudad, Estado, País].</li>
            <li><strong>Nuestra actividad:</strong> Somos un blog y portafolio digital dedicado a la exploración cultural, educativa y visual del mundo de los insectos, ofreciendo artículos, galerías fotográficas y conocimiento sobre el microuniverso.</li>
            <li><strong>Correo electrónico del responsable:</strong> [Tu Correo Electrónico de Contacto].</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>La información que te solicitamos y en qué momento</h2>
          <p>
            A continuación, te describimos las diferentes situaciones futuras en donde podríamos requerir tus datos en este sitio:
          </p>
          <ul>
            <li><strong>Cuando quieras suscribirte a nuestro boletín,</strong> te solicitaremos tu correo electrónico.</li>
            <li><strong>Cuando dejes un comentario en un artículo (funcionalidad futura),</strong> te pediremos tu nombre y correo electrónico.</li>
            <li><strong>Cuando tengas alguna duda o sugerencia a través de un formulario de contacto,</strong> te solicitaremos tu nombre y correo electrónico.</li>
            <li><strong>Cuando subas contenido, como fotografías (funcionalidad futura),</strong> te pediremos que te identifiques a través de una cuenta de usuario, solicitando nombre, correo electrónico y una contraseña.</li>
          </ul>
          <div className={styles.importantNote}>
            <h3>¡Importantísimo!</h3>
            <ul>
              <li>Nunca solicitaremos datos personales sensibles en este sitio.</li>
              <li>Tampoco te solicitaremos tu usuario y contraseña por teléfono o correo electrónico.</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Finalidades del tratamiento</h2>
          <p>
            Otra de nuestras responsabilidades es explicarte para qué usamos, almacenamos y tratamos tus datos personales. Cuando te conectas a este sitio y nos facilitas información, estás dando tu consentimiento para que tu información sea recopilada y gestionada por nosotros, sólo como se describe en este aviso.
          </p>
          <p>Las finalidades dependen del formulario donde hayas ingresado tus datos:</p>
          <ul>
            <li><strong>Formulario de Suscripción:</strong> Para enviarte nuestro boletín y comunicaciones con nuevos artículos, noticias y contenido exclusivo de "Insert Bug".</li>
            <li><strong>Formulario de Contacto:</strong> Para darte respuesta a tus solicitudes, sugerencias o dudas.</li>
            <li><strong>Sistema de Comentarios:</strong> Para gestionar y mostrar tu participación en la comunidad del blog.</li>
            <li><strong>Sistema de Cuentas de Usuario:</strong> Para identificarte como autor del contenido que subas a la plataforma.</li>
          </ul>
          <p>Además, existen otras finalidades generales:</p>
          <ul>
            <li>Realizar estudios internos sobre datos demográficos y estadísticos para conocer los intereses de nuestros usuarios.</li>
            <li>Apoyar y mejorar los servicios que ofrece nuestro sitio para proporcionarte una experiencia más satisfactoria.</li>
          </ul>
          <p><strong>Tus datos NUNCA serán utilizados para un fin diferente a lo mencionado y NUNCA venderemos tu información.</strong></p>
        </section>

        <section className={styles.section}>
          <h2>Contenido Generado por Usuarios (Fotografías)</h2>
          <p>
            En caso de que se implementen funcionalidades que permitan a los usuarios subir contenido, como fotografías de insectos, se aplicarán las siguientes condiciones:
          </p>
          <ul>
            <li>
              <strong>Licencia de Uso a "Insert Bug":</strong> Al subir una fotografía a nuestra plataforma, conservarás los derechos de autor sobre tu obra. Sin embargo, nos otorgas una licencia mundial, no exclusiva, perpetua, irrevocable y libre de regalías para usar, reproducir, distribuir y mostrar públicamente dicha fotografía en conexión con la promoción y operación de "Insert Bug". Esto incluye su uso en material publicitario, redes sociales y otras actividades promocionales del sitio.
            </li>
            <li>
              <strong>Permanencia del Contenido:</strong> Entiendes y aceptas que, incluso si eliminas tu cuenta, la licencia otorgada sobre tus fotografías persistirá. Esto se debe a que el contenido ya integrado en nuestro blog o artículos no puede ser retirado sin afectar la integridad del contenido existente.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Acerca del uso de cookies</h2>
          <p>
            Las cookies son archivos de texto que son descargados y almacenados en tu dispositivo al navegar en una página de Internet. Permiten recordar al servidor algunos datos sobre ti, como tus preferencias. En algunas secciones de nuestro sitio podemos requerir que tengas habilitadas las cookies ya que algunas funcionalidades requieren de éstas para trabajar.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Los derechos que tienes al proporcionarnos tus datos</h2>
          <p>La ley te otorga los siguientes derechos sobre tus datos personales:</p>
          <ul>
            <li>Solicitar el <strong>acceso</strong> a tus datos personales.</li>
            <li>Solicitar su <strong>rectificación</strong>.</li>
            <li>Solicitar su <strong>cancelación</strong>.</li>
            <li>Solicitar la <strong>limitación</strong> de su tratamiento (su uso y divulgación).</li>
            <li><strong>Oponerse</strong> al tratamiento que le estamos dando.</li>
          </ul>
          <p>El ejercicio de estos derechos es personal. Para ejercerlos, por favor envía una solicitud junto con una copia de tu identificación al correo: <strong>[Tu Correo Electrónico de Contacto]</strong>. Te atenderemos en un plazo no mayor a 15 días hábiles.</p>
        </section>

        <section className={styles.section}>
          <h2>Tiempo de conservación de tus datos</h2>
          <p>Conservaremos tus datos hasta que nos pidas que los eliminemos.</p>
        </section>
        
        <section className={styles.section}>
          <h2>La protección de tu información</h2>
          <p>Hemos implementado medidas de seguridad para cuidar tus datos:</p>
          <ul>
            <li>Uso de certificados SSL (Secure Socket Layer).</li>
            <li>Implementación de mejores prácticas en servidores para mantener segura tu información.</li>
            <li>Limitación de acceso a las bases de datos donde se guardan los datos.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Leyes que incorpora este aviso de privacidad</h2>
          <ul>
            <li>La <strong>LFPDPPP</strong> (Ley Federal de Protección de Datos Personales en Posesión de los Particulares) que es la ley que se encarga de proteger los datos personales en México.</li>
          </ul>
        </section>
        
        <section className={styles.section}>
          <h2>Autoridad</h2>
          <p>Si consideras que la protección de tus datos personales ha sido vulnerada, tienes la libertad de acudir al INAI (Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales).</p>
        </section>
        
        <section className={styles.section}>
          <h2>Aceptación de términos</h2>
          <p>Cuando nos facilitas tu información y marcas una casilla de consentimiento (en un futuro), significa que estás de acuerdo para que tu información sea tratada en los términos antes mencionados.</p>
        </section>

        <section className={styles.section}>
          <h2>Modificaciones en nuestro aviso de privacidad</h2>
          <p>Te recomendamos que consultes este AVISO DE PRIVACIDAD periódicamente, ya que realizamos actualizaciones y modificaciones para adecuarlo a las leyes y a políticas internas.</p>
          <p>Última actualización el 23/10/2025 (veintitrés de octubre de 2025).</p>
        </section>
      </div>
    </main>
  );
}