import { createVNode, render } from "vue"
import Toast from "@/components/Toast.vue"

export default function useToast() {
    let toastId = 0

    function getToastContainer() {
        let container = document.querySelector(".toast-container")

        if (!container) {
            container = document.createElement("div")
            container.className = "toast-container position-absolute p-3 top-0 end-0"
            document.body.appendChild(container)
        }

        return container
    }

    function setupVNodeProps(id: number, title: string, content: string): any {
        return {
            id,
            title,
            content,
            date: "Now",
            delay: 5000,
        }
    }

    function setupVNode(title: string, content: string): void {
        const id = toastId++
        const container = getToastContainer()

        const toastVNode = createVNode(
            Toast,
            setupVNodeProps(id, title, content)
        )

        render(toastVNode, container)

        const myToastEl = document.getElementById('myToast')
        myToastEl?.addEventListener('hidden.bs.toast', () => {
            setTimeout(() => {
                render(null, container)
            }, 1000)
        })
    }

    function show(title: string, content: string): void {
        if (!content) return
        setupVNode(title, content)
    }

    return {
        show: show
    }
}
