import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema(
  {title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  usuario: {
    type: String,
    required: true,
  },
  // fecha: {
  //   type: Date,
  //   default: Date.now,
  // },
  // numeroInterno: {
  //   type: Number,
  //   required: true,
  // },
  // revInterna: {
  //   type: String,
  //   required: true,
  // },
  // fechaRevision: {
  //   type: Date,
  //   required: true,
  // },
  // nombrePieza: {
  //   type: String,
  //   required: true,
  // },
  // cliente: {
  //   type: String,
  //   required: true,
  // },
  // numeroInternoCliente: {
  //   type: Number,
  //   required: true,
  // },
  // numeroPiezaCliente: {
  //   type: String,
  //   required: true,
  // },
  // aplicacion: {
  //   type: String,
  //   required: true,
  // },
  // nivelIngenieria: {
  //   type: String,
  //   required: true,
  // },
  // fechaModificacionIng: {
  //   type: Date,
  //   required: true,
  // },
  // modificacionesAdicionales: {
  //   type: String,
  //   required: true,
  // },
  // historialModificacion: {
  //   type: String,
  //   required: true,
  // },
  // status: {
  //   type: String,
  //   required: true,
  // },
  // organizacion: {
  //   type: String,
  //   required: true,
  // },
  // numero: {
  //   type: Number,
  //   required: true,
  // },
  // descripcion: {
  //   type: String,
  //   required: true,
  // },
  // maquina: {
  //   type: String,
  //   required: true,
  // },
  // simbolo: {
  //   type: String,
  //   required: true,
  // },
  // caracteristicaNumero: {
  //   type: String,
  //   required: true,
  // },
  // caracteristicaProducto: {
  //   type: String,
  //   required: true,
  // },
  // s: {
  //   type: String,
  //   required: true,
  // },
  // especificacionProducto: {
  //   type: String,
  //   required: true,
  // },
  // toleranciaMas: {
  //   type: Number,
  //   required: true,
  // },
  // toleranciaMenos: {
  //   type: Number,
  //   required: true,
  // },
  // unidadMedida: {
  //   type: String,
  //   required: true,
  // },
  // tecnicaMedicion: {
  //   type: String,
  //   required: true,
  // },
  // tamanoMuestra: {
  //   type: Number,
  //   required: true,
  // },
  // frecuenciaInspeccion: {
  //   type: Number,
  //   required: true,
  // },
  // metodoControl: {
  //   type: String,
  //   required: true,
  // },
  // planReaccion: {
  //   type: String,
  //   required: true,
  // }


    
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Note", NoteSchema);
