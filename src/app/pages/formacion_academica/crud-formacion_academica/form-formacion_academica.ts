export let FORM_FORMACION_ACADEMICA = {
  // titulo: 'FormacionAcademica',
  tipo_formulario: 'mini',
  alertas: true,
  btn: 'Guardar',
  modelo: 'InfoFormacionAcademica',
  campos: [
    {
      etiqueta: 'input',
      claseGrid: 'col-lg-5 col-md-6 col-sm-11 col-xs-11',
      nombre: 'NombreUniversidad',
      label_i18n: 'nombre_universidad',
      placeholder_i18n: 'nombre_universidad',
      requerido: true,
      deshabilitar: true,
      tipo: 'text',
    },
    {
      etiqueta: 'input',
      claseGrid: 'col-lg-5 col-md-5 col-sm-10 col-xs-10',
      nombre: 'Nit',
      label_i18n: 'nit',
      placeholder_i18n: 'nit',
      requerido: true,
      tipo: 'text',
    },
    {
      etiqueta: 'button',
      claseGrid: 'col-2',
      nombre: 'BusquedaBoton',
      claseBoton: 'btn btn-primary btn-sm',
      icono: 'fa fa-search',
    },
    // {
    //   etiqueta: 'select',
    //   claseGrid: 'col-lg-6 col-md-6 col-sm-12 col-xs-12',
    //   nombre: 'NivelFormacion',
    //   label_i18n: 'nivel_formacion',
    //   placeholder_i18n: 'nivel_formacion',
    //   requerido: true,
    //   deshabilitar: true,
    //   tipo: 'text',
    //   key: 'valor',
    //   opciones: [
    //     { Id: 1, valor: 'Profesional' },
    //     { Id: 2, valor: 'Diplomado' },
    //     { Id: 3, valor: 'Especialización' },
    //     { Id: 4, valor: 'Maestría' },
    //     { Id: 5, valor: 'Doctorado' },
    //   ],
    // },
    {
      etiqueta: 'select',
      claseGrid: 'col-lg-4 col-md-4 col-sm-12 col-xs-12',
      nombre: 'Pais',
      label_i18n: 'pais_universidad',
      placeholder_i18n: 'pais_universidad',
      requerido: true,
      deshabilitar: true,
      tipo: 'Lugar',
      key: 'Nombre',
      opciones: [],
    },
    {
      etiqueta: 'input',
      claseGrid: 'col-lg-4 col-md-4 col-sm-12 col-xs-12',
      nombre: 'Direccion',
      label_i18n: 'direccion_universidad',
      placeholder_i18n: 'direccion_universidad',
      requerido: true,
      deshabilitar: true,
      tipo: 'text',
    },
    {
      etiqueta: 'input',
      claseGrid: 'col-lg-4 col-md-4 col-sm-12 col-xs-12',
      nombre: 'Correo',
      label_i18n: 'correo_universidad',
      placeholder_i18n: 'correo_universidad',
      requerido: true,
      deshabilitar: true,
      tipo: 'email',
    },
    {
      etiqueta: 'input',
      claseGrid: 'col-lg-4 col-md-4 col-sm-12 col-xs-12',
      nombre: 'Telefono',
      label_i18n: 'telefono_universidad',
      placeholder_i18n: 'telefono_universidad',
      requerido: true,
      deshabilitar: true,
      tipo: 'text',
    },
    {
      etiqueta: 'mat-date',
      claseGrid: 'col-lg-2 col-md-2 col-sm-12 col-xs-12',
      nombre: 'FechaInicio',
      label_i18n: 'fecha_inicio',
      placeholder_i18n: 'fecha_inicio',
      requerido: true,
      tipo: 'date',
    },
    {
      etiqueta: 'mat-date',
      claseGrid: 'col-lg-2 col-md-2 col-sm-12 col-xs-12',
      nombre: 'FechaFinalizacion',
      label_i18n: 'fecha_fin',
      placeholder_i18n: 'fecha_fin',
      requerido: true,
      tipo: 'date',
    },
    // {
    //   etiqueta: 'select',
    //   claseGrid: 'col-lg-6 col-md-6 col-sm-12 col-xs-12',
    //   nombre: 'Metodologia',
    //   label_i18n: 'metodologia',
    //   placeholder_i18n: 'metodologia',
    //   requerido: true,
    //   deshabilitar: true,
    //   tipo: 'text',
    //   key: 'valor',
    //   opciones: [
    //     { Id: 1, valor: 'Presencial' },
    //     { Id: 2, valor: 'Semipresencial' },
    //     { Id: 3, valor: 'A distancia' },
    //     { Id: 4, valor: 'Virtual' },
    //   ],
    // // },
    {
      etiqueta: 'select',
      claseGrid: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
      nombre: 'ProgramaAcademico',
      label_i18n: 'programa_academico',
      placeholder_i18n: 'programa_academico',
      requerido: true,
      tipo: 'any',
      key: 'Nombre',
      opciones: [],
    },
    {
      etiqueta: 'input',
      claseGrid: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
      nombre: 'TituloTrabajoGrado',
      label_i18n: 'titulo_trabajo_grado',
      placeholder_i18n: 'titulo_trabajo_grado',
      requerido: true,
      tipo: 'text',
    },
    {
      etiqueta: 'textarea',
      claseGrid: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
      nombre: 'DescripcionTrabajoGrado',
      label_i18n: 'descripcion_trabajo_grado',
      placeholder_i18n: 'descripcion_trabajo_grado',
      requerido: true,
      tipo: 'text',
    },
    {
      etiqueta: 'file',
      claseGrid: 'col-lg-6 col-md-6 col-sm-12 col-xs-12',
      clase: 'form-control',
      nombre: 'Documento',
      label_i18n: 'soporte_documento',
      placeholder_i18n: 'soporte_documento',
      requerido: false,
      tipo: 'pdf',
      tipoDocumento: 3,
      formatos: 'pdf',
      url: '',
      tamanoMaximo: 2,
    },
  ],
}
