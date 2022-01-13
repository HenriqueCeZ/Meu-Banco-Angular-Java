package com.indracompany.treinamento.model.service;

import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.TimeZone;

import javax.transaction.Transactional;

import com.indracompany.treinamento.exception.AplicacaoException;
import com.indracompany.treinamento.exception.ExceptionValidacoes;
import com.indracompany.treinamento.model.entity.Conta;
import com.indracompany.treinamento.model.repository.ContaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContaService extends GenericCrudService<Conta, Long, ContaRepository> {

    
	@Autowired
	private ClienteService clienteService;

	@Autowired
	private ContaRepository contaRepository;

    Date data = new Date(0);
	SimpleDateFormat fmt = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");

    public double consultarSaldo(String agencia, String numeroConta) {
		Conta c = this.consultarConta(agencia, numeroConta);
		return c.getSaldo();
    }

    public Conta consultarConta(String agencia, String numeroConta) {
		Conta c = contaRepository.findByAgenciaAndNumero(agencia, numeroConta);
		if (c == null) {
			throw new AplicacaoException(ExceptionValidacoes.ERRO_CONTA_INVALIDA);
		}
		return c;
	}
 


	@Transactional(rollbackOn = Exception.class)
	public void depositar(String nomeContaRecebimento,String agencia, String numeroConta, double valor, String tipoOperacao) {
		Conta conta = this.consultarConta(agencia, numeroConta);
		if (valor<=0) {
			throw new AplicacaoException(ExceptionValidacoes.ERRO_ACESSO_NEGADO_JIRA);
		}
		conta.setSaldo(conta.getSaldo() + valor);
		super.salvar(conta);
	
	}
	
	@Transactional(rollbackOn = Exception.class)
	public void sacar(String nomeContaDestino, String agencia, String numeroConta, double valor, String tipoOperacao) {
		Conta conta = this.consultarConta(agencia, numeroConta);
		if (valor<=0) {
			throw new AplicacaoException(ExceptionValidacoes.ERRO_ACESSO_NEGADO_JIRA);
		}
		if (conta.getSaldo()<valor) {
			throw new AplicacaoException(ExceptionValidacoes.ERRO_SALDO_INEXISTENTE);
		}
		
		conta.setSaldo(conta.getSaldo() - valor);
		super.salvar(conta);
	
	}

    
}
