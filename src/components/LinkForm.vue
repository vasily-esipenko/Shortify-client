<template>
    <div class="form">
        <form class="form-inline">
            <div class="form-group row-2">
                <div class="col-sm-1s">
                    <label class="sr-only" for="url">enter url</label>
                    <input type="text" class="form-control" id="url" placeholder="Enter url">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default {
    name: 'LinkForm',
}

</script>

<style lang="scss" scoped>
.form {
    margin: 3rem auto;
    text-align: center;
}

form {
    display: flex;
    justify-content: center;
    text-align: center;
}

</style>