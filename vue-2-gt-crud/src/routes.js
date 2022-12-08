import HalamanUtamaPages from "./pages/HalamanUtamaPages.vue";
import AddStudent from "./pages/AddStudent.vue"
import UpdateStudent from "./pages/UpdateStudent.vue"

export default[
    {
        path : "",
        component : HalamanUtamaPages,
    },
    {
        path : "/add",
        component : AddStudent,
    },
    {
        path: `/update/:id`,
        component: UpdateStudent
    }
]