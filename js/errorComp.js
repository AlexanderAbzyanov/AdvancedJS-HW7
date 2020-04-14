Vue.component('error-fix', {
    data(){
        return {
            errorMessage: 'Не получены данные с сервера',
            visible: false,
        }
      },
    methods: {
        isErrorVisible () {
            if ($root.$refs.products.filtered.length) {
                visible = true;
            } else {
                visible = false; 
            }
        }
    },
    
    template: `
    <div v-show="visible"> {{errorMessage}} </div>`   
});