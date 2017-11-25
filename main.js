var app = new Vue({
    el : '#app',
    data : {
        title : 'Todo list',
        items : [
            {
                title : 'create todo list',
                descr : ' I must create todo list with vue '
            },
            {
                title : 'walk with dog',
                descr : ' I must walk with dog'
            },
        ],
        itemTitle : '',
        itemDescr : '',
    },
    methods : {
        addItem : function(){
            if(this.itemTitle != '' && this.itemDescr != ''){
                let item = {};
                item.title = this.itemTitle;
                item.descr = this.itemDescr;

                this.items.push(item);

                this.itemTitle = '';
                this.itemDescr = '';
            }
        }
    }
})