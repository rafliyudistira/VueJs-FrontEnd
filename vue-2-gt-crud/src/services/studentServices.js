import http from "../http-common";

class studentServices{
    create(data){
        return http.post("/insert", data);
    }
    getAll(){
        return http.get("/getAll");
    }
    deleteStudents(id){
        return http.delete(`/delete/${id}`);
    }
    updateStudents(id, data){
        return http.put(`/update/${id}`, data);
    }
    getStudentsById(id) {
        return http.get(`/getData/${id}`)
    }
}

export default new studentServices();