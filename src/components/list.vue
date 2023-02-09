<template>
  <div>
    <div >
        <h2 class="text-end">
      <router-link to="/add">
        <i class="bi bi-person-fill-add btn btn-dark m-2">  Add Students</i>
      </router-link>
    </h2>
    </div>
    <div class="m-3">

      <table class="table p-3">
        <thead class="text-Drak fs-5" style="text-decoration:underline;" >
          <tr>
            <th class="py-4">User Id</th>
            <th class="py-4">Name</th>
            <th class="py-4">Email</th>
            <th class="py-4">Contact</th>
            <th class="py-4">Action</th>
          </tr>

        </thead>
        <tbody>
          <tr v-for="Student in StudentData" :key="Student.id">
            <td>{{ Student.id }}</td>
            <td>{{ Student.name }}</td>
            <td>{{ Student.email }}</td>
            <td>{{ Student.contact }}</td>
            <td>
              <router-link :to="{name: 'view', params:{id:Student.id}}">
                <i
                  class="bi bi-eye-fill mx-2 text-secondary"
                  style="font-size: 25px"
                ></i>
              </router-link>
              <router-link :to="{name: 'edit', params:{id:Student.id}}">
                <i
                  class="bi bi-pencil-square mx-2 text-secondary"
                  style="font-size: 20px"
                ></i>
              </router-link>

              <i
                class="bi bi-trash3 mx-2 text-danger"
                @click="deleteStudent(Student.id)"
                style="font-size: 20px; cursor: pointer"
              ></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup  >
import { onMounted, ref } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";


let StudentData = ref([]);
const getStudentsData=async()=>{
  const res=await axios.get('http://localhost:3000/users');
  StudentData.value = res.data;
};

  onMounted(getStudentsData);

  let deleteStudent = async (id) => {
  if (!window.confirm("Are You Sure ?")) {
    return;
  }

  try {
    const res = await axios.delete(`http://localhost:3000/users/${id}`);
    StudentData.value = StudentData.value.filter(
      (student) => student.id !== id
    );
  } catch (error) {
    error.value =error;
  
 }
};

</script>
<style></style>
