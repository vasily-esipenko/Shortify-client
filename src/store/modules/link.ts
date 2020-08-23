export default {
    action: {
        async sendUrl(ctx: any, url: object) {
            const res = await fetch('http://localhost:1337', {
                method: "POST",
                body: JSON.stringify(url),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            });


        }
    },
    mutations: {
    },
    state: {
        urls: []
    },
    getters: {}
};
