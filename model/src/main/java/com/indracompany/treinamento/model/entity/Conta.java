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
@Table(name = "contas")
@Data
@EqualsAndHashCode(callSuper = true)
public class Conta extends GenericEntity<Long>{
	

	private static final long serialVersionUID = -5824703733929187165L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(length = 4, nullable = false)
	private String agencia;
	
	@Column(length = 6, nullable = false)
	private String numero;
	
	@Column(nullable = false)
	private double saldo;
	
	@ManyToOne  //relacionamento com o cliente  / muitos para 1
	@JoinColumn(name = "fk_cliente_id", nullable = false)
	private Cliente cliente;

}