El <Layout />componente recibe un children elemento secundario. Este elemento secundario puede ser una página u otro diseño. En su caso, las páginas internas /dashboardse anidarán automáticamente dentro de un <Layout />elemento secundario

Una ventaja de usar layouts en Next.js es que, durante la navegación, solo se actualizan los componentes de la página, mientras que el layout no se vuelve a renderizar.
Cualquier interfaz de usuario que agregue al diseño raíz se compartirá en todas las páginas de su aplicación. Puede usar el diseño raíz para modificar sus etiquetas <html>y <body>y agregar metadatos
