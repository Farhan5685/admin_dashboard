<template>
  <v-container fluid>
    <h2 class="text-h4 font-weight-bold mb-6" :class="isDark ? 'text-white' : 'text-primary'">
      Manage Users
    </h2>

    <!-- Search Field -->
    <v-text-field
      v-model="search"
      label="Search by name"
      prepend-inner-icon="mdi-magnify"
      class="mb-4"
      variant="outlined"
      clearable
    />

    <!-- Add Button -->
    <v-btn color="cyan-darken-2" class="mb-4" @click="openAddDialog">
      <v-icon start>mdi-account-plus</v-icon>Add User
    </v-btn>

    <!-- Users Table with Pagination -->
    <v-card :class="isDark ? 'bg-grey-darken-3' : 'bg-grey-lighten-5'" elevation="8">
      <v-data-table
        :headers="headers"
        :items="filteredUsers"
        :items-per-page="5"
        class="elevation-1"
        item-value="email"
        dense
        :search="search"
        v-model:page="page"
        :footer-props="{
          itemsPerPageOptions: [5, 10, 15],
          itemsPerPageText: 'Users per page:',
        }"
      >
        <template #item.actions="{ item }">
          <v-icon small class="me-2" color="blue" @click="openEditDialog(item)">mdi-pencil</v-icon>
          <v-icon small color="red" @click="deleteUser(item)">mdi-delete</v-icon>
        </template>
      </v-data-table>
    </v-card>

    <!-- Add/Edit Dialog -->
    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title>{{ isEditing ? 'Edit User' : 'Add New User' }}</v-card-title>
        <v-card-text>
          <v-text-field v-model="form.name" label="Name" outlined />
          <v-text-field v-model="form.email" label="Email" outlined />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn text @click="dialog = false">Cancel</v-btn>
          <v-btn color="cyan-darken-2" @click="saveUser">
            {{ isEditing ? 'Update' : 'Add' }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()
const isDark = computed(() => theme.global.current.value.dark)

const headers = [
  { title: 'Name', value: 'name' },
  { title: 'Email', value: 'email' },
  { title: 'Actions', value: 'actions', sortable: false },
]

const users = ref([
  { name: 'Ali Raza', email: 'ali@example.com' },
  { name: 'Ayesha Khan', email: 'ayesha@example.com' },
  { name: 'Zain Khan', email: 'zain@example.com' },
  { name: 'Ahmed Shah', email: 'ahmed@example.com' },
  { name: 'Fatima Bibi', email: 'fatima@example.com' },
  { name: 'Usman Tariq', email: 'usman@example.com' },
  { name: 'Sarah Khan', email: 'sarah@example.com' },
])

const search = ref('')
const page = ref(1)

const filteredUsers = computed(() => {
  if (!search.value) return users.value
  return users.value.filter(user =>
    user.name.toLowerCase().includes(search.value.toLowerCase())
  )
})

const dialog = ref(false)
const isEditing = ref(false)
const form = reactive({ name: '', email: '' })
let editIndex = -1

const openAddDialog = () => {
  isEditing.value = false
  form.name = ''
  form.email = ''
  dialog.value = true
}

const openEditDialog = (user) => {
  isEditing.value = true
  editIndex = users.value.findIndex((u) => u.email === user.email)
  form.name = user.name
  form.email = user.email
  dialog.value = true
}

const saveUser = () => {
  if (form.name && form.email) {
    if (isEditing.value && editIndex !== -1) {
      users.value[editIndex] = { ...form }
    } else {
      users.value.push({ ...form })
    }
    dialog.value = false
  }
}

const deleteUser = (user) => {
  const index = users.value.findIndex((u) => u.email === user.email)
  if (index !== -1) users.value.splice(index, 1)
}
</script>

<style scoped>
.v-icon {
  cursor: pointer;
}
</style>
