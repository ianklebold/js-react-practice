//npm add -D @types/jest para el intellisense de JEST
//Usualmente no se escribe mas de un describe por archivo test, pero si se puede hacer


describe('Pruebas primarias', () => { 
//Agrupador de test
    test('Titulo de la prueba', () => { 
    
    });
   
   test('Esta prueba no debe fallar', () => { 
       
       //1. Inicializacion
       const message1 = 'Hola mundo';
   
       //2. Estimulo
       const message2 = message1.trim();
   
       //3. Obsevar el comportamiento... esperado
       expect( message1 ).toBe( message2 ); //Oberservar message1 debe ser igual a message2
       
    });
    
 });
