<template>
    <div>
        <button @click="setMiddleName()">CLICK ME</button>
        <div>First Name: {{person.firstName}}</div>
        <div>Middle Name: {{person.middleName}}</div>
        <div>Last Name: {{person.lastName}}</div>
    </div>
</template>

<script>
/* eslint-disable */
import Vue from 'vue'

export default {
    props: {
        person: {
            Type: Object,
            required: true,
            default() {
                return {
                    firstName: '',
                    middleName: '',
                    lastName : ''
                }
            }
        }
    },
    methods: {
        setMiddleName () {
            Vue.set(this.person, 'middleName', 'Snow')
        }
    }
}
</script>
