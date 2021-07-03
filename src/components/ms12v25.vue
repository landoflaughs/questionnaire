<template>
    <div>
        <template>
            <v-tabs :value="1" background-color="primary">
                <v-tab @click="$router.push({name:'dolbyindex'})">主页</v-tab>
                <v-tab @click="$router.push({name:'ms12v25'})">问卷</v-tab>
                <v-tab @click="$router.push({name:'SavedData'})">问卷记录</v-tab>
            </v-tabs>
        </template>
        <template>
            <v-form>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field label="机型" v-model="quesItem.stbmodel"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field label="MS12版本" v-model="quesItem.version"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field label="填写人" v-model="quesItem.committer"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field label="提交日期" v-model="quesItem.submitdate"></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
        </template>
        * 1. What type of product is the device to be tested?
        <template>
        <v-container
            class="px-1"
            fluid
        >
            <v-radio-group v-model="contentItem.que1">
                <v-col
            cols="12"
            sm="6"
            md="6"
          >
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
        </template>

        * 2. Which audio decoding formats are supported additional by the product to be tested?
        <template>
        <v-container fluid>
            <!-- <p>{{ selected }}</p> -->
            <v-checkbox
            v-model="contentItem.que2"
            label="HEAAC"
            :value=1
            ></v-checkbox>
            <!-- v-if="contentItem.que1 == 1" -->
            <v-checkbox
            v-model="contentItem.que2"
            label="AAC"
            :value=2
            ></v-checkbox>
            <v-checkbox
            v-model="contentItem.que2"
            label="AVC"
            :value=3
            ></v-checkbox>
            <v-checkbox
            v-model="contentItem.que2"
            label="WAV"
            :value=4
            ></v-checkbox>
            <v-checkbox
            v-model="contentItem.que2"
            label="MIDI"
            :value=5
            ></v-checkbox>
        </v-container>
        </template>
        
        * 3. ……………………
        <template>
        <v-container
            class="px-3"
            fluid
        >
            <v-radio-group v-model="contentItem.que3" column>
            <v-radio
                label="to_be_defined"
                :value="1"
            ></v-radio>
            </v-radio-group>
        </v-container>
        </template>

        <v-btn color="primary" @click="submitQues">提交</v-btn>

    </div>
</template>

<script>
  export default {
    data () {
      return {
        quesItem:{
            stbmodel:"",
            version:"",
            committer:"",
            submitdate:""
        },
        contentItem:{
            que1: 0,que2: [],que3: 0
        }

      }
    },
// 要想辦法把questionnaire_data的數據從字典轉為文本
    methods: {
        submitQues() {
            let post_data = {
                "committer": this.quesItem.committer,
                "project_name": this.quesItem.stbmodel,
                "ms12version": this.quesItem.version,
                "submit_time": this.quesItem.submitdate,
                // "questionnaire_data": "temp text for test"
                "questionnaire_data": this.contentItem
            }
            this.$api.questionnaire.postQues(post_data).this(res=>{
                console.log(res)
            })
        }
    }
  }
</script>

<style scoped>
.btn{
    margin: 10px;
}
</style>