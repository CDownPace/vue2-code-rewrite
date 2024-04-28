import Vue from '../module/vue'

//render > template > el
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
                    age: 1
                },
                {
                    name: '李四',
                    age: 2
                }
            ],
            test: {
                a: {
                    b: 'testvalue'
                }
            }
        }
    }
})

// console.log(vm.students[0])
// vm.test.a.b=2
// console.log(vm,'test.a')
// console.log(vm.test.a.b,'test.a')