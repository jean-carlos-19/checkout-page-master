import { Formulario } from './js/Formulario';

const formulario = new Formulario();
formulario.obtener_boton_enviar().addEventListener('click', (evento) => {
  evento.preventDefault();
  formulario.comprobar_validacion_formulario();
});
