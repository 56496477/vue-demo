import List from './page/list.vue'
import topic from './page/topic.vue'

export default function(router) {
    router.map({
        '*': {
            component: List
        },
        'topic/:id': {
            component: topic
        }
    })
}