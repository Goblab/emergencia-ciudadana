App.Categoria.FIXTURES = [
	{id: 0, titulo: 'Geofísica', emergencias: [0, 1, 2, 3, 4, 5]},
	{id: 1, titulo: 'Meteorológica', emergencias: [6, 7,8,9,10,11,12,13]},
	{id: 2, titulo: 'Seguridad', emergencias: [14,15,16,17,18,19,20,21]},
	{id: 3, titulo: 'Rescate', emergencias: [22]},
	{id: 4, titulo: 'Fuego', emergencias: [23,24]},
	{id: 5, titulo: 'Salud', emergencias: [25,26,46]},
	{id: 6, titulo: 'Medioambiente', emergencias: [27,28,29,30]},
	{id: 7, titulo: 'Transporte', emergencias: [31,32]},
	{id: 8, titulo: 'Infraestructura', emergencias: [33,34,35,36,37,38]},
	{id: 9, titulo: 'Bio', emergencias: [39,40,41,42,43,44]},
	{id: 10, titulo: 'Otros', emergencias: [45]},
];

App.Emergencia.FIXTURES = [
	// Geofisica
	{id: 0, titulo: 'Deslizamiento de tierras', categoria: 0, contenido: 'data/0/deslizamiento-de-tierras.html'},
	{id: 1, titulo: 'Avalanchas', categoria: 0, contenido: 'data/0/avalanchas.html'},
	{id: 2, titulo: 'Tsunami', categoria: 0, contenido: 'data/0/tsunami.html'},
	{id: 3, titulo: 'Terremoto', categoria: 0, contenido: 'data/0/terremoto.html'},
	{id: 4, titulo: 'Erupsión Volcánica', categoria: 0, contenido: 'data/0/erupsion-volcanica.html'},
	{id: 5, titulo: 'Aguas Termales', categoria: 0, contenido: 'data/0/aguas-termales.html'},

	// Meteorológica
	{id: 6, titulo: 'Ciclón', categoria: 1, contenido: 'data/1/ciclon.html'},
	{id: 7, titulo: 'Tornado', categoria: 1, contenido: 'data/1/tornado.html'},
	{id: 8, titulo: 'Lluvias', categoria: 1, contenido: 'data/1/lluvias.html'},
	{id: 9, titulo: 'Inundaciones', categoria: 1, contenido: 'data/1/inundaciones.html'},
	{id: 10, titulo: 'Nevadas', categoria: 1, contenido: 'data/1/nevadas.html'},
	{id: 11, titulo: 'Sequías', categoria: 1, contenido: 'data/1/sequias.html'},
	{id: 12, titulo: 'Hambre', categoria: 1, contenido: 'data/1/hambre.html'},
	{id: 13, titulo: 'Crecidas de ríos y lagunas', categoria: 1, contenido: 'data/crecidas-de-rios-y-lagunas.html'},

	// Seguridad
	{id: 14, titulo: 'Terrorismo', categoria: 2, contenido: 'data/2/terrorismo.html'},
	{id: 15, titulo: 'Crímenes locales', categoria: 2, contenido: 'data/2/crimenes-locales.html'},
	{id: 16, titulo: 'Profugos', categoria: 2, contenido: 'data/2/profugos.html'},
	{id: 17, titulo: 'Robos', categoria: 2, contenido: 'data/2/robos.html'},
	{id: 18, titulo: 'Aplicación correcta de la ley', categoria: 2, contenido: 'data/2/aplicacion-correcta-de-la-ley.html'},
	{id: 19, titulo: 'Seguridad militar', categoria: 2, contenido: 'data/2/seguridad-militar.html'},
	{id: 20, titulo: 'Seguridad pública', categoria: 2, contenido: 'data/2/seguridad-publica.html'},
	{id: 21, titulo: 'Seguridad privada', categoria: 2, contenido: 'data/2/seguridad-privada.html'},

	// Rescate
	{id: 22, titulo: 'Rescate y Recuperación', categoria: 3, contenido: 'data/3/rescate-y-recuperacion.html'},

	// Fuego
	{id: 23, titulo: 'Incendio', categoria: 4, contenido: 'data/4/incendio.html'},
	{id: 24, titulo: 'Rescates', categoria: 4, contenido: 'data/4/rescates.html'},

	// Salud
	{id: 25, titulo: 'Pública', categoria: 5, contenido: 'data/5/publica.html'},
	{id: 26, titulo: 'Privada', categoria: 5, contenido: 'data/5/privada.html'},
	{id: 46, titulo: 'Influenza Pandémica', categoria: 5, contenido: 'data/5/influenza.html'},

	// Medioambiente
	{id: 27, titulo: 'Incendios forestales', categoria: 6, contenido: 'data/6/incendios-forestales.html'},
	{id: 28, titulo: 'Contaminación del agua', categoria: 6, contenido: 'data/6/contaminacion-del-agua.html'},
	{id: 29, titulo: 'Humo', categoria: 6, contenido: 'data/6/humo.html'},
	{id: 30, titulo: 'Ceniza Volcánica', categoria: 6, contenido: 'data/6/ceniza-volcanica.html'},
	
	// Transporte
	{id: 31, titulo: 'Cortes', categoria: 7, contenido: 'data/7/cortes.html'},
	{id: 32, titulo: 'Desvíos', categoria: 7, contenido: 'data/7/desvios.html'},

	// Infraestructura
	{id: 33, titulo: 'Interrupciones del servicio', categoria: 8, contenido: 'data/8/interrupciones-del-servicio.html'},
	{id: 34, titulo: 'Interrupciones en las comunicaciones', categoria: 8, contenido: 'data/8/interrupciones-en-las-comunicaciones.html'},
	{id: 35, titulo: 'Demoliciones planificadas', categoria: 8, contenido: 'data/8/demoliciones-planificadas.html'},
	{id: 36, titulo: 'Cortes de energía', categoria: 8, contenido: 'data/8/cortes-de-energia.html'},
	{id: 37, titulo: 'Cortes de agua', categoria: 8, contenido: 'data/8/cortes-de-agua.html'},
	{id: 38, titulo: 'Cortes de gas', categoria: 8, contenido: 'data/8/cortes-de-gas.html'},

	// Bio
	{id: 39, titulo: 'Detonación nuclear', categoria: 9, contenido: 'data/9/detonacion-nuclear.html'},
	{id: 40, titulo: 'Fugas químicas', categoria: 9, contenido: 'data/9/fugas-quimicas.html'},
	{id: 41, titulo: 'Fugas radioactivas', categoria: 9, contenido: 'data/9/fugas-radioactivas.html'},
	{id: 42, titulo: 'Pandemia', categoria: 9, contenido: 'data/9/pandemia.html'},
	{id: 43, titulo: 'Fugas biológicas', categoria: 9, contenido: 'data/9/fugas-biologicas.html'},
	{id: 44, titulo: 'Epidemias', categoria: 9, contenido: 'data/9/epidemias.html'},
	
	// Otros
	{id: 45, titulo: 'Temas diversos', categoria: 10, contenido: 'data/10/temas-diversos.html'},
];
