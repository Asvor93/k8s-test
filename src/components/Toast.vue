<template>
    <div ref="root" id="myToast" class="toast show bg-secondary text-white" role="alert" aria-live="assertive" aria-atomic="true" :data-bs-delay="delay">
        <div class="toast-header">
            <strong class="me-auto">{{title}}</strong>
            <small>{{date}}</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
            {{content}}
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue"
import { Toast } from "bootstrap"

export default defineComponent({
    name: "Toast",
    props: {
        id: Number,
        title: String,
        content: String,
        date: String,
        delay: Number
    },
    mounted() {
        // Calling the bootstrap toast module
        const bsToast = new Toast(this.$el)
        bsToast.show()
    }
})
</script>
