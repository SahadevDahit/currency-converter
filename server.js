import http from 'http'
import app from "./app/app.js"

const server = http.createServer(app)

server.listen(4000, 'localhost', () => {
    console.log(`Server is running on port 4000`)
})