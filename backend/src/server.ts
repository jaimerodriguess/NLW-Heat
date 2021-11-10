import { serverHttp } from "./app";

serverHttp.listen(4000, 
    () => console.log('Server is running port 4000'));