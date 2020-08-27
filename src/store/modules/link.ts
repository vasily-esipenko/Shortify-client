export default {
    action: {
        async getShortUrl(ctx: any, url: object) {
            const res = await fetch('http://localhost:1337', {
                method: "POST",
                body: JSON.stringify(url),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            });

            const response = await res.json();

            ctx.commit('setUrls', response.url);
            ctx.commit('setUrlStatus', response.message);
        }
    },
    mutations: {
        setUrlStatus(state: any, status: string) {
            state.urlStatus = status;
        },
        setUrls(state: any, url: object) {
            state.urls.push(url);
        }
    },
    state: {
        urls: [],
        urlStatus: ""
    },
    getters: {
        getUrls(state: any) {
            return state.urls;
        },
        getUrlStatus(state: any) {
            return state.urlStatus;
        }
    }
};
