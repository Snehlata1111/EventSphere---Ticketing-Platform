package com.eventsphere.tickets.mappers;

import com.eventsphere.tickets.domain.CreateEventRequest;
import com.eventsphere.tickets.domain.CreateTicketTypeRequest;
import com.eventsphere.tickets.domain.UpdateEventRequest;
import com.eventsphere.tickets.domain.UpdateTicketTypeRequest;
import com.eventsphere.tickets.domain.dtos.CreateEventRequestDto;
import com.eventsphere.tickets.domain.dtos.CreateEventResponseDto;
import com.eventsphere.tickets.domain.dtos.CreateTicketTypeRequestDto;
import com.eventsphere.tickets.domain.dtos.GetEventDetailsResponseDto;
import com.eventsphere.tickets.domain.dtos.GetEventDetailsTicketTypesResponseDto;
import com.eventsphere.tickets.domain.dtos.GetPublishedEventDetailsResponseDto;
import com.eventsphere.tickets.domain.dtos.GetPublishedEventDetailsTicketTypesResponseDto;
import com.eventsphere.tickets.domain.dtos.ListEventResponseDto;
import com.eventsphere.tickets.domain.dtos.ListEventTicketTypeResponseDto;
import com.eventsphere.tickets.domain.dtos.ListPublishedEventResponseDto;
import com.eventsphere.tickets.domain.dtos.UpdateEventRequestDto;
import com.eventsphere.tickets.domain.dtos.UpdateEventResponseDto;
import com.eventsphere.tickets.domain.dtos.UpdateTicketTypeRequestDto;
import com.eventsphere.tickets.domain.dtos.UpdateTicketTypeResponseDto;
import com.eventsphere.tickets.domain.entities.Event;
import com.eventsphere.tickets.domain.entities.TicketType;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface EventMapper {

  CreateTicketTypeRequest fromDto(CreateTicketTypeRequestDto dto);

  CreateEventRequest fromDto(CreateEventRequestDto dto);

  CreateEventResponseDto toDto(Event event);

  ListEventTicketTypeResponseDto toDto(TicketType ticketType);

  ListEventResponseDto toListEventResponseDto(Event event);

  GetEventDetailsTicketTypesResponseDto toGetEventDetailsTicketTypesResponseDto(
      TicketType ticketType);

  GetEventDetailsResponseDto toGetEventDetailsResponseDto(Event event);

  UpdateTicketTypeRequest fromDto(UpdateTicketTypeRequestDto dto);

  UpdateEventRequest fromDto(UpdateEventRequestDto dto);

  UpdateTicketTypeResponseDto toUpdateTicketTypeResponseDto(TicketType ticketType);

  UpdateEventResponseDto toUpdateEventResponseDto(Event event);

  ListPublishedEventResponseDto toListPublishedEventResponseDto(Event event);

  GetPublishedEventDetailsTicketTypesResponseDto toGetPublishedEventDetailsTicketTypesResponseDto(
      TicketType ticketType);

  GetPublishedEventDetailsResponseDto toGetPublishedEventDetailsResponseDto(Event event);
}
