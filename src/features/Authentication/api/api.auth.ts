import { instance } from "shared/api/api.config"

export default class AuthService {
    static async login (login: string, password: string) {
        return await instance
            .post("/authentication/sign-in",
                JSON.stringify({login, password}),
                { headers: {'Content-Type': 'application/json'}})
            .then(res => {
                localStorage.setItem("token", res.data.accessToken);
            })
    }
    
    static logout() {
        instance.get("/authentication/logout")
            .then((res) => {
                localStorage.setItem("token", '');
                window.location.reload();
            })
    }
}
