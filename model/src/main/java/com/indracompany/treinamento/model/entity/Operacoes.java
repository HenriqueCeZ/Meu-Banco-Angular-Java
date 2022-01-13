package com.indracompany.treinamento.model.entity;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "extrato")
@Data
@EqualsAndHashCode(callSuper = true)
public class Operacoes extends GenericEntity<Long>{
	
	
	private static final long serialVersionUID = -6014201839266543907L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne
	@JoinColumn(name = "fk_cliente_id", nullable = false)
	private Cliente cliente;
	
	@Column(name = "agencia", nullable = false)
	private String agencia;
	
	@Column(name = "conta", nullable = false)
	private String conta;
	
	// 'depositar', 'saque' e 'transferencia' 
	@Column(name = "operacao", nullable = false)
	private String operacao;
	
	@Column(length = 100)
	private String observacao;
	
	@Column(name = "valor", nullable = false)
	private double valor;
	
	
	@Column(name = "dataHora")
	private String dataHora;
	
	@Column(name = "contaOrigem", nullable = true)
	private String contaOrigem;
	
	@Column(name = "contaDestino", nullable = true)
	private String contaDestino;
	
	@Column(name = "saldo", nullable = false)
	private double saldo;

}