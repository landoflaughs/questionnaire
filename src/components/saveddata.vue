<template>
<div>
<template>
<v-tabs :value="2" background-color="primary">
    <v-tab @click="$router.push({name:'dolbyindex'})">主页</v-tab>
    <v-tab @click="$router.push({name:'ms12v25'})">问卷</v-tab>
    <v-tab @click="$router.push({name:'SavedData'})">问卷记录</v-tab>
</v-tabs>
</template>
<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Record</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="1500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              New Item
            </v-btn>
          </template>
          <!-- 根据版本弹出对应对话框,ms12v2-->
          <v-card  v-if="editedItem.ms12version == 'MS12V2'">
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="3"
                    md="3"
                  >
                    <v-text-field
                      v-model="editedItem.project_name"
                      label="project name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="3"
                    md="3"
                  >
                    <v-text-field
                      v-model="editedItem.ms12version"
                      label="MS12 version"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="3"
                    md="3"
                  >
                    <v-text-field
                      v-model="editedItem.committer"
                      label="committer"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="3"
                    md="3"
                  >
                    <v-text-field
                      v-model="editedItem.submit_time"
                      label="submit time"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.questionnaire_data.que1"
                      label="question 1" 
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.questionnaire_data.que2"
                      label="question 2"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.questionnaire_data.que3"
                      label="question 3"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
              
        <!-- * 1. What type of product is the device to be tested? -->
        
              <v-container
            class="px-1"
            fluid
        >
            <v-radio-group v-model="editedItem.questionnaire_data.que1">
                <v-col
            cols="12"
            sm="6"
            md="6"
          >
          * 1. What type of product is the device to be tested?
            <v-radio
                label="DMA"
                :value="1"
            ></v-radio>
            <v-radio
                label="DVB"
                :value=2
            ></v-radio>
            <v-radio
                label="TV"
                :value=3
            ></v-radio>
            <v-radio
                label="SPEAKER"
                :value=4
            ></v-radio>
            </v-col>
            </v-radio-group>
        </v-container>
        * 2. What type of product is the device to be tested?
        
        <v-container fluid>
            <!-- <p>{{ selected }}</p> -->
            <v-checkbox
            v-model="editedItem.questionnaire_data.que2"
            label="HEAAC"
            :value=1
            ></v-checkbox>
            <!-- v-if="contentItem.que1 == 1" -->
            <v-checkbox
            v-model="editedItem.questionnaire_data.que2"
            label="AAC"
            :value=2
            ></v-checkbox>
            <v-checkbox
            v-model="editedItem.questionnaire_data.que2"
            label="AVC"
            :value=3
            ></v-checkbox>
            <v-checkbox
            v-model="editedItem.questionnaire_data.que2"
            label="WAV"
            :value=4
            ></v-checkbox>
            <v-checkbox
            v-model="editedItem.questionnaire_data.que2"
            label="MIDI"
            :value=5
            ></v-checkbox>
        </v-container>
        * 3. ……………………
        <v-container
            class="px-3"
            fluid
        >
            <v-radio-group v-model="editedItem.questionnaire_data.que3" column>
            <v-radio
                label="to_be_defined"
                :value="1"
            ></v-radio>
            </v-radio-group>
        </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>


          <!-- 根据版本弹出对应对话框,ms12v1-->
          <v-card  v-if="editedItem.ms12version == 'MS12V1'">
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="3"
                    md="3"
                  >
                    <v-text-field
                      v-model="editedItem.project_name"
                      label="project name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="3"
                    md="3"
                  >
                    <v-text-field
                      v-model="editedItem.ms12version"
                      label="MS12 version"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="3"
                    md="3"
                  >
                    <v-text-field
                      v-model="editedItem.committer"
                      label="committer"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="3"
                    md="3"
                  >
                    <v-text-field
                      v-model="editedItem.submit_time"
                      label="submit time"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.questionnaire_data.que1"
                      label="question 1" 
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.questionnaire_data.que2"
                      label="question 2"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.questionnaire_data.que3"
                      label="question 3"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
              
        <!-- * 1. What type of product is the device to be tested? -->
        
              <v-container
            class="px-1"
            fluid
        >
            <v-radio-group v-model="editedItem.questionnaire_data.que1">
                <v-col
            cols="12"
            sm="6"
            md="6"
          >
          * 1. What type of product is the device to be tested?
            <v-radio
                label="DMA"
                :value="1"
            ></v-radio>
            <v-radio
                label="DVB"
                :value=2
            ></v-radio>
            <v-radio
                label="TV"
                :value=3
            ></v-radio>
            <v-radio
                label="SPEAKER"
                :value=4
            ></v-radio>
            </v-col>
            </v-radio-group>
        </v-container>


            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>

          

          



        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
  </template>
  </div>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Project Name',
          align: 'start',
          sortable: false,
          value: 'project_name',
        },
        { text: 'MS12 Version', value: 'ms12version' },
        { text: 'Committer', value: 'committer' },
        { text: 'Commit Date', value: 'submit_time' },
        { text: 'Data', value: 'questionnaire_data.que1'},
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        project_name: '',
        ms12version: '',
        committer: '',
        submit_time: '',
        questionnaire_data: '',
      },
      defaultItem: {
        name: '',
        version: '',
        committer: '',
        commitdate: '',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.$api.questionnaire.getQues().then(response => {
            console.log(response)
            this.desserts = response.data.data;
        })
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          this.$api.questionnaire.updateQues(this.editedItem);
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.$api.questionnaire.addQues(this.editedItem);
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>