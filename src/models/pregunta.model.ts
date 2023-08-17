export type Pregunta = {
    id: number;
    pregunta: string;
    tipo_estructura: number;
    tipo_pregunta: number;
    tipo_edad: number;
    colegio: string;
}

export type PreguntasTest = {
    id: number;
    test: number;
    pregunta: number;
    colegio: string;
}