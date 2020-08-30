<template>
    <div class="form">
        <div v-show="getUrlStatus">{{ getUrlStatus }}</div>
        <div class="alertMessage" v-show="alertMessage">{{ alertMessage }}</div>
        <form class="form-inline">
            <div class="form-row">
                <div class="col-auto">
                    <label class="sr-only" for="url">enter url</label>
                    <input type="text" class="form-control" id="url" placeholder="Enter url" v-model="url">
                    <button type="submit" class="btn btn-primary" @click.prevent="sendUrl(url)">Submit</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
    name: 'LinkForm',
    data() {
        return {
            url: "",
            alertMessage: ""
        };
    },
    methods: {
        ...mapActions(['getShortUrl']),
        sendUrl(url) {
            try {
                const isUrl = new URL(url) ? true : false;
                if (isUrl) {
                    const urlForm = {
                        full: url
                    };
                    this.getShortUrl(urlForm);
                }
            } catch {
                this.alertMessage = 'Invalid url. Try again, please';
            }
        }
    },
    computed: mapGetters(['getUrls', 'getUrlStatus'])
}

</script>

<style lang="scss" scoped>
.form {
    margin: 5rem auto;
    text-align: center;
}

form {
    display: flex;
    justify-content: center;
    text-align: center;
}

</style>
