<template>
  <div class="pb-4 text-center">
    <div class="bg-primary p-2">
      <h5>Add Student Details</h5>

<form @submit.prevent="submitForm" id="AddStudentForm">
</form>
</div>

    <div>
      <label for="name" class="font-medium fw-bold">Name :-</label>
      <input
        type="text"
        id="stuname"
        v-model="formData.name"
        placeholder="Write your name"
        required
        class="border border-secondary py-2  my-3 mx-4  w-50"
      />
    <div>
      <label for="email" class="font-medium fw-bold"> Email :- </label>
      <input
        type="text"
        id="stuname"
        v-model="formData.email"
        placeholder="Write your Email"
        required
        class="border border-secondary py-2 my-3 mx-4  w-50"
      />
    </div>
    <div>
      <label for="contact" class="font-medium fw-bold">Phone :-</label>
      <input
        type="number"
        placeholder="Enter Your Contact Number"
        v-model.trim="formData.contact"
        max="10"
        required
        class="border border-secondary py-2 my-3 mx-4 w-50"
      />
    </div>
    </div>

<div>
  <router-link to="/">
  <button type="submit" class="btn btn-success text-dark px-5 py-2 mx-2 my-3" @click="submitForm">
    Add
  </button>
</router-link>

  <router-link to="/">
    <button class="btn btn-secondary py-2 px-6 mr-6">Back To Home</button>
  </router-link>
</div>
  </div>
</template>
<script setup lang="ts">
import { reactive, computed} from 'vue'
import axios from 'axios'

    const formData = reactive({
      name: '',
      email: '',
      contact: ''
    })

    const nameError =computed(()=>{
      if (formData.name =='') return "Name is required"
      return " "
    });

    const emailError = computed(() => {
  if (formData.email =='') return "Email is required"
  if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) return "Invalid email format"
  return ""
})
const contactError = computed(()=>{
  if (formData.contact =='') return "Contact is required"
  return " "
})
let cansubmit =computed(()=>{
  return !nameError.value && !emailError.value && !contactError.value
})
    async function submitForm() {
      try {
        const response = await axios.post('http://localhost:3000/users', formData)
        console.log(response.data)
      } catch (error) {
        console.error(error)
      }
      {
      alert('form successfully Added')
    }
    };

</script>
<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input{
  border-radius: 5px;
}
</style>



