export type Encuesta = {
    id: number;
    test: number;
    respuesta: string;
    pregunta: number; //tenemos que saber a que pregunta hace referencia
}