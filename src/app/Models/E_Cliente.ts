import { E_Error } from "./E_Error";
export class E_Cliente {

  public Nit: string
  public Zona: string
  public ZonaDesc: string
  public RazonSocial: string
  public Contacto: string
  public DireccionResidencia: string
  public DireccionPedidos: string
  public Ciudad: string
  public Telefono1: string
  public Fax: string
  public Email: string
  public PlazoCredito: number
  public CupoAsignado: number
  public PrecioVenta: number
  public Descuento: number
  public Activo: number
  public Vendedor: string
  public VendedorNombre: string
  public Grancontribuyen: number
  public RetenedorFuente: number
  public RetenedorIca: number
  public CuentaContable: string
  public Localizacion: string
  public Clasificacion: string
  public Persona: string
  public Sector: string
  public FechaNacimiento: Date
  public CodCiudad: string
  public Categoria: string
  public Sexo: string
  public CuentaCRM: number
  public TipoDocumento: number
  public NombreTipoDocumento: string
  public Apellido1: string
  public Apellido2: string
  public Nombre1: string
  public Nombre2: string
  public DV: string
  public Simplificado: number
  public Autoretenedor: number
  public CodMediosMagneticos: string
  public Desmantelados: number
  public Telefono2: string
  public FechaIngreso: Date
  public UltimaModificacion: Date
  public SuspenderCredito: number
  public TipoTercero: number
  public Barrio: string
  public CodLista: string
  public Fpago: string
  public Facturar: number
  public Celular1: string
  public Celular2: string
  public IdEstadosCliente: number
  public NombreEstadosCliente: string
  public CodDepartamento: string
  public Departamento: string
  public CodPais: string
  public Pais: string
  public CodSector: string
  public IdReferidor: string
  public EnProduccion: boolean
  public TerminoProcess: boolean
  public TotalClientes: number
  public CodigoBarrio: number
  public NombreBarrio: string
  public CodigoCiudad2: number
  public NombreCiudad2: string
  public CodigoRegional: number
  public NombreRegional: string
  public NumeroPedido : string
  public Usuario: string
  public GuardarAuditoria: boolean
  public IdDistribuidor: number
  public DocumentoDistribuidor: string
  public Cxv_Id_Anterior: string
  public Cxv_Nombre_Anterior: string
  public Cxv_Id_Actual: string
  public Cxv_Nombre_Actual: string
  public Cxv_Fr: number
  public Cxv_Op: number
  public CodigoParroquia: string
  public NombreParroquia: string
  public Calles: string
  public NumeroCasa: string
  public ComoLlegar: string
  public ReferenciaFamiliar: string
  public TelefonoReferenciaFamiliar: string
  public NombreReferidor: string
  public OperadorCelular: string
  public Lider: string
  public CreadoPor: string
  public AprobadoCCN: boolean
  public ComoTeEnteraste: number
  public TerminosyCondiciones: boolean
  public FechaAceptacionTerminos: Date
  public MostrarTerminosyCondiciones: boolean
  public PedidoMinimoNivi: number
  public PedidoMinimoPisame: number
  public PedidoMinimoMixto: number
  public PedidoMinimoOutletNivi: number
  public PedidoMinimoHogarNivi: number
  public PedidoMinimoOutletPisame: number
  public TipoPedidoMinimo: number
  public IdCatalogoInteres: number
  public CatalogoInteres: string
  public Premio: number
  public TipoEnvio: number
  public ComoTeEnterasteNombre: string
  public CodCiudadDespacho: string
  public CodDeptoDespacho: string
  public IdTransportista: string
  public IdTipoRed: string
  public NombreTipoRed: string
  public NombreLider: string
  public NombreTransportista: string
  public Privilegio: boolean
  public Solicitudcredito: string
  public Cupo_credito: number
  public MPago: string
  public Saldo: number
  public Actudatos: number
  public Fechactudatos: Date

  public UltimaCompra: Date
  public Empresaria: string
  public TiempoContacto: string

  public Whatsapp: string
  public TipoCliente : string
  public TallaPrendaSuperior: string
  public TallaPrendaInferior: string
  public TallaCalzado: string
  public TarjetaCD: string
  public NombreEmpresariaCompleto: string

  public PorcentajeIvaFlete: number
  public ValorFleteSinIva: number
  public ValorFlete: number
  public EmpresariaLider: number

  public Bodega: string
  public GrupoDescuentoCliente: string
  public CodEstado: string

  public Error: E_Error

  constructor() { }
}
