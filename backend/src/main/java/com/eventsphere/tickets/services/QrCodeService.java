package com.eventsphere.tickets.services;

import com.eventsphere.tickets.domain.entities.QrCode;
import com.eventsphere.tickets.domain.entities.Ticket;
import java.util.UUID;

public interface QrCodeService {

  QrCode generateQrCode(Ticket ticket);

  byte[] getQrCodeImageForUserAndTicket(UUID userId, UUID ticketId);
}
