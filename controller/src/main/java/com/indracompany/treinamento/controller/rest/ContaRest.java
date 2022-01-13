package com.indracompany.treinamento.controller.rest;

import com.indracompany.treinamento.model.dto.DepositoDTO;
import com.indracompany.treinamento.model.service.ContaService;
import com.indracompany.treinamento.model.entity.Conta;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("rest/contas")
public class ContaRest extends GenericCrudRest<Conta, Long, ContaService>{
    
    @Autowired
	private ContaService contaBancariaService;

    @PostMapping(value = "/deposito", produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<Void> depositar(@RequestBody DepositoDTO dto){
		contaBancariaService.depositar(null, dto.getAgencia(), dto.getNumeroConta(), dto.getValor(), "DEPOSITAR");
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@PostMapping(value = "/saque", produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<Void> sacar(@RequestBody DepositoDTO dto){
		contaBancariaService.sacar(null, dto.getAgencia(), dto.getNumeroConta(), dto.getValor(), "SACAR");
		return new ResponseEntity<>(HttpStatus.OK);
	}


}
