import Vue from '../module/vue'


//options API
const vm = new Vue({
    el: '#app',
    data() {
        return {
            title: 'student-list',
            classNum: 1,
            teacher: ['foo', 'bar'],
            students: [
                {
                    name: '张三',
                    id: 1
                },
                {
                    name: '李四',
                    id: 2
                }
            ]
        }
    }
})