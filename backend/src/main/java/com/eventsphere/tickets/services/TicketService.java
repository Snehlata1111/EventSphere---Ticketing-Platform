package com.eventsphere.tickets.services;

import com.eventsphere.tickets.domain.entities.Ticket;
import java.util.Optional;
import java.util.UUID;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface TicketService {
  Page<Ticket> listTicketsForUser(UUID userId, Pageable pageable);
  Optional<Ticket> getTicketForUser(UUID userId, UUID ticketId);
}
