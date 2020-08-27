export default {
    actions: {
        async signup(ctx: any, user: object) {
            const res = await fetch('http://localhost:1337', {
                method: "POST",
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            });

            const response = await res.json();

            if (localStorage.getItem("token")) localStorage.token = response.token;
            else localStorage.setItem("token", JSON.stringify(response.token));

            ctx.commit('setAuthData', response.message);
        },

        async login(ctx: any, user: object) {
            const res = await fetch('http://localhost:1337', {
                method: "POST",
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            });

            const response = await res.json();

            if (localStorage.getItem("token")) localStorage.token = response.token;
            else localStorage.setItem("token", JSON.stringify(response.token));

            ctx.commit('setAuthData', response.message);
        },

        async verifyUser(ctx: any, token: string) {
            console.log('Verify user function');
        }
    },
    mutations: {
        setAuthData(state: any, data: string) {
            state.authData = data;
        }
    },
    state: {
        authData: ""
    },
    getters: {
        getAuthData(state: any) {
            return state.authData;
        }
    }
};
