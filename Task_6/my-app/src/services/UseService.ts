import axios from "axios";

export class UserService{
    private static URL:string ='https://dummyjson.com'

    public static getAllUsers(){
        let UserURL:string = `${this.URL}/users`
        return axios.get(UserURL);
    }
}