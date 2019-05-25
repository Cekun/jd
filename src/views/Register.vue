<template>
  <div>
 
    <cube-form
        :model="model"
        :schema="schema"
        @submit="submitHandler">
    </cube-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        username: '',
        password: ''
      },
      schema: {
        fields: [
          {
            type: 'input',
            modelKey: 'username',
            label: "用户名",
            props: {
              placeholder: '请输入用户名'
            },
            rules: {
              required: true,
              type: 'string',
              min: 3,
              max: 15
            },
            // validating when blur
            trigger: "blur",
            messages:{
                required:'用户名不能为空',
                min:'用户名不能少于3个字符',
                max:'用户名不能大于15个字符'
            }
          },
          {
            type: 'input',
            modelKey: 'password',
            label: "密码",
            props: {
              placeholder: '请输入密码',
              type: 'password',
              eye: {
                  open: false,
              }
            },
            rules: {
              required: true
            },
            // validating when blur
            trigger: "blur",
           
          },
          {
              type: 'submit',
              label: '注册'
          }
        ]
      }
    };
  },
  methods: {
      submitHandler(e){
          e.preventDefault();
          console.log('1');
      }
  }
}
</script>


<style lang="stylus" scoped>

</style>
