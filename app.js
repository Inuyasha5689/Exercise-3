new Vue({
        el: '#exercise',
        data: {
            value: 0
        },
        computed: {
            output: function() {
                return this.value != 37 ? 'Done' : 'Not There Yet';
            }
        },
        watch: {
            value: function(value) {
                var vm = this;
                setTimeout(function() {
                    vm.value = 0;
                }, 5000);
            }
        },
        methods: {
            result: function() {
                return this.value >= 37 ? 'Done' : 'Not There Yet';
            }
        }
    });