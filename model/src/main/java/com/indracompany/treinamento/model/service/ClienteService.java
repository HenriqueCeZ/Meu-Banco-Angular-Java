package com.indracompany.treinamento.model.service;

import org.springframework.stereotype.Service;

import com.indracompany.treinamento.model.dto.ClienteDTO;
import com.indracompany.treinamento.model.entity.Cliente;
import com.indracompany.treinamento.model.repository.ClienteRepository;

@Service
public class ClienteService extends GenericCrudService<Cliente, Long, ClienteRepository>{

    public ClienteDTO buscarClientePorCpf(String cpf) {
        return null;
    }

	  
}
