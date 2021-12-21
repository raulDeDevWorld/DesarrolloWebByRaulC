export const crudItemsMixin = {
		data(){
			return{
				items:[],
				item:'',
				buscar:'',
				filtrarItem:''

			}
		},
		methods: {
			agregarItem(){
				this.items.unshift({title:this.item})
				this.item=''
			},
			eliminar(index){
				this.items.splice(index, 1)
			}
		},
		computed: {
			filtroItems(){
				return this.items.filter(item=> item.title.includes(this.filtrarItem))

			}
		},
}