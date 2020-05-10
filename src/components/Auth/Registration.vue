<template>
  <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="5"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="deep-purple"
                dark
                flat
              >
                <v-toolbar-title>Registration form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form ref="form"
                  v-model="valid"
                  validation>

                  <v-text-field
                    label="email"
                    name="email"
                    prepend-icon="mdi-email"
                    type="email"
                    v-model="email"
                    :rules="emailRules"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="password"
                    :rules="passwordRules"
                    :counter="6"
                  ></v-text-field>

                   <v-text-field
                    id="confirm_password"
                    label="Confirm password"
                    name="confirm_password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="confirmPassword"
                    :rules="confirmPasswordRules"
                    :counter="6"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="deep-purple"
                  dark
                  @click="onSubmit"
                  :disabled='!valid'
                  >Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
export default {
  data(){
    return {
      email: '',
      password: '',
      confirmPassword: '',
      valid: false,
      emailRules: [
        v => !!v || 'Name is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'PAssword must be more than 6 characters'
      ],
      confirmPasswordRules: [
        v => !!v || 'Password is required',
        v => (v===this.password) || 'Password should be matched'
      ]
    }
  },
  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password
        }
        console.log(user);

      }
    },
    prependIconCallback () {},
  }
}
</script>

<style scoped>

</style>