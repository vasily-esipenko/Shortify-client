<template>
    <div class="form">
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

<script lang="ts">
import {mapActions, mapGetters} from 'vuex';

export default {
    name: 'LinkForm',
    data() {
        return {
            url: ""
        };
    },
    methods: {
        ...mapActions(['getShortUrl']),
        sendUrl(url: string) {
            try {
                const isUrl: boolean = new URL(url) ? true : false;
                if (isUrl) {
                    const urlForm = {
                        full: url
                    };
                    this.getShortUrl(urlForm);
                }
            } catch {
                console.log('Invalid url');
            }
        }
    }
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
