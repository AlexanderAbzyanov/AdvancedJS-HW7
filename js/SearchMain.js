// компонент поиска в него переносим из main userSearch и помещаем в data
// далее в шаблоне вызываем метод filter спомощью $root это index.html далее в нем находим
// элемент ссылающийся на компонент в котором находится интересующий нас метод это будет компонент
// products поэтому пишем $refs и указываем сам компонент products далее в нем нужный намметод
// filter и передаем ему в качестве аргумента userSearch который получает значение из input
// я еще сделал реактивность через событие @keyup
Vue.component('search',{
    data(){
        return {
            userSearch: '',
        }
      },
    template: `
        <form action="#" class="search-form" @submit.prevent="$root.$refs.products.filter(userSearch)">
            <input type="text" class="search-field" v-model="userSearch">
            <button class="btn-search" type="submit">
                <i class="fas fa-search"></i>
            </button>
        </form>`
});