

export class GlobalsServices {

		arUsuarios = [
			{nome: 'admin', senha: 'admin', tipo: 1}
		];

		/*
			TIPO
			1 - ADMIN
			2 - USER
		*/

		addUsuario(obj){
			this.arUsuarios.push(obj);
		}

		getUsuarios(){
			return this.arUsuarios;
		}

		logar(obj){
			let retorno = false;
			for(let item of this.arUsuarios){
				if(obj.user == item.nome && obj.senha == item.senha){
					retorno = true;
				}
			}
			return retorno;
		}
}
