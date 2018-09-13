//an other solution
_searched() {
let key = this.state.search.toLowerCase();
return this.state.Menù.filter(item => {
let name = item.name.toLowerCase();
let category = item.category.toLowerCase();
return (name.search(key) !== -1 || category.search(key) !== -1);
});
}

//per descrizione possibile stringhe
/*aggiungere la variabile 
let info=item.info.toLowerCase(); 
e poi nel return devi aggiungere un'altro OR quindi || seguito da:
info.search(key)!==-1; */
