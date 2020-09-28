const lego1 = require("../images/lego1.jpg");
const lego2 = require("../images/lego2.jpg");
const laCaja1 = require("../images/laCaja1.jpg");
const laCaja2 = require("../images/laCaja2.jpg");
const spotify1 = require("../images/spotify1.jpg");
const spotify2 = require("../images/spotify2.jpg");
const avionero = require("../images/avionero.jpg");

export const setObject = (data, setProjectObject) => {
  let title = data;
  switch (data) {
    case "LEGO":
      setProjectObject({
        title,
        subtitle: "Publicidad para revista",
        text:
          'Lego le permite a los niños usar su imaginación no solamente cuando juegan, sino a toda hora, por eso se buscó la mínima expresión en la gráfica sin hacer uso de titulares. El concepto para está campaña se expresa en que LEGO es "más real que la realidad" por lo que la imagen de estas importantes figuras se completa con una pieza más. Trabajo realizado para 2do año de Publicidad en la Universidad Argentina de la Empresa (UADE).',
        img1: lego1,
        img2: lego2,
      });
      break;
    case "AVIONERO":
      setProjectObject({
        title,
        subtitle: "Gráfica para vía publica",
        text:
          'La página web de Avionero facilita la compra de pasajes de avión a los usuarios a último momento. Tratando de transmitir esa idea de manera gráfica, se llegó a una ilustración de una casa arquetípica con una pasarela de acceso a aviones en tono monocromático. La bajada en la parte inferior del aviso despeja cualquier duda que pueda sugerir la imagen atípica. Trabajo realizado para 2do año de Publicidad en la Universidad Argentina de la Empresa (UADE).',
        img1: undefined,
        img2: avionero,
      });
      break;
    case "SPOTIFY":
      setProjectObject({
        title,
        subtitle: "Activación",
        text:
          'Hace relativamente poco se comenzó a hablar más sobre la salud mental, y cómo esta es afectada por la depresión, la cual aflige a gran parte de la población mundial, sobretodo en personas jóvenes. En este marco, ¿qué puede hacer una marca para hacer foco en este tópico de manera honesta? La activación para Spotify, “Talk Mental Health” propone que el día 10 de octubre (día mundial de la salud mental) la plataforma ponga en mudo los primeros treinta segundos de todas las canciones, haciendo alusión al sentimiento desolador que pueden causar estos trastornos. Después de eso, se escuchará una grabación con el siguiente mensaje: “Cuando tenés depresión, lo que parecía acompañarte ya no lo hace. Si tenés algún problema de salud mental o conocés a alguien que podría tenerlos, no dudes en comunicarte con los siguientes números”. Los números de asistencia a la salud mental variarán de acuerdo a la región en la cual se reproduce el mensaje. Trabajo realizado para 2do año de Publicidad en la Universidad Argentina de la Empresa (UADE).',
        img1: spotify1,
        img2: spotify2,
      });
      break;
    case "LA CAJA":
      setProjectObject({
        title,
        subtitle: "Gráfica para vía publica",
        text:
        'Con un tono relajado y humorístico, el concepto de la campaña para la empresa de seguros La Caja se entiende en el titular “Que tu peor problema, sea uno cotidiano”, indicando que de los problemas más importantes, se encarga La Caja. Las gráficas son fotografías de stock con ligeros retoques, los cuales pueden adaptarse fácilmente a distintos medios. Trabajo realizado para 2do año de Publicidad en la Universidad Argentina de la Empresa (UADE).',
        img1: laCaja1,
        img2: laCaja2,
      });
      break;
    default:
      setProjectObject({ text: "ups!" });
  }
};
