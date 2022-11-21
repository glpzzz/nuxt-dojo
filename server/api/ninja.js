export default defineEventHandler(async (event) => {
    const {name} = getQuery(event)
    const {age} = await readBody(event)
    return {
        message: `Hello, ${name}! You are ${age}yo.`,
        params: getQuery(event),
        body: await readBody(event),
    }
})