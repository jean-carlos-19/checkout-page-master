class Mensaje_advertencia {
  constructor() {
    this.advertencia_email = document.getElementById('advertencia_correo');
    this.advertencia_telefono = document.getElementById('advertencia_telefono');
    this.advertencia_nombres_completo = document.getElementById(
      'advertencia_nombres_completo',
    );
    this.advertencia_direccion = document.getElementById(
      'advertencia_direccion',
    );
    this.advertencia_ciudad = document.getElementById('advertencia_ciudad');
    this.advertencia_pais = document.getElementById('advertencia_pais');
    this.advertencia_codigo_postal = document.getElementById(
      'advertencia_codigo_postal',
    );
    this.confirmacion_formulario = document.getElementById(
      'confirmacion_formulario',
    );
  }

  buscar_clave(validacion) {
    const { campo, mensaje, id } = validacion;

    switch (campo) {
      case 'correo':
        this.generar_advertencia_email(mensaje, id);
        return;

      case 'telefono':
        this.generar_advertencia_telefono(mensaje, id);
        return;

      case 'nombres_completo':
        this.generar_advertencia_nombres_completo(mensaje, id);
        return;

      case 'direccion':
        this.generar_advertencia_direccion(mensaje, id);
        return;

      case 'ciudad':
        this.generar_advertencia_ciudad(mensaje, id);
        return;

      case 'pais':
        this.generar_advertencia_pais(mensaje, id);
        return;

      case 'codigo_postal':
        this.generar_advertencia_codigo_postal(mensaje, id);
        return;
    }
  }

  generar_advertencia_email(mensaje, id) {
    this.advertencia_email.innerText = mensaje;
    this.mostar_advertencia(id);
  }

  generar_advertencia_telefono(mensaje, id) {
    this.advertencia_telefono.innerText = mensaje;
    this.mostar_advertencia(id);
  }

  generar_advertencia_nombres_completo(mensaje, id) {
    this.advertencia_nombres_completo.innerText = mensaje;
    this.mostar_advertencia(id);
  }

  generar_advertencia_direccion(mensaje, id) {
    this.advertencia_direccion.innerText = mensaje;
    this.mostar_advertencia(id);
  }

  generar_advertencia_ciudad(mensaje, id) {
    this.advertencia_ciudad.innerText = mensaje;
    this.mostar_advertencia(id);
  }

  generar_advertencia_pais(mensaje, id) {
    this.advertencia_pais.innerText = mensaje;
    this.mostar_advertencia(id);
  }

  generar_advertencia_codigo_postal(mensaje, id) {
    this.advertencia_codigo_postal.innerText = mensaje;
    this.mostar_advertencia(id);
  }

  generar_confirmacion_formulario() {
    this.confirmacion_formulario.innerText =
      'Enviado con exito!, Gracias por tu compra';
    this.mostar_confirmacion(0);
  }

  mostar_advertencia(id) {
    document
      .getElementsByClassName('mensaje_advertencia')
      [id].classList.add('mensaje_advertencia_activo');
  }
  mostar_confirmacion(id) {
    document
      .getElementsByClassName('mensaje_confirmacion')
      [id].classList.add('mensaje_confirmacion_activo');
    setTimeout(() => {
      this.quitar_confirmacion(id);
    }, 6000);
  }

  quitar_advertencia() {
    const advertencia = document.getElementsByClassName('mensaje_advertencia');
    for (var i = 0; i < advertencia.length; i++) {
      advertencia[i].classList.remove('mensaje_advertencia_activo');
    }
  }

  quitar_confirmacion(id) {
    document
      .getElementsByClassName('mensaje_confirmacion')
      [id].classList.remove('mensaje_confirmacion_activo');
  }
}

export { Mensaje_advertencia };
