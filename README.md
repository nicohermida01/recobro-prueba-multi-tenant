# Recobro - Prueba técnica Multi-Tenant

GitHub: https://github.com/nicohermida01/recobro-prueba-multi-tenant
Deploy: https://dynamic-biscochitos-231f1f.netlify.app/

# Decisiones técnicas clave

1. **Estructura de carpetas**: La estructura de carpetas sigue una convención para separar las diferentes capas de la aplicación (rutas, componentes, servicios, datos, tipos, etc..). Esto facilita la comprensión y el mantenimiento del código.
2. **Patrón de diseño Service**: implemente un patrón de diseño Service para manejar las interacciones con la API. Esto permite poder cambiar la fuente de datos en el futuro sin afectar a los componentes que consumen los datos.
3. **Tipo de datos**: defini los tipos de datos en un archivo separado (`types/project.type.ts`) para mantener la coherencia y facilitar la reutilización en toda la aplicación. Esto permite detectar errores de tipo y tambien permite poder cambiar los tipos de datos en un solo lugar si es necesario.
4. **Id de tenant en Project**: incluí el `tenantId` en el tipo `Project` para facilitar la gestión de proyectos por tenant y asegurar que cada proyecto está asociado correctamente a un tenant. Me base en la suposición de que cada proyecto pertenece solamente a un tenant, por lo tanto siempre que el proyecto exista, va a estar asociado a un tenant. No agregue una lista de proyectos en el tipo `Tenant` para evitar redundancia y posibles inconsistencias en los datos. Asumi que es posible crear un tenant sin proyectos asociados inicialmente, por lo que una lista de proyectos en el tipo `Tenant` tendria valor null lo cual no es ideal.

# Resolución del Multi-Tenant

La estructura de la carpeta de ruteo `app/[tenant]/projects/[id]` permite manejar multiples tenants y que cada uno tenga su propio espacio de trabajo independientemente del resto, con la restricción de que el slug "tenant" debe ser unico. De la misma forma, la página de listado de proyectos `app/[tenant]/projects/page.tsx` muestra únicamente los proyectos asociados al tenant actual, filtrando los proyectos por el `tenant` obtenido del parámetro de la ruta. De forma similar funciona la página de detalle de proyecto `app/[tenant]/projects/[id]/page.tsx`, que verifica que el proyecto solicitado pertenece al tenant actual antes de mostrar los detalles del proyecto.

# Separación de Server-Components y Client-Components

La mayor parte de los componentes son Server-Components, lo que permite aprovechar las ventajas de rendimiento y SEO de Next.js. Sin embargo, los componentes que requieren interactividad, como botones, inputs o elementos propios del dom, son Client-Components.

# Mejoras con más tiempo

1. **Usuarios y autenticacion**: Implementar un sistema de usuarios y autenticacion para gestionar el acceso a los tenants y proyectos.
2. **Busqueda y filtrado**: Añadir funcionalidades de búsqueda y filtrado en la lista de proyectos para mejorar la experiencia del usuario.
3. **Base de datos**: integrar una base de datos real para almacenar los datos de tenants y proyectos en lugar de usar datos simulados.
4. **Tests**: Escribir tests unitarios y de integración para asegurar la funcionalidad del codigo.

# Cosas que deje fuera

1. **Estilos y diseño**: No me centre en el diseño visual ni en los estilos CSS para mantener el enfoque en la funcionalidad. Hice un diseño bien simple y minimalista utilizando TailwindCSS.
2. **Manejo de errores avanzado**: No implemente un manejo de errores detallado ni mensajes de feedback para el usuario.
3. **Internacionalización**: No incluí soporte para múltiples idiomas en la aplicación.
