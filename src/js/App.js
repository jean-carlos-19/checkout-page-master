/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ 'use strict';
  /******/ var __webpack_modules__ = {
    /***/ './js/App.js':
      /*!*******************!*\
  !*** ./js/App.js ***!
  \*******************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Formulario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Formulario */ "./js/Formulario.js");\n\n\nconst formulario = new _Formulario__WEBPACK_IMPORTED_MODULE_0__.Formulario();\nformulario.obtener_boton_enviar().addEventListener("click", (evento) => {\n  evento.preventDefault();\n  formulario.comprobar_validacion_formulario();\n});\n\n\n//# sourceURL=webpack://checkout-page-master/./js/App.js?',
        );

        /***/
      },

    /***/ './js/Formulario.js':
      /*!**************************!*\
  !*** ./js/Formulario.js ***!
  \**************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Formulario": () => (/* binding */ Formulario)\n/* harmony export */ });\n/* harmony import */ var _Mensaje_adevretencia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mensaje_adevretencia */ "./js/Mensaje_adevretencia.js");\n\n\nclass Formulario {\n\n  constructor() {\n    this.mensaje_advertencia = new _Mensaje_adevretencia__WEBPACK_IMPORTED_MODULE_0__.Mensaje_advertencia();\n    this.enviar = document.getElementById("enviar");\n    this.campos = {\n      correo: document.getElementById("email"),\n      telefono: document.getElementById("phone"),\n      nombre_completo: document.getElementById("fullname"),\n      direccion: document.getElementById("address"),\n      ciudad: document.getElementById("city"),\n      pais:document.getElementById("country"),\n      codigo_postal: document.getElementById("postal_code")\n    };\n  }\n\n  obtener_boton_enviar() {\n    return this.enviar;\n  }\n\n  obtener_plantilla_validacion(campo,id){\n    return {\n      validacion: undefined,\n      mensaje: undefined,\n      campo: campo,\n      id: id\n    }\n  }\n\n  validar_correo() {\n    const { correo } = this.campos;\n    const {value: valor_correo } = correo;\n    let informacion_validacion = this.obtener_plantilla_validacion("correo",0);\n    const expresion_regular_correo =\n      /^[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;\n    const es_valido = expresion_regular_correo.test(valor_correo);\n\n    if (!valor_correo)\n      return Object.assign({}, informacion_validacion, {\n        validacion: false,\n        mensaje: "Esta vacio el campo correo"\n      });\n\n    if (!es_valido)\n      return Object.assign({}, informacion_validacion, {\n        validacion: false,\n        mensaje: "El correo que ingreso es incorrcto"\n      });\n\n    return Object.assign({}, informacion_validacion, {\n      validacion: true,\n      mensaje: "El correo que ingreso es correcto"\n    });\n  }\n\n  validar_telefono() {\n    const { telefono } = this.campos;\n    const { value: valor_telefono } = telefono;\n\n    let informacion_validacion = this.obtener_plantilla_validacion("telefono","1");\n\n    if (!valor_telefono)\n      return Object.assign({}, informacion_validacion, {\n        validacion: false,\n        mensaje: "Esta vacio el campo telefono"\n      });\n\n    if (valor_telefono.length !== 10)\n      return Object.assign({}, informacion_validacion, {\n        validacion: false,\n        mensaje: "El campo telefono debe tener 10 digitos"\n      });\n\n    if (valor_telefono[0] === 0)\n      return Object.assign({}, informacion_validacion, {\n        validacion: false,\n        mensaje: "El telefono que ingreso es incorrecto"\n      });\n\n    return Object.assign({}, informacion_validacion, {\n      validacion: true,\n      mensaje: "El telefono que ingreso es correcto"\n    });\n  }\n\n  validar_nombre_completo() {\n    const { nombre_completo } = this.campos; \n    const { value } = nombre_completo;\n    const valor_nombre_completo = value.split(" ");\n\n    let informacion_validacion = this.obtener_plantilla_validacion("nombres_completo","2");\n\n    if (!value)\n      return Object.assign({}, informacion_validacion, {\n        validacion: false,\n        mensaje: "Esta vacio el campo nombres completo"\n      });\n\n    if (valor_nombre_completo.length !== 2)\n      return Object.assign({}, informacion_validacion, {\n        validacion: false,\n        mensaje: "Solo se puede ingresar 2 nombres"\n      });\n\n    return Object.assign({}, informacion_validacion, {\n      validacion: true,\n      mensaje: "El nombre completo que ingreso es correcto"\n    });\n  }\n\n  validar_direccion() {\n    const { direccion } = this.campos;\n    const { value: valor_direccion } = direccion;\n    let informacion_validacion = this.obtener_plantilla_validacion("direccion","3");\n\n    if (!valor_direccion)\n      return Object.assign({}, informacion_validacion, {\n        validacion: false,\n        mensaje: "Esta vacio el campo direccion"\n      });\n\n    if (valor_direccion.length > 255)\n      return Object.assign({}, informacion_validacion, {\n        validacion: false,\n        mensaje: "Esta la direccion solo puede tener 255 caracteres"\n      });\n\n    return Object.assign({}, informacion_validacion, {\n      validacion: true,\n      mensaje: "La dirección que ingreso es correcto"\n    });\n  }\n\n  validar_ciudad() {\n    const { ciudad } = this.campos;\n    const { value: valor_ciudad } = ciudad;\n    let informacion_validacion = this.obtener_plantilla_validacion("ciudad","4");\n\n    if (!valor_ciudad)\n      return Object.assign({}, informacion_validacion, {\n        validacion: false,\n        mensaje: "Esta vacio el campo ciudad"\n      });\n\n    return Object.assign({}, informacion_validacion, {\n      validacion: true,\n      mensaje: "La ciudad que ingreso es correcto"\n    });\n  }\n\n  validar_pais() {\n    const { pais } = this.campos;\n    const { value: valor_pais } = pais;\n    let informacion_validacion = this.obtener_plantilla_validacion("pais","5");\n    if (!valor_pais)\n      return Object.assign({}, informacion_validacion, {\n        validacion: false,\n        mensaje: "Esta vacio el campo país"\n      });\n\n    return Object.assign({}, informacion_validacion, {\n      validacion: true,\n      mensaje: "El pais que ingreso es correcto"\n    });\n  }\n\n  validar_codigo_postal() {\n    const { codigo_postal } = this.campos;\n    const { value: valor_codigo_postal }  = codigo_postal;\n    let informacion_validacion = this.obtener_plantilla_validacion("codigo_postal","6");\n\n    if (!valor_codigo_postal)\n      return Object.assign({}, informacion_validacion, {\n        validacion: false,\n        mensaje: "Esta vacio el campo codigo postal"\n      });\n\n    return Object.assign({}, informacion_validacion, {\n      validacion: true,\n      mensaje: "El codigo postal que ingreso es correcto"\n    });\n  }\n\n  buscar_campo(campo){\n  \n    switch (campo) {\n      case "correo":\n        return this.validar_correo();\n      case "telefono":\n        return this.validar_telefono();\n      case "nombre_completo":\n        return this.validar_nombre_completo();\n      case "direccion":\n        return this.validar_direccion();\n      case "ciudad":\n        return this.validar_ciudad();\n      case "pais":\n        return this.validar_pais();\n      case "codigo_postal":\n        return this.validar_codigo_postal();\n      default:\n        return undefined;\n    }\n  }\n\n  validar_formulario() {\n\n    const array_validacion_formulario = [];\n\n    Object.keys(this.campos).forEach(\n      (nombre) => (array_validacion_formulario.push(this.buscar_campo(nombre)))\n    );\n\n    return { array_validacion_formulario };\n  }\n\n  limpiar_campos() {\n    Object.keys(this.campos).forEach(\n      (nombre) => (this.campos[nombre].value = "")\n    );\n  }\n\n  comprobar_validacion_formulario() {\n    this.mensaje_advertencia.quitar_advertencia();\n    const { array_validacion_formulario } = this.validar_formulario();\n    const resultado_validacion = array_validacion_formulario.every((campos) => campos.validacion);\n\n    if (!resultado_validacion) {\n      array_validacion_formulario.forEach((campo) => {\n        if (!campo.validacion) this.mensaje_advertencia.buscar_clave(campo);\n      });\n    } else {\n      this.mensaje_advertencia.generar_confirmacion_formulario();\n      this.limpiar_campos();\n    }\n  }\n}\n\n\n\n\n//# sourceURL=webpack://checkout-page-master/./js/Formulario.js?',
        );

        /***/
      },

    /***/ './js/Mensaje_adevretencia.js':
      /*!************************************!*\
  !*** ./js/Mensaje_adevretencia.js ***!
  \************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Mensaje_advertencia": () => (/* binding */ Mensaje_advertencia)\n/* harmony export */ });\nclass Mensaje_advertencia {\n  constructor() {\n    this.advertencia_email = document.getElementById("advertencia_correo");\n    this.advertencia_telefono = document.getElementById("advertencia_telefono");\n    this.advertencia_nombres_completo = document.getElementById(\n      "advertencia_nombres_completo"\n    );\n    this.advertencia_direccion = document.getElementById(\n      "advertencia_direccion"\n    );\n    this.advertencia_ciudad = document.getElementById("advertencia_ciudad");\n    this.advertencia_pais = document.getElementById("advertencia_pais");\n    this.advertencia_codigo_postal = document.getElementById(\n      "advertencia_codigo_postal"\n    );\n    this.confirmacion_formulario = document.getElementById(\n      "confirmacion_formulario"\n    );\n  }\n\n  buscar_clave(validacion) {\n    const { campo, mensaje, id } = validacion;\n\n    switch (campo) {\n      case "correo":\n        this.generar_advertencia_email(mensaje, id);\n        return;\n\n      case "telefono":\n        this.generar_advertencia_telefono(mensaje, id);\n        return;\n\n      case "nombres_completo":\n        this.generar_advertencia_nombres_completo(mensaje, id);\n        return;\n\n      case "direccion":\n        this.generar_advertencia_direccion(mensaje, id);\n        return;\n\n      case "ciudad":\n        this.generar_advertencia_ciudad(mensaje, id);\n        return;\n\n      case "pais":\n        this.generar_advertencia_pais(mensaje, id);\n        return;\n\n      case "codigo_postal":\n        this.generar_advertencia_codigo_postal(mensaje, id);\n        return;\n    }\n  }\n\n  generar_advertencia_email(mensaje, id) {\n    this.advertencia_email.innerText = mensaje;\n    this.mostar_advertencia(id);\n  }\n\n  generar_advertencia_telefono(mensaje, id) {\n    this.advertencia_telefono.innerText = mensaje;\n    this.mostar_advertencia(id);\n  }\n\n  generar_advertencia_nombres_completo(mensaje, id) {\n    this.advertencia_nombres_completo.innerText = mensaje;\n    this.mostar_advertencia(id);\n  }\n\n  generar_advertencia_direccion(mensaje, id) {\n    this.advertencia_direccion.innerText = mensaje;\n    this.mostar_advertencia(id);\n  }\n\n  generar_advertencia_ciudad(mensaje, id) {\n    this.advertencia_ciudad.innerText = mensaje;\n    this.mostar_advertencia(id);\n  }\n\n  generar_advertencia_pais(mensaje, id) {\n    this.advertencia_pais.innerText = mensaje;\n    this.mostar_advertencia(id);\n  }\n\n  generar_advertencia_codigo_postal(mensaje, id) {\n    this.advertencia_codigo_postal.innerText = mensaje;\n    this.mostar_advertencia(id);\n  }\n\n  generar_confirmacion_formulario() {\n    this.confirmacion_formulario.innerText =\n      "Enviado con exito!, Gracias por tu compra";\n    this.mostar_confirmacion(0);\n  }\n\n  mostar_advertencia(id) {\n    document\n      .getElementsByClassName("mensaje_advertencia")\n      [id].classList.add("mensaje_advertencia_activo");\n  }\n  mostar_confirmacion(id) {\n    document\n      .getElementsByClassName("mensaje_confirmacion")\n      [id].classList.add("mensaje_confirmacion_activo");\n    setTimeout(() => {\n      this.quitar_confirmacion(id);\n    }, 6000);\n  }\n\n  quitar_advertencia() {\n    const advertencia = document.getElementsByClassName("mensaje_advertencia");\n    for (var i = 0; i < advertencia.length; i++) {\n      advertencia[i].classList.remove("mensaje_advertencia_activo");\n    }\n  }\n\n  quitar_confirmacion(id) {\n    document\n      .getElementsByClassName("mensaje_confirmacion")\n      [id].classList.remove("mensaje_confirmacion_activo");\n  }\n}\n\n\n\n\n//# sourceURL=webpack://checkout-page-master/./js/Mensaje_adevretencia.js?',
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__,
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module',
        });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__('./js/App.js');
  /******/
  /******/
})();
