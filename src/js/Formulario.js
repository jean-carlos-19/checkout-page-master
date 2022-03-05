import { Mensaje_advertencia } from './Mensaje_adevretencia';

class Formulario {
  constructor() {
    this.mensaje_advertencia = new Mensaje_advertencia();
    this.enviar = document.getElementById('enviar');
    this.campos = {
      correo: document.getElementById('email'),
      telefono: document.getElementById('phone'),
      nombre_completo: document.getElementById('fullname'),
      direccion: document.getElementById('address'),
      ciudad: document.getElementById('city'),
      pais: document.getElementById('country'),
      codigo_postal: document.getElementById('postal_code'),
    };
  }

  obtener_boton_enviar() {
    return this.enviar;
  }

  obtener_plantilla_validacion(campo, id) {
    return {
      validacion: undefined,
      mensaje: undefined,
      campo: campo,
      id: id,
    };
  }

  validar_correo() {
    const { correo } = this.campos;
    const { value: valor_correo } = correo;
    let informacion_validacion = this.obtener_plantilla_validacion('correo', 0);
    const expresion_regular_correo =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const es_valido = expresion_regular_correo.test(valor_correo);

    if (!valor_correo)
      return Object.assign({}, informacion_validacion, {
        validacion: false,
        mensaje: 'Esta vacio el campo correo',
      });

    if (!es_valido)
      return Object.assign({}, informacion_validacion, {
        validacion: false,
        mensaje: 'El correo que ingreso es incorrcto',
      });

    return Object.assign({}, informacion_validacion, {
      validacion: true,
      mensaje: 'El correo que ingreso es correcto',
    });
  }

  validar_telefono() {
    const { telefono } = this.campos;
    const { value: valor_telefono } = telefono;

    let informacion_validacion = this.obtener_plantilla_validacion(
      'telefono',
      '1',
    );

    if (!valor_telefono)
      return Object.assign({}, informacion_validacion, {
        validacion: false,
        mensaje: 'Esta vacio el campo telefono',
      });

    if (valor_telefono.length !== 10)
      return Object.assign({}, informacion_validacion, {
        validacion: false,
        mensaje: 'El campo telefono debe tener 10 digitos',
      });

    if (valor_telefono[0] === 0)
      return Object.assign({}, informacion_validacion, {
        validacion: false,
        mensaje: 'El telefono que ingreso es incorrecto',
      });

    return Object.assign({}, informacion_validacion, {
      validacion: true,
      mensaje: 'El telefono que ingreso es correcto',
    });
  }

  validar_nombre_completo() {
    const { nombre_completo } = this.campos;
    const { value } = nombre_completo;
    const valor_nombre_completo = value.split(' ');

    let informacion_validacion = this.obtener_plantilla_validacion(
      'nombres_completo',
      '2',
    );

    if (!value)
      return Object.assign({}, informacion_validacion, {
        validacion: false,
        mensaje: 'Esta vacio el campo nombres completo',
      });

    if (valor_nombre_completo.length !== 2)
      return Object.assign({}, informacion_validacion, {
        validacion: false,
        mensaje: 'Solo se puede ingresar 2 nombres',
      });

    return Object.assign({}, informacion_validacion, {
      validacion: true,
      mensaje: 'El nombre completo que ingreso es correcto',
    });
  }

  validar_direccion() {
    const { direccion } = this.campos;
    const { value: valor_direccion } = direccion;
    let informacion_validacion = this.obtener_plantilla_validacion(
      'direccion',
      '3',
    );

    if (!valor_direccion)
      return Object.assign({}, informacion_validacion, {
        validacion: false,
        mensaje: 'Esta vacio el campo direccion',
      });

    if (valor_direccion.length > 255)
      return Object.assign({}, informacion_validacion, {
        validacion: false,
        mensaje: 'Esta la direccion solo puede tener 255 caracteres',
      });

    return Object.assign({}, informacion_validacion, {
      validacion: true,
      mensaje: 'La dirección que ingreso es correcto',
    });
  }

  validar_ciudad() {
    const { ciudad } = this.campos;
    const { value: valor_ciudad } = ciudad;
    let informacion_validacion = this.obtener_plantilla_validacion(
      'ciudad',
      '4',
    );

    if (!valor_ciudad)
      return Object.assign({}, informacion_validacion, {
        validacion: false,
        mensaje: 'Esta vacio el campo ciudad',
      });

    return Object.assign({}, informacion_validacion, {
      validacion: true,
      mensaje: 'La ciudad que ingreso es correcto',
    });
  }

  validar_pais() {
    const { pais } = this.campos;
    const { value: valor_pais } = pais;
    let informacion_validacion = this.obtener_plantilla_validacion('pais', '5');
    if (!valor_pais)
      return Object.assign({}, informacion_validacion, {
        validacion: false,
        mensaje: 'Esta vacio el campo país',
      });

    return Object.assign({}, informacion_validacion, {
      validacion: true,
      mensaje: 'El pais que ingreso es correcto',
    });
  }

  validar_codigo_postal() {
    const { codigo_postal } = this.campos;
    const { value: valor_codigo_postal } = codigo_postal;
    let informacion_validacion = this.obtener_plantilla_validacion(
      'codigo_postal',
      '6',
    );

    if (!valor_codigo_postal)
      return Object.assign({}, informacion_validacion, {
        validacion: false,
        mensaje: 'Esta vacio el campo codigo postal',
      });

    return Object.assign({}, informacion_validacion, {
      validacion: true,
      mensaje: 'El codigo postal que ingreso es correcto',
    });
  }

  buscar_campo(campo) {
    switch (campo) {
      case 'correo':
        return this.validar_correo();
      case 'telefono':
        return this.validar_telefono();
      case 'nombre_completo':
        return this.validar_nombre_completo();
      case 'direccion':
        return this.validar_direccion();
      case 'ciudad':
        return this.validar_ciudad();
      case 'pais':
        return this.validar_pais();
      case 'codigo_postal':
        return this.validar_codigo_postal();
      default:
        return undefined;
    }
  }

  validar_formulario() {
    const array_validacion_formulario = [];

    Object.keys(this.campos).forEach((nombre) =>
      array_validacion_formulario.push(this.buscar_campo(nombre)),
    );

    return { array_validacion_formulario };
  }

  limpiar_campos() {
    Object.keys(this.campos).forEach(
      (nombre) => (this.campos[nombre].value = ''),
    );
  }

  comprobar_validacion_formulario() {
    this.mensaje_advertencia.quitar_advertencia();
    const { array_validacion_formulario } = this.validar_formulario();
    const resultado_validacion = array_validacion_formulario.every(
      (campos) => campos.validacion,
    );

    if (!resultado_validacion) {
      array_validacion_formulario.forEach((campo) => {
        if (!campo.validacion) this.mensaje_advertencia.buscar_clave(campo);
      });
    } else {
      this.mensaje_advertencia.generar_confirmacion_formulario();
      this.limpiar_campos();
    }
  }
}

export { Formulario };
