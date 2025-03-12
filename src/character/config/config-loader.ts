export const configLoader = () => {
    return {
        port: process.env.PORT || 3000,
        apiKey: process.env.API_KEY
    }
};