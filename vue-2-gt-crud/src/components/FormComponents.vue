<template>
<div class="container p-2 mt-4">
 <router-link class="btn btn-primary " v-show="!succes" type="button" to="/">Back</router-link>
  <div class="row justify-content-center my-5">
     <div class="col-6 p-5 rounded border border-primary"  v-show="!succes">
        <form class=""  @submit.prevent="inputStudents">
          <h3 class="text-center mb-5">ADD STUDENT</h3>
        <div class="row">
            <div class="form-group col-md-6">
            <label for="StudentName">Student Name</label>
            <input v-model="studentsData.nama" type="text" class="form-control" id="StudentName" placeholder="Student Name">
            </div>
            <div class="form-group col-md-6">
            <label for="SoftSkill">soft Skills</label>
            <input v-model="studentsData.soft_skill" type="text" class="form-control" id="softSkill" placeholder="soft Skill" >
            </div>
        </div>
        <div class="row mt-3">
            <div class="form-group col-md-3">
            <label for="StudentAge">Student Age</label>
            <input v-model="studentsData.umur" type="number" class="form-control" id="StudentAge" placeholder="age" >
            </div>
            <div class="form-group col-md-3">
            <label for="gender">Gender</label>
            <select v-model="studentsData.jenis_kelamin" id="gender" class="form-control">
                <option selected disabled value="">Choose...</option>
                <option>male</option>
                <option>Female</option>
            </select>
           
            </div>
            <div class="form-group col-md-6">
            <label for="hardSkill">Hard Skill</label>
            <input v-model="studentsData.hard_skill" type="text" class="form-control" id="hardSkill" placeholder="hard skill" >
            </div>
        </div>
    <div class="row mt-3">
        <div class="form-group col-md-6">
            <label for="studentEmail">Student Email</label>
            <input v-model="studentsData.email" type="Email" class="form-control" id="studentEmail" placeholder="Studen Email" >
        </div>
        <div class="form-group col-md-6">
            <label for="interest">Interest</label>
            <select v-model="studentsData.interest" id="interest" class="form-control">
                <option selected disabled value="">Choose...</option>
                <option>Data Science</option>
                <option>Network</option>
                <option>Web Fronted</option>
                <option>Web Backend</option>
                <option>Mobie Apps</option>
            </select>
            
        </div>
    </div>
    <div class="row mt-3">
        <div class="form-group col-md-15">
            <label for="selfDescription">Self Description</label>
            
        <textarea v-model="studentsData.deskripsi_diri" name="text" id="selfDescription" cols="77" rows="4" placeholder="Ambisious person"></textarea>
        </div>
    </div>
        <div class="form-group">
            <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck">
            <label class="form-check-label" for="gridCheck">
                Check me out
            </label>
            </div>
        </div>
        <button type="submit" class="btn btn-primary mt-3">Submit</button>
        </form>
    </div>
</div>
        <div v-show="succes">
            <FormSucces ></FormSucces>
        </div>
</div>
</template>

<script>
import studentService from "../services/studentServices"
import FormSucces from "./FormSucces.vue"

export default {
    name: "FormCom",
    components: {
        FormSucces,
    },
    data() {
        return {
            studentsData: {
                deskripsi_diri: null,
                email: null,
                hard_skill: null,
                interest: "",
                jenis_kelamin: "",
                nama: null,
                soft_skill: null,
                umur: null,
            },
            succes: false,
        };
    },
    methods: {
        inputStudents() {
            let data = this.studentsData;
            let id = this.$route.params.id;
            let route = this.$route.fullPath;
            if (route === "/add") {
                studentService.create(data)
                    .then((response) => {
                        console.log(response.data);
                        this.succes = true;
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            } else {
                studentService.updateStudents(id, data)
                    .then((response) => {
                        console.log(response.data);
                        this.succes = true;
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            }
        },
        getStudentsById() {
            let id = this.$route.params.id;
            studentService.getStudentsById(id)
                .then((response) => {
                    this.studentsData = response.data;
                    console.log(this.studentsData);
                })
                .catch((e) => {
                    console.log(e);
                });
        },
    },
    mounted() {
        if ((this.$route.params.id > 0)) {
            this.getStudentsById();
        }
    },
};

</script>

<style>

</style>