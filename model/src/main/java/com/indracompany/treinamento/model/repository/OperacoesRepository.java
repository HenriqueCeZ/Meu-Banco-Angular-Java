package com.indracompany.treinamento.model.repository;

import java.util.List;

import com.indracompany.treinamento.model.entity.Conta;
import com.indracompany.treinamento.model.entity.Operacoes;

public interface OperacoesRepository extends GenericCrudRepository<Operacoes, Long> {
	
	List<Operacoes> findByContaOrderByDataHoraDesc(Conta conta);
	
	
}