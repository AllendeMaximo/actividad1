import React from 'react';
import Card from './card';
import '../index.css'; 
import mila from '../img/milanesa.jpg';import coli from '../img/pure de coliflor.jpg';import empanadas from '../img/empanadas.jpg';import ensalada from '../img/ensalada.jpg';import fideos from '../img/fideos.jpg';import osobuco from '../img/osobuco.jpg';


function Cards() {
  return (
    <div className="App">
     <Card
          imageSrc={mila}
          name="Milanesa"
          description={
            <>
              <p>Paso 1: Pelar un ajos y picar junto con el perejil.</p>
              <p>Paso 2: Colocar los huevos en un bowl y batir hasta disolverlos bien. Luego agregar el perejil, los ajos y condimentar con sal y pimienta.</p>
              <p>Paso 3: Colocar la carne en la mezcla anterior, deje unos minutos, retirar y pasar por pan rallado.</p>
              <p>Paso 4: En una sartén con abundante aceite caliente freír las milanesas. Retirar y escurrir en papel absorbente.</p>
              <div className="ingredient">
                <p>🧄 X 1</p>
                <p>🥚 X 2 </p>
                <p>🥩 X 4-6 u</p>
                <p>🧂 a gusto</p>
            </div>
            
            </>
          }
        />
        <Card
          imageSrc={coli}
          name="Pure de coliflor"
          description={
            <>
              <p>Paso 1: Saltear la coliflor con manteca con los dientes de ajo.</p>
              <p>Paso 2: Agregar agua y tapar para que se cocinen por 10 minutos.</p>
              <p>Paso 3: Procesar la coliflor y regresar a la cocción.</p>
              <p>Paso 4: Agregar leche y más manteca para tener un puré terso y homogéneo.</p>
              <p>Paso 5: Por último agregar el queso gouda rallado.</p>
              <div className="ingredient">
                <p>🧄 X 1</p>
                <p>🥚 X 2 </p>
                <p>🥩 X 4-6 u</p>
                <p>🧂 a gusto</p>
            </div>
            </>
          }
        />
        <Card
          imageSrc={empanadas}
          name="Empanadas"
          description={
            <>
              <p>Paso 1: Colocar la harina en forma de anillo sobre la mesa, Poner en el centro la sal, la manteca y los huevos.</p>
              <p>Paso 2: Mezclar los ingredientes del centro mientras incorpora la harina y la leche, hasta unir todo en un bollo tierno.</p>
              <p>Paso 3: En una sartén con abundante aceite caliente freír las milanesas. Retirar y escurrir en papel absorbente.</p>
              <p>Paso 4: Tapar la masa con un lienzo y dejarla descansar 1 hora, colocar en un bowl el jamón picado, el queso de  picadito, el queso rallado, la manteca blanda y pimienta a gusto. </p>
              <p>Paso 5: Amasar con la mano hasta obtener una pasta irreconocible. Ligue con los 2 huevos. </p>
              <div className="ingredient">
                <p>🧄 X 1</p>
                <p>🥚 X 2 </p>
                <p>🥩 X 4-6 u</p>
                <p>🧂 a gusto</p>
            </div></>
          }
          
        />
        <Card
          imageSrc={ensalada}
          name="Ensalada de atún y cebada"
          description={
            <>
              <p>Paso 1: Lavar la cebada. Ponerla en una olla con 2 tazas y 1/2 de agua.</p>
              <p>Paso 2: Agregar sal y hervir a fuego medio hasta que esté tierna. Colar y enfríar.</p>
              <p>Paso 3: Rallar la zanahoria, cortar los tomates, el apio y la cebolla.</p>
              <p>Paso 4: Picar el perejil y las aceitunas. Mezclar la mayonesa con el jugo de limón y el aceite de oliva.</p>
              <p>Paso 5: Abrir la lata de atún y sacarle el aceite. Mezclar todos los ingredientes y formar la ensalada.</p>
              <div className="ingredient">
                <p>🧄 X 1</p>
                <p>🥚 X 2 </p>
                <p>🥩 X 4-6 u</p>
                <p>🧂 a gusto</p>
            </div></>
          }
        />
        <Card
          imageSrc={fideos}
          name="Spaghetti con salsa bolognesa"
          description={
            <>
              <p>Paso 1: Saltear en una olla los vegetales picados. Sumar la carne y dorar.</p>
              <p>Paso 2: Salpimentar y revolver. Añadir la salsa y el laurel y las especias. Revolver, tapar y cocinar a fuego bajo 30 a 40 minutos.</p>
              <p>Paso 3: Hervir la pasta según indique el paquete. Colar y verter sobre la salsa.</p>
              <p>Paso 4: Agregar 1 pocillo del agua de cocción de la pasta. Revolver y servir.</p>
              <div className="ingredient">
                <p>🧄 X 1</p>
                <p>🥚 X 2 </p>
                <p>🥩 X 4-6 u</p>
                <p>🧂 a gusto</p>
            </div>
            </>
          }
        />
        <Card
          imageSrc={osobuco}
          name="Osobuco"
          description={
            <>
              <p>Paso 1: Cortar en cubos las zanahorias, apio y cebollas. Picar las hierbas En una olla de hierro (que pueda ir al horno), calentar el aceite.</p>
              <p>Paso 2: Incorporar el osobuco y salpimentar. Dorar la carne de ambos lados. Añadir las verduras y hierbas. Rehogar 5 minutos</p>
              <p>Paso 3: Agregar el vino, cocinar 1 o 2 minutos y tapar la olla. Llevarla a horno precalentado, medio-bajo (170º) de 65 minutos a 90  minutos.</p>
              <p>Paso 4: Servir con polenta, risotto o pasta.</p>
              <div className="ingredient">
                <p>🧄 X 1</p>
                <p>🥚 X 2 </p>
                <p>🥩 X 4-6 u</p>
                <p>🧂 a gusto</p>
            </div>
            </>
          }
        />
    </div>
  );
}

export default Cards;
