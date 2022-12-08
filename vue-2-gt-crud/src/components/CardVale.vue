<template>
<div>
    <router-link type="button" class="btn btn-primary ms-4" to="/add" v-show="!succes">Add Data</router-link>
<div class="d-flex flex-wrap justify-content-start justify-content-center ms-3 me-3 mt-3">
    <div v-for="item in studentsData" :key="item.id" class="card ms-3 mt-3" v-show="!succes" style="width: 25rem;">
        <div class="card-body row g-3">
            <h3 class="card-title">{{ item.nama + ", " + item.umur + " Years Old " }}</h3>
            <h5 class="card-titile mb-3">{{ item.deskripsi_diri }}</h5>
            <div class="col-auto">
            <p>Email</p>
            <p>Soft Skill</p>
            <p>Hard Skill</p>
            <p>Interest</p>
            </div>
            <div class="col-auto">
            <p>:</p>
            <p>:</p>
            <p>:</p>
            <p>:</p>
            </div>
            <div class="col-auto">
            <p class="card-text">{{item.email}}</p>
            <p class="card-text">{{item.soft_skill}}</p>
            <p class="card-text">{{item.hard_skill}}</p>
            <p class="card-text">{{item.interest}}</p>
            </div>
            
            <div>
                <router-link :to="{ path: '/update/' + item.id }">
                    <button type="button" class="btn btn-primary mt-3">Update</button>
                </router-link>
                <router-link :to="{ path: '/delete/' + item.id }">
                <button type="button" class="btn btn-danger mt-3 ms-2" @click.prevent="deleteStudentsFunc(item.id)">Delete</button>
                </router-link>
                <img class="male" v-if="item.jenis_kelamin == 'male'" src="../assets/img/male.png" alt="male">
                <img class="female" v-else src="../assets/img/female.png" alt="female">
            </div>
        </div>
        
    </div>
    <div>
        <FormSucces v-show="succes"></FormSucces>
    </div>
    </div>
    </div>
</template>

<script>
import studentServices from "../services/studentServices"
import FormSucces from "./FormSucces.vue"

export default {
    name: 'CardVale',

     methods : {
        getStudents(){
            studentServices.getAll()
                .then(response => {
                    this.studentsData = response.data;
                    console.log(this.studentsData);
                })
                .catch(e => {
                    console.log(e);
                });
        },
        deleteStudentsFunc(id){
            let scope = this;
            
            if(confirm("Apakah anda yakin hapus?")){
                studentServices.deleteStudents(id)
                    .then(response => {
                        console.log(response.data);
                        scope.$emit('deleteEmit');
                        // this.succes = true;
                    })
                    .catch(e => {
                        console.log(e);
                    });
                // location.reload();
            }else{
                alert("Hapus dibatalkan!")
            }
        }
    },
    mounted(){
        this.getStudents();
    },
    data(){
        return{
            studentsData : null,
            succes : false
        }
    },
    components:{
        FormSucces,
    }
}
</script>

<style scoped>
   .male {
       width: 50px;
       margin-left: 157px;
   }
   .female {
       width: 40px;
       margin-left: 165px;
   }
</style>
