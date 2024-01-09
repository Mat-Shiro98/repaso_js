export const handler = async (event) => {
    // Configuración de las políticas de CORS
    const responseHeaders = {
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,GET"
    }
}