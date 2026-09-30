package com.eventsphere.tickets.services;

import com.eventsphere.tickets.domain.entities.Ticket;
import java.util.UUID;

public interface TicketTypeService {
  Ticket purchaseTicket(UUID userId, UUID ticketTypeId);
}
