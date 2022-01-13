package com.indracompany.treinamento.model.repository;

import java.util.List;

import com.indracompany.treinamento.model.entity.Cliente;
import com.indracompany.treinamento.model.entity.Conta;

public interface ContaRepository extends GenericCrudRepository<Conta, Long >{

    Conta findByAgenciaAndNumero(String agencia, String numero); //criar uma consulta no db na tabela contas que vai validar agencia e numero
	
	List<Conta> findByCliente(Cliente cli);

	

}
