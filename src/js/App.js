(() => {
  "use strict";
  class e {
    constructor() {
      (this.advertencia_email = document.getElementById("advertencia_correo")),
        (this.advertencia_telefono = document.getElementById(
          "advertencia_telefono"
        )),
        (this.advertencia_nombres_completo = document.getElementById(
          "advertencia_nombres_completo"
        )),
        (this.advertencia_direccion = document.getElementById(
          "advertencia_direccion"
        )),
        (this.advertencia_ciudad =
          document.getElementById("advertencia_ciudad")),
        (this.advertencia_pais = document.getElementById("advertencia_pais")),
        (this.advertencia_codigo_postal = document.getElementById(
          "advertencia_codigo_postal"
        )),
        (this.confirmacion_formulario = document.getElementById(
          "confirmacion_formulario"
        ));
    }
    buscar_clave(e) {
      const { campo: a, mensaje: i, id: o } = e;
      switch (a) {
        case "correo":
          return void this.generar_advertencia_email(i, o);
        case "telefono":
          return void this.generar_advertencia_telefono(i, o);
        case "nombres_completo":
          return void this.generar_advertencia_nombres_completo(i, o);
        case "direccion":
          return void this.generar_advertencia_direccion(i, o);
        case "ciudad":
          return void this.generar_advertencia_ciudad(i, o);
        case "pais":
          return void this.generar_advertencia_pais(i, o);
        case "codigo_postal":
          return void this.generar_advertencia_codigo_postal(i, o);
      }
    }
    generar_advertencia_email(e, a) {
      (this.advertencia_email.innerText = e), this.mostar_advertencia(a);
    }
    generar_advertencia_telefono(e, a) {
      (this.advertencia_telefono.innerText = e), this.mostar_advertencia(a);
    }
    generar_advertencia_nombres_completo(e, a) {
      (this.advertencia_nombres_completo.innerText = e),
        this.mostar_advertencia(a);
    }
    generar_advertencia_direccion(e, a) {
      (this.advertencia_direccion.innerText = e), this.mostar_advertencia(a);
    }
    generar_advertencia_ciudad(e, a) {
      (this.advertencia_ciudad.innerText = e), this.mostar_advertencia(a);
    }
    generar_advertencia_pais(e, a) {
      (this.advertencia_pais.innerText = e), this.mostar_advertencia(a);
    }
    generar_advertencia_codigo_postal(e, a) {
      (this.advertencia_codigo_postal.innerText = e),
        this.mostar_advertencia(a);
    }
    generar_confirmacion_formulario() {
      (this.confirmacion_formulario.innerText =
        "Enviado con exito!, Gracias por tu compra"),
        this.mostar_confirmacion(0);
    }
    mostar_advertencia(e) {
      document
        .getElementsByClassName("mensaje_advertencia")
        [e].classList.add("mensaje_advertencia_activo");
    }
    mostar_confirmacion(e) {
      document
        .getElementsByClassName("mensaje_confirmacion")
        [e].classList.add("mensaje_confirmacion_activo"),
        setTimeout(() => {
          this.quitar_confirmacion(e);
        }, 6e3);
    }
    quitar_advertencia() {
      const e = document.getElementsByClassName("mensaje_advertencia");
      for (var a = 0; a < e.length; a++)
        e[a].classList.remove("mensaje_advertencia_activo");
    }
    quitar_confirmacion(e) {
      document
        .getElementsByClassName("mensaje_confirmacion")
        [e].classList.remove("mensaje_confirmacion_activo");
    }
  }
  const a = new (class {
    constructor() {
      (this.correo = document.getElementById("email")),
        (this.telefono = document.getElementById("phone")),
        (this.nombre_completo = document.getElementById("fullname")),
        (this.direccion = document.getElementById("address")),
        (this.ciudad = document.getElementById("city")),
        (this.pais = document.getElementById("country")),
        (this.codigo_postal = document.getElementById("postal_code")),
        (this.enviar = document.getElementById("enviar"));
    }
    obtener_boton_enviar() {
      return this.enviar;
    }
    validar_correo() {
      const { value: e } = this.correo,
        a =
          /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
            e
          );
      let i = { validacion: void 0, mensaje: void 0, campo: "correo", id: "0" };
      return e
        ? a
          ? Object.assign({}, i, {
              validacion: !0,
              mensaje: "El correo que ingreso es correcto"
            })
          : Object.assign({}, i, {
              validacion: !1,
              mensaje: "El correo que ingreso es incorrcto"
            })
        : Object.assign({}, i, {
            validacion: !1,
            mensaje: "Esta vacio el campo correo"
          });
    }
    validar_telefono() {
      const { value: e } = this.telefono;
      let a = {
        validacion: void 0,
        mensaje: void 0,
        campo: "telefono",
        id: "1"
      };
      return e
        ? 10 !== e.length
          ? Object.assign({}, a, {
              validacion: !1,
              mensaje: "El campo telefono debe tener 10 digitos"
            })
          : 0 === e[0]
          ? Object.assign({}, a, {
              validacion: !1,
              mensaje: "El telefono que ingreso es incorrecto"
            })
          : Object.assign({}, a, {
              validacion: !0,
              mensaje: "El telefono que ingreso es correcto"
            })
        : Object.assign({}, a, {
            validacion: !1,
            mensaje: "Esta vacio el campo telefono"
          });
    }
    validar_nombre_completo() {
      const { value: e } = this.nombre_completo,
        a = e.split(" ");
      let i = {
        validacion: void 0,
        mensaje: void 0,
        campo: "nombres_completo",
        id: "2"
      };
      return e
        ? 2 !== a.length
          ? Object.assign({}, i, {
              validacion: !1,
              mensaje: "Solo se puede ingresar 2 nombres"
            })
          : Object.assign({}, i, {
              validacion: !0,
              mensaje: "El nombre completo que ingreso es correcto"
            })
        : Object.assign({}, i, {
            validacion: !1,
            mensaje: "Esta vacio el campo nombres completo"
          });
    }
    validar_direccion() {
      const { value: e } = this.direccion;
      let a = {
        validacion: void 0,
        mensaje: void 0,
        campo: "direccion",
        id: "3"
      };
      return e
        ? e.length > 255
          ? Object.assign({}, a, {
              validacion: !1,
              mensaje: "Esta la direccion solo puede tener 255 caracteres"
            })
          : Object.assign({}, a, {
              validacion: !0,
              mensaje: "La dirección que ingreso es correcto"
            })
        : Object.assign({}, a, {
            validacion: !1,
            mensaje: "Esta vacio el campo direccion"
          });
    }
    validar_ciudad() {
      const { value: e } = this.ciudad;
      let a = { validacion: void 0, mensaje: void 0, campo: "ciudad", id: "4" };
      return e
        ? Object.assign({}, a, {
            validacion: !0,
            mensaje: "La ciudad que ingreso es correcto"
          })
        : Object.assign({}, a, {
            validacion: !1,
            mensaje: "Esta vacio el campo ciudad"
          });
    }
    validar_pais() {
      const { value: e } = this.pais;
      let a = { validacion: void 0, mensaje: void 0, campo: "pais", id: "5" };
      return e
        ? Object.assign({}, a, {
            validacion: !0,
            mensaje: "El pais que ingreso es correcto"
          })
        : Object.assign({}, a, {
            validacion: !1,
            mensaje: "Esta vacio el campo país"
          });
    }
    validar_codigo_postal() {
      const { value: e } = this.codigo_postal;
      let a = {
        validacion: void 0,
        mensaje: void 0,
        campo: "codigo_postal",
        id: "6"
      };
      return e
        ? Object.assign({}, a, {
            validacion: !0,
            mensaje: "El codigo postal que ingreso es correcto"
          })
        : Object.assign({}, a, {
            validacion: !1,
            mensaje: "Esta vacio el campo codigo postal"
          });
    }
    validar_formulario() {
      const e = [],
        a = this.validar_correo(),
        i = this.validar_telefono(),
        o = this.validar_nombre_completo(),
        t = this.validar_direccion(),
        n = this.validar_ciudad(),
        c = this.validar_pais(),
        r = this.validar_codigo_postal();
      return (
        e.push(a),
        e.push(i),
        e.push(o),
        e.push(t),
        e.push(n),
        e.push(c),
        e.push(r),
        { array_validacion_formulario: e }
      );
    }
    limpiar_campos() {
      (this.correo.value = ""),
        (this.telefono.value = ""),
        (this.nombre_completo.value = ""),
        (this.direccion.value = ""),
        (this.ciudad.value = ""),
        (this.pais.value = ""),
        (this.codigo_postal.value = "");
    }
    comprobar_validacion_formulario() {
      const { array_validacion_formulario: a } = this.validar_formulario(),
        i = new e();
      i.quitar_advertencia(),
        a.every((e) => {
          const { validacion: a } = e;
          return a;
        })
          ? (i.generar_confirmacion_formulario(), this.limpiar_campos())
          : a.forEach((e) => {
              const { validacion: a } = e;
              a || i.buscar_clave(e);
            });
    }
  })();
  a.obtener_boton_enviar().addEventListener("click", (e) => {
    e.preventDefault(), a.comprobar_validacion_formulario();
  });
})();
