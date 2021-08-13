import { Mensaje_advertencia } from "./Mensaje_adevretencia";

class Formulario {
  constructor() {
    this.correo = document.getElementById("email");
    this.telefono = document.getElementById("phone");
    this.nombre_completo = document.getElementById("fullname");
    this.direccion = document.getElementById("address");
    this.ciudad = document.getElementById("city");
    this.pais = document.getElementById("country");
    this.codigo_postal = document.getElementById("postal_code");
    this.enviar = document.getElementById("enviar");
  }

  obtener_boton_enviar() {
    return this.enviar;
  }

  validar_correo() {
    const { value: valor_correo } = this.correo;
    const expresion_regular_correo =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const es_valido = expresion_regular_correo.test(valor_correo);
    let informacion_validacion = {
      validacion: undefined,
      mensaje: undefined,
      campo: "correo",
      id: "0"
    };

    if (!valor_correo)
      return Object.assign({}, informacion_validacion, {
        validacion: false,
        mensaje: "Esta vacio el campo correo"
      });

    if (!es_valido)
      return Object.assign({}, informacion_validacion, {
        validacion: false,
        mensaje: "El correo que ingreso es incorrcto"
      });

    return Object.assign({}, informacion_validacion, {
      validacion: true,
      mensaje: "El correo que ingreso es correcto"
    });
  }

  validar_telefono() {
    const { value: valor_telefono } = this.telefono;
    let informacion_validacion = {
      validacion: undefined,
      mensaje: undefined,
      campo: "telefono",
      id: "1"
    };

    if (!valor_telefono)
      return Object.assign({}, informacion_validacion, {
        validacion: false,
        mensaje: "Esta vacio el campo telefono"
      });

    if (valor_telefono.length !== 10)
      return Object.assign({}, informacion_validacion, {
        validacion: false,
        mensaje: "El campo telefono debe tener 10 digitos"
      });

    if (valor_telefono[0] === 0)
      return Object.assign({}, informacion_validacion, {
        validacion: false,
        mensaje: "El telefono que ingreso es incorrecto"
      });

    return Object.assign({}, informacion_validacion, {
      validacion: true,
      mensaje: "El telefono que ingreso es correcto"
    });
  }

  validar_nombre_completo() {
    const { value } = this.nombre_completo;
    const valor_nombre_completo = value.split(" ");
    let informacion_validacion = {
      validacion: undefined,
      mensaje: undefined,
      campo: "nombres_completo",
      id: "2"
    };

    if (!value)
      return Object.assign({}, informacion_validacion, {
        validacion: false,
        mensaje: "Esta vacio el campo nombres completo"
      });

    if (valor_nombre_completo.length !== 2)
      return Object.assign({}, informacion_validacion, {
        validacion: false,
        mensaje: "Solo se puede ingresar 2 nombres"
      });

    return Object.assign({}, informacion_validacion, {
      validacion: true,
      mensaje: "El nombre completo que ingreso es correcto"
    });
  }

  validar_direccion() {
    const { value: valor_direccion } = this.direccion;
    let informacion_validacion = {
      validacion: undefined,
      mensaje: undefined,
      campo: "direccion",
      id: "3"
    };
    if (!valor_direccion)
      return Object.assign({}, informacion_validacion, {
        validacion: false,
        mensaje: "Esta vacio el campo direccion"
      });

    if (valor_direccion.length > 255)
      return Object.assign({}, informacion_validacion, {
        validacion: false,
        mensaje: "Esta la direccion solo puede tener 255 caracteres"
      });

    return Object.assign({}, informacion_validacion, {
      validacion: true,
      mensaje: "La dirección que ingreso es correcto"
    });
  }

  validar_ciudad() {
    const { value: valor_ciudad } = this.ciudad;
    let informacion_validacion = {
      validacion: undefined,
      mensaje: undefined,
      campo: "ciudad",
      id: "4"
    };
    if (!valor_ciudad)
      return Object.assign({}, informacion_validacion, {
        validacion: false,
        mensaje: "Esta vacio el campo ciudad"
      });

    return Object.assign({}, informacion_validacion, {
      validacion: true,
      mensaje: "La ciudad que ingreso es correcto"
    });
  }

  validar_pais() {
    const { value: valor_pais } = this.pais;

    let informacion_validacion = {
      validacion: undefined,
      mensaje: undefined,
      campo: "pais",
      id: "5"
    };
    if (!valor_pais)
      return Object.assign({}, informacion_validacion, {
        validacion: false,
        mensaje: "Esta vacio el campo país"
      });

    return Object.assign({}, informacion_validacion, {
      validacion: true,
      mensaje: "El pais que ingreso es correcto"
    });
  }

  validar_codigo_postal() {
    const { value: valor_codigo_postal } = this.codigo_postal;

    let informacion_validacion = {
      validacion: undefined,
      mensaje: undefined,
      campo: "codigo_postal",
      id: "6"
    };
    if (!valor_codigo_postal)
      return Object.assign({}, informacion_validacion, {
        validacion: false,
        mensaje: "Esta vacio el campo codigo postal"
      });

    return Object.assign({}, informacion_validacion, {
      validacion: true,
      mensaje: "El codigo postal que ingreso es correcto"
    });
  }

  validar_formulario() {
    const array_validacion_formulario = [];
    const informacion_validacion_correo = this.validar_correo();
    const informacion_validacion_telefono = this.validar_telefono();
    const informacion_validacion_nombre_completos =
      this.validar_nombre_completo();
    const informacion_validacion_direccion = this.validar_direccion();
    const informacion_validacion_ciudad = this.validar_ciudad();
    const informacion_validacion_pais = this.validar_pais();
    const informacion_validacion_codigo_postal = this.validar_codigo_postal();

    array_validacion_formulario.push(informacion_validacion_correo);
    array_validacion_formulario.push(informacion_validacion_telefono);
    array_validacion_formulario.push(informacion_validacion_nombre_completos);
    array_validacion_formulario.push(informacion_validacion_direccion);
    array_validacion_formulario.push(informacion_validacion_ciudad);
    array_validacion_formulario.push(informacion_validacion_pais);
    array_validacion_formulario.push(informacion_validacion_codigo_postal);

    return { array_validacion_formulario };
  }

  limpiar_campos() {
    this.correo.value = "";
    this.telefono.value = "";
    this.nombre_completo.value = "";
    this.direccion.value = "";
    this.ciudad.value = "";
    this.pais.value = "";
    this.codigo_postal.value = "";
  }

  comprobar_validacion_formulario() {
    const { array_validacion_formulario } = this.validar_formulario();
    const mensjae_advertencia = new Mensaje_advertencia();
    mensjae_advertencia.quitar_advertencia();

    const resultado_validacion = array_validacion_formulario.every((campos) => {
      const { validacion } = campos;
      return validacion;
    });

    if (!resultado_validacion) {
      array_validacion_formulario.forEach((campo) => {
        const { validacion } = campo;
        if (!validacion) mensjae_advertencia.buscar_clave(campo);
      });
    } else {
      mensjae_advertencia.generar_confirmacion_formulario();
      this.limpiar_campos();
    }
  }
}

export { Formulario };
