import { createServer } from "./config/server";

import config from "./config/env";
const { port } = config

const server = createServer();

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});