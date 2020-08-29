export default {
    actions: {
        async signupUser(ctx: any, user: object) {
            const res = await fetch('http://localhost:1337/api/user/signup', {
                method: "POST",
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            });

            const response = await res.json();

            localStorage.setItem("token", JSON.stringify(response.token));
            ctx.commit('setAuthResult', response.message);
        },

        async loginUser(ctx: any, user: object) {
            const res = await fetch('http://localhost:1337/api/user/login', {
                method: "POST",
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            });

            const response = await res.json();

            localStorage.setItem("token", JSON.stringify(response.token));
            ctx.commit('setAuthResult', response.message);
        },

        async verifyUser(ctx: any, token: string) {
            const res = await fetch('http://localhost:1337/api/user/verify', {
                method: "POST",
                body: JSON.stringify(token),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            });

            const response = await res.json();
            ctx.commit('setVerifiedData', response.data, response.result);
        }
    },
    mutations: {
        setAuthResult(state: any, data: string) {
            state.authResult = data;
        },
        setVerifiedData(state: any, data: object) {
            state.userData = data;
        },
        setVerifiedResult(state: any, result: boolean) {
            state.isLogged = result;
        }
    },
    state: {
        authResult: "",
        userData: {},
        isLogged: false
    },
    getters: {
        getAuthResult(state: any) {
            return state.authResult;
        },
        getUserData(state: any) {
            return state.userData;
        },
        isLogged(state: any) {
            return state.isLogged;
        }
    }
};
