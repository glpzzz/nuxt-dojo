export default defineEventHandler((event) => {
    const {code} = event.context.params
    const {apiKey} = useRuntimeConfig()
    return {
        apiKey: apiKey,
        code: code,
    }
})